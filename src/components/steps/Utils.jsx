import { Stack } from "@chakra-ui/react";

export const CenteredBox = ({ children }) => (
  <Stack
    height={"100%"}
    display={"flex"}
    alignItems={"center"}
    justifyContent={"center"}
    direction={"column"}
  >
    {children}
  </Stack>
);
