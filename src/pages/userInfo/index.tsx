import { useMemo, useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import {
  Achievements,
  Description,
  Education,
  Intro,
  Skills,
  Stepper,
  Tools,
  WorkHistory,
} from "../../components";
import Interests from "../../components/Interests";
import {
  descriptionSchema,
  educationSchema,
  introSchema,
} from "../../utlits/schema";

const UserInfo = () => {
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
  }, [currentStep, descriptionSchema, educationSchema, introSchema]);

  return (
    <div>
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
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserInfo;
