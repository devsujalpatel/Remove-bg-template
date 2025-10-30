import { Button } from "@/components/ui/button";
import Image from "next/image";

export const CompareSection = () => {
  return (
    <div className="grid grid-cols-2 bg-[#378EF2] max-w-[96vw] mx-auto rounded-xl px-20 py-30">
      <div className="flex justify-start">
        <Image
          src="/tabs/graphics/graphic-grid-layout.png"
          alt="Grid Image"
          width={700}
          height={800}
        />
      </div>
      <div className="w-[82%]">
        <h1 className="text-6xl leading-tight font-bold text-white">
          What Makes ABC Different?
        </h1>
        <p className="text-lg font-medium text-white my-5">
          Picking the right background remover makes all the difference. Our
          tool is designed to give you speed, accuracy, and flexibility so you
          can focus on creating, not editing
        </p>
        <div className="space-y-5">
          <Button
            className="rounded-full py-6.5 text-lg px-5 text-neutral-600 flex items-center justify-between hover:bg-transparent hover:border-[#BFE831] ease transition-all duration-300"
            variant="outline"
          >
            <img
              src="/elements/green-tick.svg"
              alt="Green tick"
              className="mr-3 size-7"
            />
            Lightning-Fast Editing
          </Button>
          <Button
            className="rounded-full py-6.5 text-lg px-5 text-neutral-600 flex items-center justify-between hover:bg-transparent hover:border-[#BFE831] ease transition-all duration-300"
            variant="outline"
          >
            <img
              src="/elements/green-tick.svg"
              alt="Green tick"
              className="mr-3 size-7"
            />
            Smart AI Precision
          </Button>
          <Button
            className="rounded-full py-6.5 text-lg px-5 text-neutral-600 flex items-center justify-between hover:bg-transparent hover:border-[#BFE831] ease transition-all duration-300"
            variant="outline"
          >
            <img
              src="/elements/green-tick.svg"
              alt="Green tick"
              className="mr-3 size-7"
            />
            Unlimited Creative Options
          </Button>
        </div>
        <Button className="rounded-full mt-8 text-lg bg-[#BFE831] text-black py-7 px-6">Start Creating</Button>
      </div>
    </div>
  );
};
