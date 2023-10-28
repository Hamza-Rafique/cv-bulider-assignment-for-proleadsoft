import React from 'react';

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
    <div className="flex items-center">
      <div className="mr-4">
        <img
          src={URL.createObjectURL(data.profilePic)}
          alt="Profile"
          className="w-32 h-32 rounded-full"
        />
      </div>
      <div>
        <p>
          {data.firstName} {data.lastName}
        </p>
        <p>Age: {data.age}</p>
        <p>Position: {data.position}</p>
        <p>Phone Number: {data.phoneNumber}</p>
      </div>
    </div>
  );
};

export default PersonalInfo;
