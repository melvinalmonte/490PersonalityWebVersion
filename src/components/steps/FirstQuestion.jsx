import React from "react";
import { useDispatch } from "react-redux";
import data from "../../data/questions.json";
import {
  Center,
  Heading,
  Progress,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { addToAnswer } from "../../feature/answerSlice";
import { CenteredBox } from "./Utils";
import { Layout } from "../layout";

const FirstQuestion = ({ SW }) => {
  const dispatch = useDispatch();
  const { question, answers } = data[0];
  return (
    <Layout
      header={
        <Center>
          <Heading>Question 1</Heading>
        </Center>
      }
      footer={
        <Progress
          hasStripe
          isAnimated
          colorScheme={"green"}
          size={"xs"}
          max={4}
          value={1}
        />
      }
    >
      <CenteredBox>
        <VStack spacing={10}>
          <Center>
            <Heading
              color={useColorModeValue("rebeccapurple", "#00ADB5")}
              fontSize={"xl"}
            >
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
    </Layout>
  );
};

export default FirstQuestion;
