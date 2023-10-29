import React from "react";
import { InputField } from "../../../../common";

const EducationEntry = ({ formik, index, removeEntry }: any) => {
  return (
    <div key={index}>
      <div className="flex px-2 mb-4">
        <InputField
          label="Institution"
          type="text"
          placeholder="Institution"
          name={`educationHistory[${index}].institution`}
          value={formik.values.educationHistory[index].institution}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
     
      </div>
      <div className="flex justify-between px-2 mb-4">
        <InputField
          label="Degree"
          type="text"
          placeholder="Degree"
          name={`educationHistory[${index}].degree`}
          value={formik.values.educationHistory[index].degree}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <InputField
          label="Field of Study"
          type="text"
          placeholder="Field of Study"
          name={`educationHistory[${index}].fieldOfStudy`}
          value={formik.values.educationHistory[index].fieldOfStudy}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      <div className="flex justify-between px-2 mb-4">
        <InputField
          label="Start Date"
          type="date"
          placeholder="Start Date"
          name={`educationHistory[${index}].startDate`}
          value={formik.values.educationHistory[index].startDate}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <InputField
          label="End Date"
          type="date"
          placeholder="End Date"
          name={`educationHistory[${index}].endDate`}
          value={formik.values.educationHistory[index].endDate}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      <button
          type="button"
          onClick={() => removeEntry(index)}
          className=" bg-red-500 text-white px-4 py-2 rounded-md mb-4"
        >
          Remove
        </button>
    </div>
  );
};

export default EducationEntry;
