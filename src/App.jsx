import React from "react";
import { Wizard } from "./components/wizard/Wizard";
import { Box, Container, Text } from "@chakra-ui/react";

function App() {
  const [orientation, setOrientation] = React.useState("");

  React.useEffect(() => {
    window.addEventListener("orientationchange", detectOrientation);
  }, [orientation]);

  const detectOrientation = () => {
    if (screen.availHeight < screen.availWidth) {
      setOrientation("landscape");
    } else {
      setOrientation("portrait");
    }
  };

  return (
    <>
      {orientation === "landscape" ? (
        <Box
          width={"100%"}
          maxWidth={"500px"}
          margin={"0 auto"}
          display={"flex"}
          flexDirection={"column"}
          height={"100%"}
        >
          <Container
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexGrow={1}
            overflow={"auto"}
          >
            <Text color={"#00ADB5"}>
              Landscape mode is currently not supported.
            </Text>
          </Container>
        </Box>
      ) : (
        <Wizard />
      )}
    </>
  );
}

export default App;
