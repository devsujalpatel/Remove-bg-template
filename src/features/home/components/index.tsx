// src/features/home/components/index.tsx
import React from "react";
import ImageUpload from "./image-upload";
import RemoveBgSteps from "./remove-bg-steps";
import UseCasesSection from "./use-cases-section";
import { CompareSection } from "./compare-section";

const HomePage = () => {
  return (
    <div>
      <ImageUpload />
      <RemoveBgSteps />
      <UseCasesSection />
      <CompareSection />
    </div>
  );
};

export default HomePage;
