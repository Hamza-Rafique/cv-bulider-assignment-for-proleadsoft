import React from "react";
import Next from "../../../../common/Next";
import Prev from "../../../../common/Prev";
interface Props {
  onNextStep: () => void;
  handlePrevStep: () => void;
}
const Tools: React.FC<Props> = ({ onNextStep, handlePrevStep }) => {
  return (
    <div>
      Tools
      <div className="flex justify-between px-2 mb-4">
        <Prev handlePrevStep={handlePrevStep} />
        <Next onNextStep={onNextStep} />
      </div>
    </div>
  );
};

export default Tools;
