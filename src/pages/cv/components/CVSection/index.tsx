import React, { ReactNode } from 'react';

interface Props {
  title: string;
  children:ReactNode
}

const CVSection: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {children}
    </div>
  );
};

export default CVSection;
