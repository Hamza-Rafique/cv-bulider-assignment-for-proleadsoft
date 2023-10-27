import React from "react";
import Next from "../../common/Next";
import Prev from "../../common/Prev";
interface Props {
  onNextStep: () => void;
  handlePrevStep: () => void;
}
const Intro: React.FC<Props> = ({ onNextStep,handlePrevStep }) => {
  return (
    <div>
      Intro
      <Next onNextStep={onNextStep} />
      <Prev handlePrevStep={handlePrevStep} />
    </div>
  );
};

export default Intro;
