import React from "react";
import StepWizard from "react-step-wizard";
import {
  FirstQuestion,
  IntroView,
  Results,
  SecondQuestion,
  ThirdQuestion,
} from "../steps";
import "./styles.css";

const Wizard = () => {
  const [state, updateState] = React.useState({});

  const setInstance = (SW) =>
    updateState({
      ...state,
      SW,
    });
  const { SW } = state;

  let custom = {
    enterRight: "animate__animated animate__fadeIn",
    enterLeft: "animate__animated animate__fadeIn",
    exitRight: "animate__animated animate__fadeOut",
    exitLeft: "animate__animated animate__fadeOut",
    intro: "animate__animated animate__fadeIn",
  };

  return (
    <StepWizard
      isLazyMount
      instance={setInstance}
      className="wizard-component"
      transitions={custom}
    >
      <IntroView SW={SW} />
      <FirstQuestion SW={SW} />
      <SecondQuestion SW={SW} />
      <ThirdQuestion SW={SW} />
      <Results SW={SW} />
    </StepWizard>
  );
};

export default Wizard;
