import { Box } from "@chakra-ui/react";
import { Wizard } from "./components/wizard/Wizard";

function App() {
  return (
    <Box height={"100vh"} display={"flex"} flexDirection={"column"}>
      <Wizard />
    </Box>
  );
}

export default App;
