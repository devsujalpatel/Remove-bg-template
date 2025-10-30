// src/features/home/components/remove-bg-steps.tsx
import BgWhiteWrapper from '@/components/shared/bg-white-wrapper';
import React from 'react';

const steps = [
  {
    title: 'Upload Your Image',
    description:
      'Choose the photo you want to edit and upload it to our tool. No sign-up, no hassle - just drag and drop to get started.',
    number: '1',
    dot: '01',
  },
  {
    title: 'Select & Remove Background',
    description:
      'Highlight the area you want to keep, and let our smart tool clear away the rest. You stay in control, while we make the process effortless.',
    number: '2',
    dot: '02',
  },
  {
    title: 'Download Your New Image',
    description:
      'Once the background is gone, simply save your fresh, polished photo. It’s quick, clean, and ready to use anywhere.',
    number: '3',
    dot: '03',
  },
];

// We convert the 'sx' objects into strings of Tailwind classes
const stepConfigurations = [
  {
    hexagonAndDotPosition: 'md:top-[350px] md:left-[12%]',
    bigNumberPosition: 'md:top-[-20px] md:left-[25%]',
    textPosition: 'md:top-[170px] md:left-0',
  },
  {
    hexagonAndDotPosition: 'md:top-[50px] md:left-[52.5%] md:-translate-x-1/2',
    bigNumberPosition: 'md:top-[230px] md:left-[55%] md:-translate-x-1/2',
    textPosition: 'md:top-[420px] md:left-[48%] md:-translate-x-1/2',
  },
  {
    hexagonAndDotPosition: 'md:top-[145px] md:right-[8%]',
    bigNumberPosition: 'md:top-[230px] md:right-[1%]',
    textPosition: 'md:top-[420px] md:right-[1%]',
  },
];

const RemoveBgSteps = () => {
  const StepHexagonAndDot = ({ dot }: { dot: string }) => (
  <div
    className="relative w-[100px] h-[110px] group cursor-default
               before:content-[''] before:absolute before:top-0 before:left-0
               before:w-full before:h-full before:bg-[rgba(55,142,242,0.2)]
               before:[clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]
               before:translate-y-[8px] before:blur-[15px] before:-z-10"
  >
    <div
      className="w-full h-full bg-white
                 [clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]
                 flex items-center justify-center text-black
                 font-extrabold text-[50px]
                 transition-colors duration-300 group-hover:text-[#378EF2]"
    >
      {dot}
    </div>
  </div>
);

  return (
    <BgWhiteWrapper className='mb-14 md:mb-24 lg:mb-36'>
      <div className="flex flex-wrap justify-center">
        <div className="w-full">
          <h1
            className="font-bold 
                     text-2xl sm:text-[2.5rem] md:text-[3.5rem]
                     text-center text-black max-w-[1200px] mx-auto mt-0"
          >
            How Do You Remove An Image Background In 3 Steps?
          </h1>
        </div>
        <div className="w-full">
          <div className="relative w-full min-h-0 md:min-h-[550px]">
            {/* Wavy line SVGs */}
            <div
              className="absolute top-[100px] left-0 w-full z-10 
                       pointer-events-none hidden md:block"
            >
              <img
                src="/elements/yellow-horizontal-curve.svg"
                alt="wavy process line"
                className="w-full"
              />
            </div>
            <div
              className="absolute top-[150px] left-0 w-full z-10 
                       pointer-events-none hidden md:block"
            >
              <img
                src="/elements/shadow-horizontal-curve.svg"
                alt="wavy process line shadow"
                className="w-full"
              />
            </div>

            {steps.map((step, idx) => {
              const config = stepConfigurations[idx];

              return (
                <React.Fragment key={step.number}>
                  {/* Big faded background number */}
                  <div
                    className={`relative md:absolute z-0 ${config.bigNumberPosition}`}
                  >
                    <h2
                      className="text-[200px] font-bold
                               bg-gradient-to-b from-[rgba(55,142,242,0.3)] to-85% to-[rgba(55,142,242,0)]
                               bg-clip-text text-transparent
                               -mb-2 hidden md:block"
                    >
                      {step.number}
                    </h2>
                  </div>

                  {/* Hexagon and dot group */}
                  <div
                    className={`relative md:absolute z-30 ${config.hexagonAndDotPosition}`}
                  >
                    <StepHexagonAndDot dot={step.dot} />
                  </div>

                  {/* Title and description */}
                  <div
                    className={`relative md:absolute z-20 w-full md:w-[460px] 
                              text-center md:text-left ${config.textPosition}`}
                  >
                    <h3 className="font-bold text-black mb-2.5 text-[24px] md:text-[26px]">
                      {step.title}
                    </h3>
                    <p className="text-black text-lg sm:text-base font-medium">
                      {step.description}
                    </p>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </BgWhiteWrapper>
  );
};

export default RemoveBgSteps;
