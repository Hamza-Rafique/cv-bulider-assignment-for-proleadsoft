import React from "react";

interface Props {
  data: { workHistory: Array<Record<string, string>> };
}

const WorkHistory: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      {data?.workHistory?.map((work, index) => (
        <div key={index} className="mb-4">
          <p>
            <b> Company:</b> {work?.company}
          </p>
          <p>
            {" "}
            <b>Position:</b> {work?.position}
          </p>
          <p>
            {" "}
            <b>Role:</b> {work?.role}
          </p>
          <p>
            <b> Start Date:</b> {work?.startDate}
          </p>
          <p>
            <b> End Date: </b>
            {work?.endDate}
          </p>
        </div>
      ))}
    </div>
  );
};

export default WorkHistory;
