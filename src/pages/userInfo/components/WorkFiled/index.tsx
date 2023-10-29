import React from "react";
import { InputField, TextArea } from "../../../../common";

const WorkFileds = ({ formik, index, removeEntry }: any) => {
  return (
    <div key={index}>
      <div className="flex px-2 mb-4">
        <InputField
          label="Company Name"
          type="text"
          placeholder="Company"
          name={`workHistory[${index}].company`}
          value={formik.values.workHistory[index].company}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <button
          type="button"
          onClick={() => removeEntry(index)}
          className=" bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Remove
        </button>
      </div>
      <div className="flex justify-between px-2 mb-4">
        <InputField
          label="Position"
          type="text"
          placeholder="Position"
          name={`workHistory[${index}].position`}
          value={formik.values.workHistory[index].position}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <TextArea
          label="Define your role and resposbiltes"
          placeholder="role"
          name={`workHistory[${index}].role`}
          value={formik.values.workHistory[index].role}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      <div className="flex justify-between px-2 mb-4">
        <InputField
          label="Start Date"
          type="date"
          placeholder="Start Date"
          name={`workHistory[${index}].startDate`}
          value={formik.values.workHistory[index].startDate}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <InputField
          label="End Date"
          type="date"
          placeholder="End Date"
          name={`workHistory[${index}].endDate`}
          value={formik.values.workHistory[index].endDate}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
    </div>
  );
};

export default WorkFileds;
