import React from "react";
import Next from "../../common/Next";
import Prev from "../../common/Prev";
interface Props {
  onNextStep: () => void;
  handlePrevStep: () => void;
}
const Education: React.FC<Props> = ({ onNextStep,handlePrevStep }) => {
  return (
    <div>
      Education
      <Next onNextStep={onNextStep} />
      <Prev handlePrevStep={handlePrevStep} />
    </div>
  );
};

export default Education;
