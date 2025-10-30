'use client';

// ** React Imports
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

// ** Third Party Imports
import { Loader2 } from 'lucide-react';

// ** Component Imports
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Reviews from './reviews';
import { Avatar } from '@radix-ui/react-avatar';
import BgBlueWrapper from '@/components/shared/bg-blue-wrapper';

const ImageUpload = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const router = useRouter();

  const validateImageFile = (file: File): boolean => {
    const allowedTypes = [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/webp',
      'image/heic',
      'image/heif',
    ];
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'webp', 'heic', 'heif'];
    let isValidType = false;

    if (file.type && allowedTypes.includes(file.type)) {
      isValidType = true;
    } else {
      const extension = file.name.split('.').pop()?.toLowerCase();
      if (extension && allowedExtensions.includes(extension)) {
        isValidType = true;
      }
    }

    if (!isValidType) {
      alert(
        'Please select a valid image file (JPG, JPEG, PNG, WEBP, HEIC, HEIF)',
      );
      return false;
    }

    const maxSize = 20 * 1024 * 1024; // 20MB
    if (file.size > maxSize) {
      alert('Image size should be less than 20MB');
      return false;
    }

    return true;
  };

  const handleImageUpload = async (file: File) => {
    if (!validateImageFile(file)) return;

    setIsLoading(true);

    const baseUrl = process.env.NEXT_PUBLIC_BG_REMOVAL_API_URL;

    if (!baseUrl) {
      console.error('API base URL is not defined. Check your .env file.');
      alert('Configuration error: The API base URL is missing.');
      setIsLoading(false);
      return;
    }

    const endpoint = 'remove-bg-single/';
    const apiUrl = `${baseUrl}${endpoint}`;

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await axios.post(apiUrl, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        timeout: 30000,
      });

      if (
        response.data &&
        response.data.status === 'success' &&
        response.data.url
      ) {
        const imageUrl = response.data.url;
        const reader = new FileReader();
        reader.onload = (event: ProgressEvent<FileReader>) => {
          const originalDataUrl = event.target?.result as string;
          sessionStorage.setItem('originalImage', originalDataUrl);
          sessionStorage.setItem('uploadedImage', imageUrl);
          sessionStorage.setItem('bgRemoved', 'true');
          router.push('/editor');
        };
        reader.readAsDataURL(file);
      } else {
        throw new Error(
          'API request was successful, but no image URL was returned.',
        );
      }
    } catch (error) {
      console.error('Error removing background:', error);
      const fallbackReader = new FileReader();
      fallbackReader.onload = (event: ProgressEvent<FileReader>) => {
        const imageUrl = event.target?.result as string;
        if (imageUrl) {
          sessionStorage.setItem('originalImage', imageUrl);
          sessionStorage.setItem('uploadedImage', imageUrl);
          alert(
            'Background removal service is currently unavailable. Loading original image in editor.',
          );
          router.push('/editor');
        } else {
          alert('Failed to process the image. Please try again.');
          setIsLoading(false);
        }
      };
      fallbackReader.readAsDataURL(file);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleImageUpload(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageUpload(e.dataTransfer.files[0]);
    }
  };

  const handleSampleImageClick = async (imageUrl: string) => {
    try {
      setIsLoading(true); // Show loader while fetching sample
      const response = await fetch(imageUrl);
      if (!response.ok)
        throw new Error(`Failed to fetch image: ${response.statusText}`);
      const blob = await response.blob();
      const filename = imageUrl.split('/').pop() || 'sample.jpg';
      const file = new File([blob], filename, { type: blob.type });
      await handleImageUpload(file); // Await the upload
    } catch (error) {
      console.error('Error processing sample image:', error);
      alert(
        'Failed to load the sample image. Please check the console for details.',
      );
      setIsLoading(false); // Stop loader on error
    }
  };

  // Visually hidden input
  const VisuallyHiddenInput = (
    <input
      id="image-upload-dropzone"
      type="file"
      accept="image/*"
      onChange={handleFileChange}
      className="sr-only"
      disabled={isLoading}
    />
  );

  return (
    <>
      <BgBlueWrapper className='mb-14 md:mb-24 lg:mb-36'>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column (Text & Reviews) */}
            <div className="text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black leading-tight">
                Free Image Background Remover, No Cost
              </h1>
              <p className="text-base md:text-lg text-black font-medium max-w-[690px] mx-auto md:mx-0 mt-5 md:mt-7 mb-5 md:mb-12">
                Upload your photo and get a clean, polished image without any
                effort. Our image background remover is fast, simple, and
                completely free to use whenever you need it.
              </p>
              <div className="flex justify-center md:justify-start">
                <Reviews />
              </div>
            </div>

            {/* Right Column (Dropzone & Samples) */}
            <div>
              {/* UploadDropzone Container */}
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={cn(
                  'p-4 sm:p-6 bg-white rounded-2xl w-full max-w-[704px] h-[360px] sm:h-[460px] md:h-[593px]',
                  'flex transition-colors mx-auto md:mx-0 md:ml-auto mt-6 md:mt-14 lg:mt-20',
                )}
              >
                {/* Dashed Inner Box */}
                <div
                  className={cn(
                    'flex-grow flex flex-col items-center justify-center rounded-lg border-dashed border',
                    'transition-colors',
                    isDragging ? 'border-primary bg-muted' : 'border-[#378EF2]',
                  )}
                >
                  {isLoading ? (
                    <div className="text-center">
                      <Loader2 className="w-12 h-12 mx-auto animate-spin" />
                      <h3 className="mt-4 text-lg font-medium">
                        Processing Image...
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        This may take a few moments
                      </p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <Button
                        asChild
                        size="lg"
                        variant="appBlueBtn"
                        className="rounded-full px-7 py-6 text-base"
                      >
                        <label htmlFor="image-upload-dropzone">
                          Upload Image
                          {VisuallyHiddenInput}
                        </label>
                      </Button>

                      <p className="my-4 text-sm sm:text-base md:text-lg font-medium">
                        or drop photos here
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Sample Images Section */}
              <div className="mt-4 md:mt-6 text-center">
                <p className="text-sm sm:text-base md:text-lg text-black mb-2 font-normal">
                  <span className="font-bold">No image?</span> Try one of these
                </p>
                <div className="flex flex-row justify-center gap-3">
                  {[
                    { src: 'elements/purse.png', alt: 'Purse' },
                    { src: 'elements/tiger.png', alt: 'Tiger' },
                    { src: 'elements/white-car.png', alt: 'Car' },
                  ].map((image) => (
                    <Avatar
                      key={image.src}
                      // variant='rounded'
                      className={cn(
                        'w-14 h-14 sm:w-16 sm:h-16 rounded-lg cursor-pointer transition-transform hover:scale-105',
                        isLoading && 'opacity-50 cursor-not-allowed',
                      )}
                      onClick={() =>
                        !isLoading && handleSampleImageClick(image.src)
                      }
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </Avatar>
                  ))}
                </div>
                <p className="mt-5 text-xs md:text-sm font-medium mb-4 md:mb-10 lg:mb-16">
                  By uploading an image you agree to our Terms and Privacy
                  Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </BgBlueWrapper>
    </>
  );
};

export default ImageUpload;
