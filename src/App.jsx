import React from "react";
// import { Wizard } from "./components/wizard/Wizard";
import {
  // Box,
  // Container,
  Text } from "@chakra-ui/react";

function App() {
  const [orientation, setOrientation] = React.useState("");

  React.useEffect(() => {
    window.addEventListener("resize", detectOrientation);
  }, [orientation]);

  const detectOrientation = () => {
    const isMobile = localStorage.mobile || window.navigator.maxTouchPoints > 1;
    const isSafari =
      navigator.vendor.match(/apple/i) &&
      !navigator.userAgent.match(/crios/i) &&
      !navigator.userAgent.match(/fxios/i) &&
      !navigator.userAgent.match(/Opera|OPT\//);

    if (isMobile) {
      if (isSafari) {
        setOrientation(isSafari);
        // if (window.outerWidth > window.outerHeight) {
        //   return setOrientation("portrait");
        // }
        // return setOrientation("landscape");
      } else {
        setOrientation(isSafari);
        // if (window.outerWidth > window.outerHeight) {
        //   return setOrientation("landscape");
        // }
        // return setOrientation("portrait");
      }
    }
  };

  return (
    <>
      <Text>{JSON.stringify({ isSafari: orientation }, null, 2)}</Text>
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
      {/*      <Text color={"#00ADB5"}>*/}
      {/*        Landscape mode is currently not supported.*/}
      {/*      </Text>*/}
      {/*    </Container>*/}
      {/*  </Box>*/}
      {/*) : (*/}
      {/*  <Wizard />*/}
      {/*)}*/}
    </>
  );
}

export default App;
