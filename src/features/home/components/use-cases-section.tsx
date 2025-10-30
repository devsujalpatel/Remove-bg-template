'use client';

import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BgWhiteWrapper from '@/components/shared/bg-white-wrapper';

const tabsData = [
  {
    value: 'people',
    label: 'People',
    images: {
      original: '/tabs/people/people-original.png',
      removed: '/tabs/people/people-removed.png',
      newBg: '/tabs/people/people-removed.png',
      possibilities: '/tabs/people/people-grid.png',
    },
  },
  {
    value: 'products',
    label: 'Products',
    images: {
      original: '/tabs/product/product-original.png',
      removed: '/tabs/product/product-removed.png',
      newBg: '/tabs/product/product-new-bg.png',
      possibilities: '/tabs/product/product-grid.png',
    },
  },
  {
    value: 'animals',
    label: 'Animals',
    images: {
      original: '/tabs/animal/animal-original.png',
      removed: '/tabs/animal/animal-removed.png',
      newBg: '/tabs/animal/animal-new-bg.png',
      possibilities: '/tabs/animal/animal-grid.png',
    },
  },
  {
    value: 'cars',
    label: 'Cars',
    images: {
      original: '/tabs/car/car-original.png',
      removed: '/tabs/car/car-removed.png',
      newBg: '/tabs/car/car-new-bg.png',
      possibilities: '/tabs/car/car-grid.png',
    },
  },
  {
    value: 'graphics',
    label: 'Graphics',
    images: {
      original: '/tabs/graphics/graphic-original.png',
      removed: '/tabs/graphics/graphic-removed.png',
      newBg: '/tabs/graphics/graphic-new-bg.png',
      possibilities: '/tabs/graphics/graphic-grid.png',
    },
  },
];

const UseCasesSection = () => {
  return (
    <>
      <BgWhiteWrapper className='mb-14 md:mb-24 lg:mb-36'>
        <div className="container text-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black leading-tight">
            Create Transparent Backgrounds With Ease
          </h2>

          {/* 3. Paragraph: Styled using classes from ImageUpload for consistency */}
          <p className="text-base md:text-lg text-black font-medium max-w-[1190px] mx-auto mt-5 md:mt-7 mb-8 md:mb-12 px-2 md:px-10">
            Our AI-powered remover makes it simple to turn any image into a
            clean, transparent PNG. From product photos and portraits to
            signatures or graphics, the tool adapts to all kinds of images. In
            just a few seconds, you’ll have a polished, background-free file
            that’s ready to drop into your designs, websites, or marketing
            projects without any extra effort. 
          </p>

          {/* 4. Shadcn Tabs Component */}
          <Tabs defaultValue="people" className="w-full">
            <TabsList className="h-auto bg-transparent p-0 flex-wrap justify-center gap-x-6 gap-y-2">
          {tabsData.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="text-base md:text-lg font-medium text-black
                         data-[state=active]:bg-[#378EF2] data-[state=active]:text-primary-foreground
                         data-[state=active]:rounded-full data-[state=inactive]:bg-transparent
                         data-[state=active]:shadow-none px-5 py-2"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

            {/* 5. Tab Content: The 4-image grid */}
            <div className="mt-10">
              {tabsData.map((tab) => (
                <TabsContent key={tab.value} value={tab.value}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Original Image */}
                    <div className="text-center">
                      <Image
                        src={tab.images.original}
                        alt={`Original ${tab.label} image`}
                        width={400}
                        height={400}
                        className="w-full h-auto object-cover rounded-xl shadow-lg"
                      />
                      <p className="mt-6 text-lg md:text-2xl font-bold text-black">
                        Original Image
                      </p>
                    </div>

                    {/* Remove Background */}
                    <div className="text-center">
                      <Image
                        src={tab.images.removed}
                        alt={`Removed background ${tab.label} image`}
                        width={400}
                        height={400}
                        className="w-full h-auto object-cover rounded-xl shadow-lg"
                      />
                      <p className="mt-6 text-lg md:text-2xl font-bold text-black">
                        Remove Background
                      </p>
                    </div>

                    {/* Add New Background */}
                    <div className="text-center">
                      <Image
                        src={tab.images.newBg}
                        alt={`New background ${tab.label} image`}
                        width={400}
                        height={400}
                        className="w-full h-auto object-cover rounded-xl shadow-lg"
                      />
                      <p className="mt-6 text-lg md:text-2xl font-bold text-black">
                        Add New Background
                      </p>
                    </div>

                    {/* Endless Possibilities */}
                    <div className="text-center">
                      <Image
                        src={tab.images.possibilities}
                        alt={`Endless possibilities ${tab.label} image`}
                        width={400}
                        height={400}
                        className="w-full h-auto object-cover rounded-xl shadow-lg"
                      />
                      <p className="mt-6 text-lg md:text-2xl font-bold text-black">
                        Endless Possibilities
                      </p>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </BgWhiteWrapper>
    </>
  );
};

export default UseCasesSection;
