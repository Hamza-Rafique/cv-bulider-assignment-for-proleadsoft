import { useMemo, useState } from "react";
import { Form, Formik } from "formik";
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
import {
  descriptionSchema,
  educationSchema,
  introSchema,
} from "./utlits/schema";
import CV from "./pages/cv";

function App() {
  const [cvData, setCVData] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  console.log(cvData, "cvData");
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
  const validationSchema = useMemo(() => {
    switch (currentStep) {
      case 0:
        return introSchema;
      case 1:
        return descriptionSchema;
      case 2:
        return educationSchema;
      case 3:
        return "";
      case 4:
        return "";
      default:
        return Yup.object().shape({});
    }
  }, [currentStep]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 mt-4 mx-auto text-center">
        Enter Information to Build your CV with Proleadsoft
      </h1>
      <Stepper
        steps={steps}
        currentStep={currentStep}
        onStepClick={handleStepClick}
      />
      <hr />
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          age: "",
          position: "",
          phoneNumber: "",
          profilePic: null,
          educationHistory: [
            {
              institution: "",
              degree: "",
              fieldOfStudy: "",
              startDate: "",
              endDate: "",
            },
          ],
          workHistory: [
            {
              company: "",
              position: "",
              role: "",
              startDate: "",
              endDate: "",
            },
          ],
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
          setCVData(values);
        }}
      >
        {(formik) => (
          <Form>
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
                  formik={formik}
                />
              )}
              {currentStep === 2 && (
                <Education
                  onNextStep={handleNextStep}
                  handlePrevStep={handlePrevStep}
                  formik={formik}
                />
              )}
              {currentStep === 3 && (
                <WorkHistory
                  onNextStep={handleNextStep}
                  handlePrevStep={handlePrevStep}
                  formik={formik}
                />
              )}
              {currentStep === 4 && (
                <Skills
                  onNextStep={handleNextStep}
                  handlePrevStep={handlePrevStep}
                />
              )}
              {currentStep === 5 && (
                <Achievements
                  onNextStep={handleNextStep}
                  handlePrevStep={handlePrevStep}
                />
              )}
              {currentStep === 6 && (
                <Tools
                  onNextStep={handleNextStep}
                  handlePrevStep={handlePrevStep}
                />
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
          </Form>
        )}
      </Formik>
      {/* <CV cvData={cvData}/> */}
    </div>
  );
}

export default App;
