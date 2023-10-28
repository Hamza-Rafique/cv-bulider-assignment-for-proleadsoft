import React from "react";
import { Next, Prev } from "../../common";
import WorkFileds from "../WorkFiled";
interface Props {
  onNextStep: () => void;
  handlePrevStep: () => void;
  formik: any;
}

const WorkHistory: React.FC<Props> = ({
  onNextStep,
  handlePrevStep,
  formik,
}) => {
  const handleAddwork = () => {
    formik.setFieldValue("workHistory", [
      ...formik.values.workHistory,
      {
        company: "",
        position: "",
        role: "",
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
  const handleRemovework = (index: number) => {
    const updatedworkHistory = [...formik.values.workHistory];
    updatedworkHistory.splice(index, 1);
    formik.setFieldValue("workHistory", updatedworkHistory);
  };

  return (
    <>
      {formik.values.workHistory.map((work: any, index: any) => (
        <WorkFileds
          key={index}
          index={index}
          formik={formik}
          removeEntry={handleRemovework}
        />
      ))}
      <button
        type="button"
        onClick={handleAddwork}
        className="bg-blue-500 mb-8 text-white px-4 py-2 rounded-md"
      >
        Add More work
      </button>

      <div className="flex justify-between px-2 mb-4">
        <Prev handlePrevStep={handlePrevStep} />
        <Next onNextStep={handleNextClick} />
      </div>
    </>
  );
};

export default WorkHistory;
