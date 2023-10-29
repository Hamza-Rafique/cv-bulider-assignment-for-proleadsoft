import React from "react";

interface StepperProps {
  steps: string[];
  currentStep: number;
  onStepClick: (stepIndex: number) => void;
}

const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  onStepClick,
}) => {
  return (
    <div className="flex justify-center mb-4">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`mx-2 ${
            currentStep === index
              ? "text-blue-500 cursor-pointer"
              : "text-gray-500 cursor-pointer"
          }`}
          onClick={() => onStepClick(index)}
        >
          {step}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
