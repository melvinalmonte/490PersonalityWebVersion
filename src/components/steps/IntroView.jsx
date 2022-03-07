import {
  Box,
  Button,
  Flex,
  IconButton,
  Spacer,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { CgDarkMode } from "react-icons/cg";
import { CenteredBox } from "./Utils";
import { Layout } from "../layout";

const IntroView = ({ SW }) => {
  const { toggleColorMode } = useColorMode();
  return (
    <>
      {SW && (
        <Layout
          header={
            <Flex direction={"row"}>
              <Box>
                <Text fontSize={"2xl"}>🐶</Text>
              </Box>
              <Spacer />
              <Box>
                <IconButton
                  aria-label={"color-mode"}
                  icon={<CgDarkMode />}
                  onClick={toggleColorMode}
                  background={"transparent"}
                  _hover={{ bg: "transparent" }}
                />
              </Box>
              <Spacer />
              <Box fontSize={"2xl"}>🐱</Box>
            </Flex>
          }
          footer={
            <Flex direction={"row"}>
              <Box>
                <Text fontSize={"2xl"}>🐇</Text>
              </Box>
              <Spacer />
              <Box>
                <Text fontSize={"2xl"}>🐢</Text>
              </Box>
            </Flex>
          }
        >
          <CenteredBox>
            <VStack>
              <Text color={"#00ADB5"} fontSize={"xl"}>
                Which Animal Are You?
              </Text>
              <Button size={"sm"} borderRadius={"full"} onClick={SW.nextStep}>
                Begin Personality Quiz
              </Button>
            </VStack>
          </CenteredBox>
        </Layout>
      )}
    </>
  );
};

export default IntroView;
