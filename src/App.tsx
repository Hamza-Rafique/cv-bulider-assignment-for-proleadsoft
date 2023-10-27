import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Education,
  WorkHistory,
  Achievements,
  Description,
  Intro,
  Skills,
  Tools,
  Languages,
  Stepper,
} from "./components";
import Interests from "./components/Interests";

function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    "Introduction",
    "Description",
    "Education",
    "Work History",
    "Skills",
    "Achievements",
    "Tools",
    "Interests",
    "Language",
  ];

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };
  
  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };
  const handleStepClick = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: "",
      position: "",
      phoneNumber: "",
      profilePic: null,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      age: Yup.number()
        .required("Required")
        .positive("Must be a positive number"),
      position: Yup.string().required("Required"),
      phoneNumber: Yup.string().required("Required"),
      profilePic: Yup.mixed().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      // handleNextStep();
    },
  });
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">
        Build your CV with Proleadsoft
      </h1>
      <Stepper
        steps={steps}
        currentStep={currentStep}
        onStepClick={handleStepClick}
      />
      <hr />
      <div className="mt-8">
        {currentStep === 0 && (
          <Intro
            onNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
            formik={formik}
          />
        )}
        {currentStep === 1 && (
          <Description
            onNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
          />
        )}
        {currentStep === 2 && (
          <Education
            onNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
          />
        )}
        {currentStep === 3 && (
          <WorkHistory
            onNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
          />
        )}
        {currentStep === 4 && (
          <Skills onNextStep={handleNextStep} handlePrevStep={handlePrevStep} />
        )}
        {currentStep === 5 && (
          <Achievements
            onNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
          />
        )}
        {currentStep === 6 && (
          <Tools onNextStep={handleNextStep} handlePrevStep={handlePrevStep} />
        )}
        {currentStep === 7 && (
          <Interests
            onNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
          />
        )}
        {currentStep === 8 && (
          <Languages
            onNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
          />
        )}
      </div>
    </div>
  );
}

export default App;
