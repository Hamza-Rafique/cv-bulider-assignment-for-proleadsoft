import React from "react";
interface Props {
  onNextStep: () => void;
}

const Next: React.FC<Props> = ({ onNextStep }) => {
  return (
    <button
      onClick={onNextStep}
      className="bg-blue-500 text-white px-4 py-2 rounded-md"
    >
      Next
    </button>
  );
};

export default Next;
