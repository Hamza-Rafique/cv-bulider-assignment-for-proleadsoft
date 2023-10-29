import React from 'react';

interface Props {
  data: { educationHistory: Array<Record<string, string>> };
}

const EducationHistory: React.FC<Props> = ({ data }) => {
  return (
    <div>
      {data?.educationHistory.map((edu, index) => (
        <div key={index} className="mb-4">
          <p>Institution: {edu?.institution}</p>
          <p>Degree: {edu?.degree}</p>
          <p>Field of Study: {edu?.fieldOfStudy}</p>
          <p>Start Date: {edu?.startDate}</p>
          <p>End Date: {edu?.endDate}</p>
        </div>
      ))}
    </div>
  );
};

export default EducationHistory;
