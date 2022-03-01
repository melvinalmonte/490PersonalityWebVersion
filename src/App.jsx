import React from "react";
// import { Wizard } from "./components/wizard/Wizard";
import { Text } from "@chakra-ui/react";

function App() {
  const [orientation, setOrientation] = React.useState("");

  React.useEffect(() => {
    window.addEventListener("resize", detectOrientation);
  }, [orientation]);

  const detectOrientation = () => {
    setOrientation(window.screen.orientation);
  };

  return (
    <>
      <Text>{JSON.stringify({ orientation: orientation }, null, 2)}</Text>
      {/*<Wizard />*/}
    </>
  );
}

export default App;
