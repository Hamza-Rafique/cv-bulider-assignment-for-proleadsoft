import React from 'react';

interface Props {
  data: {
    description: string;
    linkedin: string;
    github: string;
    website: string;
  };
}

const DescriptionLinks: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <p>Description: {data?.description}</p>
      <p>LinkedIn: {data?.linkedin}</p>
      <p>Github: {data?.github}</p>
      <p>Website: {data?.website}</p>
    </div>
  );
};

export default DescriptionLinks;
