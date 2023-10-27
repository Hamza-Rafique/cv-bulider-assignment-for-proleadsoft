import React from "react";
interface Props {
  onNextStep: () => void;
}

const Next: React.FC<Props> = ({ onNextStep }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onNextStep();
  };
  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 text-white px-4 py-2 rounded-md"
      type="submit"
    >
      Next
    </button>
  );
};

export default Next;
