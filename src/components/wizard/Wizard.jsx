import React from "react";
import StepWizard from "react-step-wizard";
import {
  FirstQuestion,
  IntroView,
  Results,
  SecondQuestion,
  ThirdQuestion,
} from "../steps/Steps";
import "./styles.css";

export const Wizard = () => {
  const [state, updateState] = React.useState({});

  const setInstance = (SW) =>
    updateState({
      ...state,
      SW,
    });
  const { SW } = state;

  return (
    <StepWizard
      isLazyMount
      instance={setInstance}
      className="wizard-component"
    >
      <IntroView SW={SW} />
      <FirstQuestion SW={SW} />
      <SecondQuestion SW={SW} />
      <ThirdQuestion SW={SW} />
      <Results SW={SW} />
    </StepWizard>
  );
};
