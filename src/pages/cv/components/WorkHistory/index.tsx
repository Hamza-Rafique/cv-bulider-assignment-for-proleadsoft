import React from 'react';

interface Props {
  data: { workHistory: Array<Record<string, string>> };
}

const WorkHistory: React.FC<Props> = ({ data }) => {
  return (
    <div>
      {data?.workHistory?.map((work, index) => (
        <div key={index} className="mb-4">
          <p>Company: {work?.company}</p>
          <p>Position: {work?.position}</p>
          <p>Role: {work?.role}</p>
          <p>Start Date: {work?.startDate}</p>
          <p>End Date: {work?.endDate}</p>
        </div>
      ))}
    </div>
  );
};

export default WorkHistory;
