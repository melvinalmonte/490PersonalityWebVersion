import React from "react";
import data from "../../data/questions.json";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  Button,
  Center,
  Flex,
  Heading,
  Progress,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { addToAnswer } from "../../feature/answerSlice";
import { CenteredBox } from "./Utils";
import { Layout } from "../layout";

const answer = (val) => {
  if (val > 75) {
    return "dog";
  } else if (val >= 50 && val <= 75) {
    return "turtle";
  } else if (val >= 25 && val <= 49) {
    return "rabbit";
  } else {
    return "cat";
  }
};

const ThirdQuestion = ({ SW }) => {
  const { question } = data[2];
  const dispatch = useDispatch();
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <Layout
      header={
        <Center>
          <Heading>Question 3</Heading>
        </Center>
      }
      footer={
        <Progress
          hasStripe
          isAnimated
          colorScheme={"green"}
          size={"xs"}
          max={4}
          value={3}
        />
      }
    >
      <CenteredBox>
        <Flex direction={"column"} width={"100%"}>
          <VStack spacing={10} width={"100%"}>
            <Center>
              <Heading
                color={useColorModeValue("rebeccapurple", "#00ADB5")}
                fontSize={"xl"}
              >
                {question}
              </Heading>
            </Center>
            <Slider
              size={"lg"}
              aria-label="slider-ex-6"
              onChange={(val) => setSliderValue(val)}
            >
              <SliderMark value={0} mt="1" ml="-2.5" fontSize="sm">
                <Text>I dislike them</Text>
              </SliderMark>
              <SliderMark value={85} mt="1" ml="-2.5" fontSize="sm">
                <Text whiteSpace={{ base: "nowrap" }}>I love them</Text>
              </SliderMark>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </VStack>
          <Center>
            <Button
              size={"sm"}
              borderRadius={"full"}
              mt={"5rem"}
              type={"submit"}
              onClick={() => {
                dispatch(addToAnswer(answer(sliderValue)));
                SW.nextStep();
              }}
            >
              Submit Answer
            </Button>
          </Center>
        </Flex>
      </CenteredBox>
    </Layout>
  );
};

export default ThirdQuestion;
