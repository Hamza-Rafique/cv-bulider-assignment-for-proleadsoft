import { useMemo, useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { setFormData } from "../../slices/formSlice";
import {
  Description,
  Education,
  Intro,
  Stepper,
  WorkHistory,
} from "./components";
import {
  descriptionSchema,
  educationSchema,
  introSchema,
} from "../../utlits/schema";
import Congrats from "./components/Congtrs";

const UserInfo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const dispatch = useDispatch();
  const onSubmit = (values: any) => {
    dispatch(setFormData(values));
  };
  const steps = ["Introduction", "Description", "Education", "Work History"];

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
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <h1 className="text-3xl font-bold mb-8 mt-4 mx-auto text-center">
              Enter Information to Build your CV with Proleadsoft
            </h1>

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
              {currentStep === 4 && <Congrats />}
              {/* ToDo I will implements if needed */}

              {/* {currentStep === 4 && (
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
              )} */}
              {/* {currentStep === 6 && (
                <Tools
                  onNextStep={handleNextStep}
                  handlePrevStep={handlePrevStep}
                />
              )} */}
              {/* {currentStep === 7 && (
                <Interests
                  onNextStep={handleNextStep}
                  handlePrevStep={handlePrevStep}
                />
              )} */}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserInfo;
