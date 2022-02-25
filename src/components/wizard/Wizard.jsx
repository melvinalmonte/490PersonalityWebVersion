import { Box } from "@chakra-ui/react";
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
    <Box p={5} className="wizard-box">
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
    </Box>
  );
};
