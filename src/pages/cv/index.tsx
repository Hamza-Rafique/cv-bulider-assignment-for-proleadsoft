import React from "react";
import {
  CVSection,
  DescriptionLinks,
  EducationHistory,
  PersonalInfo,
  WorkHistory,
} from "./components";
interface Props {
  cvData?: any;
}

const CV: React.FC<Props> = ({ cvData }) => {
  return (
    <>
      {cvData && (
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">
            {cvData?.firstName} {cvData?.lastName}'s CV
          </h1>

          <CVSection title="Personal Information">
            <PersonalInfo data={cvData} />
          </CVSection>

          <CVSection title="Education History">
            <EducationHistory data={cvData} />
          </CVSection>

          <CVSection title="Work History">
            <WorkHistory data={cvData} />
          </CVSection>

          <CVSection title="Description and Links">
            <DescriptionLinks data={cvData} />
          </CVSection>
        </div>
      )}
    </>
  );
};

export default CV;
