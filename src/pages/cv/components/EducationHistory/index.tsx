import React from "react";

interface Props {
  data: { educationHistory: Array<Record<string, string>> };
}

const EducationHistory: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded shadow mb-4 overlay2">
      {data?.educationHistory.map((edu, index) => (
        <div key={index} className="mb-4">
          <p>
            <b>Institution:</b> {edu?.institution}
          </p>
          <p>
            <b>Degree:</b> {edu?.degree}
          </p>
          <p>
            <b>Field of Study:</b> {edu?.fieldOfStudy}
          </p>
          <p>
            <b>Start Date:</b> {edu?.startDate}
          </p>
          <p>
            <b>End Date:</b> {edu?.endDate}
          </p>
        </div>
      ))}
    </div>
  );
};

export default EducationHistory;
