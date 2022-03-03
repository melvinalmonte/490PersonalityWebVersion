import { Box, Container, useColorModeValue } from "@chakra-ui/react";

export const CustomContainer = ({ children }) => {
  const bg = useColorModeValue("white", "#222831");
  return (
    <Container
      background={bg}
      padding={3}
      height={"100%"}
      shadow={"lg"}
      borderRadius={{ base: "none", md: "md" }}
    >
      {children}
    </Container>
  );
};

export const CenteredBox = ({ children }) => (
  <Box
    width={"100%"}
    maxWidth={"500px"}
    margin={"0 auto"}
    display={"flex"}
    flexDirection={"column"}
    height={"90%"}
  >
    <Container
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexGrow={1}
      overflow={"auto"}
    >
      {children}
    </Container>
  </Box>
);
