import React from "react";
import { Wizard } from "./components/wizard/Wizard";
import {
  // Box,
  // Container,
  // Fade,
  // Heading,
  Text } from "@chakra-ui/react";

function App() {
  const [orientation, setOrientation] = React.useState(
    !navigator.maxTouchPoints
      ? "desktop"
      : !window.screen.orientation.angle
      ? "portrait"
      : "landscape"
  );

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
      <Text>{orientation}</Text>
      {/*{orientation === "landscape" ? (*/}
      {/*  <Box*/}
      {/*    width={"100%"}*/}
      {/*    maxWidth={"500px"}*/}
      {/*    margin={"0 auto"}*/}
      {/*    display={"flex"}*/}
      {/*    flexDirection={"column"}*/}
      {/*    height={"100%"}*/}
      {/*  >*/}
      {/*    <Container*/}
      {/*      display={"flex"}*/}
      {/*      justifyContent={"center"}*/}
      {/*      alignItems={"center"}*/}
      {/*      flexGrow={1}*/}
      {/*      overflow={"auto"}*/}
      {/*    >*/}
      {/*      <Fade in>*/}
      {/*        <Heading fontSize={"xl"} color={"#00ADB5"}>*/}
      {/*          Landscape mode is not supported.*/}
      {/*        </Heading>*/}
      {/*      </Fade>*/}
      {/*    </Container>*/}
      {/*  </Box>*/}
      {/*) : (*/}
      <Wizard />
      {/*)}*/}
    </>
  );
}

export default App;
