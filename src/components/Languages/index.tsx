import React from "react";
import Next from "../../common/Next";
import Prev from "../../common/Prev";
interface Props {
  onNextStep: () => void;
  handlePrevStep: () => void;
}
const Languages: React.FC<Props> = ({ onNextStep,handlePrevStep }) => {
  return (
    <div>
      Language
      <Next onNextStep={onNextStep} />
      <Prev handlePrevStep={handlePrevStep} />
    </div>
  );
};

export default Languages;
