import {
  Box,
  Button,
  Container,
  Flex,
  IconButton,
  Spacer,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { CgDarkMode } from "react-icons/cg";
import { CenteredBox, CustomContainer } from "./Utils";

const IntroView = ({ SW }) => {
  const { toggleColorMode } = useColorMode();
  return (
    <>
      {SW && (
        <CustomContainer>
          <Container>
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
          </Container>
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
          <Container>
            <Flex direction={"row"}>
              <Box>
                <Text fontSize={"2xl"}>🐇</Text>
              </Box>
              <Spacer />
              <Box>
                <Text fontSize={"2xl"}>🐢</Text>
              </Box>
            </Flex>
          </Container>
        </CustomContainer>
      )}
    </>
  );
};

export default IntroView;
