import React from "react";
import { Box, chakra, Container, useColorModeValue } from "@chakra-ui/react";

const Layout = ({ header, children, footer }) => {
  const bg = useColorModeValue("white", "#222831");
  return (
    <Container
      background={bg}
      height={"100%"}
      display={"flex"}
      flexDirection={"column"}
      shadow={"lg"}
      borderRadius={{ base: "none", md: "md" }}
    >
      <chakra.header width={"100%"} px={{ base: 2, sm: 4 }} py={4}>
        {header}
      </chakra.header>

      <Box as={"div"} flex={"1 0 auto"}>
        <Container paddingTop={5} paddingBottom={5} height={"100%"}>
          {children}
        </Container>
      </Box>

      <chakra.footer
        flexShrink={0}
        paddingLeft={5}
        paddingRight={5}
        px={{ base: 2, sm: 4 }}
        py={4}
        zIndex={"sticky"}
      >
        {footer}
      </chakra.footer>
    </Container>
  );
};

export default Layout;
