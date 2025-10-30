import React from 'react';
import { Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Reviews = () => (
  <div className="flex flex-col items-start sm:flex-row sm:items-center sm:space-x-2">
    {/* Avatar Group */}
    <div className="flex flex-row-reverse -space-x-4">
      <div className="flex flex-row flex-wrap items-center gap-12">
        <div className="*:data-[slot=avatar]:ring-background flex -space-x-4 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
          <Avatar className="w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] border-2 border-white">
            <AvatarImage src="/avatars/6.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] border-2 border-white">
            <AvatarImage src="/avatars/5.png" alt="@maxleiter" />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
          <Avatar className="w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] border-2 border-white">
            <AvatarImage src="/avatars/4.png" alt="@evilrabbit" />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
          <Avatar className="w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] border-2 border-white">
            <AvatarImage src="/avatars/3.png" alt="@maxleiter" />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
          <Avatar className="w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] border-2 border-white">
            <AvatarImage src="/avatars/2.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>

    {/* Rating and Text */}
    <div className="mt-2 sm:mt-0">
      <div className="flex items-center space-x-1">
        <Star className="w-5 h-5 text-[#FF9D00] fill-[#FF9D00]" />
        <Star className="w-5 h-5 text-[#FF9D00] fill-[#FF9D00]" />
        <Star className="w-5 h-5 text-[#FF9D00] fill-[#FF9D00]" />
        <Star className="w-5 h-5 text-[#FF9D00] fill-[#FF9D00]" />
        <Star className="w-5 h-5 text-[#FF9D00] fill-[#FF9D00]" />
        <span className="ml-3 text-sm md:text-lg font-normal">5.0</span>
      </div>
      <p className="text-sm md:text-lg font-normal">
        From 3000+ Reviews
      </p>
    </div>
  </div>
);

export default Reviews;
