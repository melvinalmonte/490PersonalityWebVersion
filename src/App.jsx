import React from "react";
// import { Wizard } from "./components/wizard/Wizard";
import { Text } from "@chakra-ui/react";

function App() {
  const [orientation, setOrientation] = React.useState("");

  React.useEffect(() => {
    window.addEventListener("resize", detectOrientation);
  }, [orientation]);

  const detectOrientation = () => {
    var orientation =
      (screen.orientation || {}).type ||
      screen.mozOrientation ||
      screen.msOrientation;

    if (orientation === "landscape-primary") {
      setOrientation("landscape");
    } else if (orientation === "landscape-secondary") {
      setOrientation("landscape");
    } else if (
      orientation === "portrait-secondary" ||
      orientation === "portrait-primary"
    ) {
      setOrientation("portrait");
    } else if (orientation === undefined) {
      setOrientation("unsupported");
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
