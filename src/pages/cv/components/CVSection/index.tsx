import React, { ReactNode } from "react";
import Draggable from "react-draggable";

interface Props {
  title: string;
  children: ReactNode;
}

const CVSection: React.FC<Props> = ({ title, children }) => {
  return (
    <Draggable>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        {children}
      </div>
    </Draggable>
  );
};

export default CVSection;
