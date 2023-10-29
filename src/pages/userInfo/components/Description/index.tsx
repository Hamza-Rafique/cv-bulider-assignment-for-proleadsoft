import React from "react";
import { InputField, Next, Prev, TextArea } from "../../../../common";
import { MyFormData } from "../../../../utlits/types";

interface Props {
  onNextStep: () => void;
  handlePrevStep: () => void;
  formik: MyFormData;
}

const Description: React.FC<Props> = ({
  onNextStep,
  handlePrevStep,
  formik,
}) => {
  const handleNextClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();

    formik.handleSubmit();
    if (formik.isValid && formik.dirty) {
      onNextStep();
    }
  };
  return (
    <>
      <div className="flex justify-between px-2 mb-4">
        <TextArea
          label="Enter your Description"
          placeholder="description"
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.description && formik.errors.description}
        />

        <InputField
          label="Enter LinkedIn Profile Link"
          type="text"
          placeholder="LinkedIn Profile"
          name="linkedin"
          value={formik.values.linkedin}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.linkedin && formik.errors.linkedin}
        />
      </div>
      <div className="flex justify-between px-2 mb-4">
        <InputField
          label="Enter GitHub Profile Link"
          type="text"
          placeholder="GitHub Profile"
          name="github"
          value={formik.values.github}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.github && formik.errors.github}
        />

        <InputField
          label="Enter Personal Website Link"
          type="text"
          placeholder="Personal Website"
          name="website"
          value={formik.values.website}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.website && formik.errors.website}
        />
      </div>
      <div className="flex justify-between px-2 mb-4">
        <Prev handlePrevStep={handlePrevStep} />
        <Next onNextStep={handleNextClick} />
      </div>
    </>
  );
};

export default Description;
