import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import {
  Box,
  Button,
  Center,
  Heading,
  Progress,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import personalities from "../../data/personalities.json";
import { clearAnswers } from "../../feature/answerSlice";
import { CenteredBox, CustomContainer } from "./Utils";

const Results = ({ SW }) => {
  const dispatch = useDispatch();
  const choices = useSelector((state) => state["user_answers"].answers);
  const result = _.head(_(choices.flat()).countBy().entries().maxBy(_.last));
  const types = {
    dog: "🐶",
    cat: "🐱",
    rabbit: "🐇",
    turtle: "🐢",
    alien: "👽",
  };
  return (
    <CustomContainer>
      <Center>
        <Heading>Results</Heading>
      </Center>
      <CenteredBox>
        <Stack direction={"column"} width={"80%"}>
          <VStack textAlign={"center"}>
            <Heading fontSize={"xl"}>
              You are a{" "}
              <Text fontSize={"3xl"} as={"span"}>
                {types[result]}
              </Text>
              !!
            </Heading>
            <Text fontSize={"lg"}>{personalities[types[result]]}</Text>
          </VStack>
          <Center paddingTop={"5rem"}>
            <Button
              size={"sm"}
              borderRadius={"full"}
              onClick={() => {
                SW.firstStep();
                dispatch(clearAnswers());
              }}
            >
              Done
            </Button>
          </Center>
        </Stack>
      </CenteredBox>
      <Box width={"100%"}>
        <Progress
          hasStripe
          isAnimated
          colorScheme={"green"}
          size={"xs"}
          value={100}
        />
      </Box>
    </CustomContainer>
  );
};

export default Results;
