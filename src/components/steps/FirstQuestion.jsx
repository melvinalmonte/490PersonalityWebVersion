import { useDispatch } from "react-redux";
import data from "../../data/questions.json";
import { Box, Center, Heading, Progress, Text, VStack } from "@chakra-ui/react";
import { addToAnswer } from "../../feature/answerSlice";
import { CenteredBox, CustomContainer } from "./Utils";

const FirstQuestion = ({ SW }) => {
  const dispatch = useDispatch();
  const { question, answers } = data[0];
  return (
    <CustomContainer>
      <Center>
        <Heading>Question 1</Heading>
      </Center>
      <CenteredBox>
        <VStack spacing={10}>
          <Center>
            <Heading color={"#00ADB5"} fontSize={"xl"}>
              {question}
            </Heading>
          </Center>
          {answers.map((item) => (
            <Text
              key={item.answer}
              fontSize={"xl"}
              as={"button"}
              onClick={() => {
                dispatch(addToAnswer(item["animal-type"]));
                SW.nextStep();
              }}
            >
              {item.answer}
            </Text>
          ))}
        </VStack>
      </CenteredBox>
      <Box width={"100%"}>
        <Progress
          hasStripe
          isAnimated
          colorScheme={"green"}
          size={"xs"}
          value={25}
        />
      </Box>
    </CustomContainer>
  );
};

export default FirstQuestion;
