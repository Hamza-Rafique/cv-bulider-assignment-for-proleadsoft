import React from "react";
import Next from "../../../../common/Next";
import Prev from "../../../../common/Prev";
import EducationEntry from "../EducationFiled";
import { MyFormData } from "../../../../utlits/types";
interface Props {
  onNextStep: () => void;
  handlePrevStep: () => void;
  formik: MyFormData;
}

const Education: React.FC<Props> = ({ onNextStep, handlePrevStep, formik }) => {
  const handleAddEducation = () => {
    formik.setFieldValue("educationHistory", [
      ...formik.values.educationHistory,
      {
        institution: "",
        degree: "",
        fieldOfStudy: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };
  const handleNextClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();

    formik.handleSubmit();
    if (formik.isValid && formik.dirty) {
      onNextStep();
    }
  };
  const handleRemoveEducation = (index: number) => {
    const updatedEducationHistory = [...formik.values.educationHistory];
    updatedEducationHistory.splice(index, 1);
    formik.setFieldValue("educationHistory", updatedEducationHistory);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      {formik.values.educationHistory.map((education: any, index: any) => (
        <EducationEntry
          key={index}
          index={index}
          formik={formik}
          removeEntry={handleRemoveEducation}
        />
      ))}
      <button
        type="button"
        onClick={handleAddEducation}
        className="bg-blue-500 mb-8 text-white px-4 py-2 rounded-md"
      >
        Add More Education
      </button>

      <div className="flex justify-between px-2 mb-4">
        <Prev handlePrevStep={handlePrevStep} />
        <Next onNextStep={handleNextClick} />
      </div>
    </form>
  );
};

export default Education;
