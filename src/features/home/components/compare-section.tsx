import { Button } from "@/components/ui/button";
import Image from "next/image";

export const CompareSection = () => {
  return (
    <div className="grid grid-cols-2 bg-[#378EF2]">
      <div>
        <Image src="/tabs/graphics/grid.svg" alt="Grid Image" width={500} height={500} />
      </div>
      <div>
        <h1>What Makes ABC Different?</h1>
        <p>
          Picking the right background remover makes all the difference. Our
          tool is designed to give you speed, accuracy, and flexibility so you
          can focus on creating, not editing
        </p>
        <div className="flex flex-col">
          <Button>Lightning-Fast Editing</Button>
          <Button>Smart AI Precision</Button>
          <Button>Unlimited Creative Options</Button>
        </div>
        <Button>Start Creating</Button>
      </div>
    </div>
  );
};
