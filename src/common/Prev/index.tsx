import React from "react";
interface Props {
  handlePrevStep: () => void;
}

const Prev: React.FC<Props> = ({ handlePrevStep }) => {
  return (
    <button
      onClick={handlePrevStep}
      className="bg-gray-500 text-white px-4 py-2 rounded-md"
    >
      GoBack
    </button>
  );
};

export default Prev;
