import React from "react";
// import { Wizard } from "./components/wizard/Wizard";
import { Text } from "@chakra-ui/react";

function App() {
  const [orientation, setOrientation] = React.useState("");

  React.useEffect(() => {
    window.addEventListener("resize", detectOrientation);
  }, [orientation]);

  const detectOrientation = () => {
    if (
      Window.orientation &&
      (Window.orientation === 90 || Window.orientation === -90)
    ) {
      setOrientation("landscape");
    } else {
      setOrientation(
        !navigator.maxTouchPoints
          ? "desktop"
          : !window.screen.orientation.angle
          ? "portrait"
          : "landscape"
      );
    }
  };

  return (
    <>
      <Text>{JSON.stringify({ orientation: orientation }, null, 2)}</Text>
      {/*<Wizard />*/}
    </>
  );
}

export default App;
