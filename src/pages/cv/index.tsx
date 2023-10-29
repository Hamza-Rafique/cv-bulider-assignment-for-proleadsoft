import React from "react";
import { useSelector } from "react-redux";
import {
  CVSection,
  DescriptionLinks,
  EducationHistory,
  PersonalInfo,
  WorkHistory,
} from "./components";
import { selectFormData } from "../../slices/formSlice";
import generatePDF from "./components/GeneratePdf";

const CV = () => {
  const cvData = useSelector(selectFormData);
  const handleClick = () => {
    generatePDF("elementToConvert", "myPDF");
  };

  return (
    <>
      <section id="elementToConvert">
        {cvData && (
          <div className="container mx-auto p-4">
            <div className="flex justify-between">
              <h1 className="text-3xl font-bold mb-4">
                {cvData?.firstName} {cvData?.lastName} CV
              </h1>
              <div className="mr-4">
                {cvData?.profilePic && (
                  <img
                    src={URL.createObjectURL(cvData?.profilePic)}
                    alt="Profile"
                    className="w-32 h-32 rounded-full"
                  />
                )}
              </div>
            </div>
            <CVSection title="Personal Information">
              <PersonalInfo data={cvData} />
            </CVSection>
            <hr className="mb-8" />

            <CVSection title="Description and Links">
              <DescriptionLinks data={cvData} />
            </CVSection>
            <div className="flex justify-between">
              <CVSection title="Education History">
                <EducationHistory data={cvData} />
              </CVSection>

              <CVSection title="Work History">
                <WorkHistory data={cvData} />
              </CVSection>
            </div>
          </div>
        )}
      </section>
      {cvData && (
        <button
          className="bg-blue-600 text-white px-4 py-2 mt-8 rounded-md flex items-center"
          onClick={handleClick}
        >
          Download CV
        </button>
      )}
      {!cvData && <p>please enter your information first</p>}
    </>
  );
};

export default CV;
