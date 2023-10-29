import React from "react";

interface Props {
  data: {
    firstName: string;
    lastName: string;
    age: string;
    position: string;
    phoneNumber: string;
    profilePic: File;
  };
}

const PersonalInfo: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex justify-between text-center">
      <div className="flex items-center justify-center text-center">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md animate__animated animate__fadeIn">
          Get In Touch
        </button>
        <p className="ml-8">{data?.phoneNumber}</p>
      </div>
      <div className="flex flex-col">
        <p>
          {data?.firstName} {data?.lastName} Age: {data?.age}
        </p>
        <p>Position: {data?.position}</p>
      </div>
    </div>
  );
};

export default PersonalInfo;
