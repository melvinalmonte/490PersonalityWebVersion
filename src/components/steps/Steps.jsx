import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Spacer,
  Stack,
  Switch,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import data from "../../data/questions.json";
import personalities from "../../data/personalities.json";
import { useDispatch, useSelector } from "react-redux";
import { addToAnswer, clearAnswers } from "../../feature/answerSlice";
import { useField } from "formik";
import { CgDarkMode } from "react-icons/cg";

import "./styles.css";

const QuestionContainer = ({ children }) => {
  const bg = useColorModeValue("white", "gray.700");
  return (
    <Container height={"95vh"} shadow={"md"} bg={bg}>
      {children}
    </Container>
  );
};

const CardHeader = ({ title, question }) => (
  <Box width={"100%"} textAlign={"center"}>
    <Text p={10} fontSize={"xl"} fontWeight={"bold"}>
      {title}
    </Text>
    {question && (
      <Box>
        <Text fontSize={"2xl"}>{question}</Text>
      </Box>
    )}
  </Box>
);

const CenteredBox = ({ children }) => (
  <Box
    display={"flex"}
    height={{ base:"60%",  md: "95%", lg: "90%" }}
    textAlign={"center"}
    justifyContent={"center"}
    alignItems={"center"}
  >
    {children}
  </Box>
);

export const IntroView = ({ SW }) => {
  const { toggleColorMode } = useColorMode();

  return (
    <>
      {SW && (
        <QuestionContainer>
          <Flex>
            <Box>
              <Text fontSize={"2xl"}>🐶</Text>
            </Box>
            <Spacer />
            <Box fontSize={"2xl"}>🐱</Box>
          </Flex>
          <CenteredBox>
            <VStack>
              <IconButton
                aria-label={"color-mode"}
                icon={<CgDarkMode />}
                onClick={toggleColorMode}
              />
              <Text fontSize={"xl"}>Which Animal Are You?</Text>
              <Button onClick={SW.nextStep}>Begin Personality Quiz</Button>
            </VStack>
          </CenteredBox>
          <Flex
            position={{ base: "absolute", md: "sticky" }}
            bottom={0}
            left={0}
            width={"100%"}
          >
            <Box>
              <Text fontSize={"2xl"}>🐇</Text>
            </Box>
            <Spacer />
            <Box>
              <Text fontSize={"2xl"}>🐢</Text>
            </Box>
          </Flex>
        </QuestionContainer>
      )}
    </>
  );
};

export const FirstQuestion = ({ SW }) => {
  const dispatch = useDispatch();
  const { question, answers } = data[0];
  return (
    <QuestionContainer>
      <CardHeader title={"Question 1"} question={question} />
      <CenteredBox>
        <VStack spacing={10}>
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
    </QuestionContainer>
  );
};

const FormikSwitch = ({ answer, ...props }) => {
  const [field] = useField({ ...props, type: "checkbox" });
  return (
    <FormControl display="flex" alignItems="center">
      <FormLabel htmlFor="form-answers" mb="0">
        {answer}
      </FormLabel>
      <Spacer />
      <Switch {...field} {...props} id="switch-answers" />
    </FormControl>
  );
};

export const SecondQuestion = ({ SW }) => {
  const dispatch = useDispatch();
  const { question, answers } = data[1];
  return (
    <QuestionContainer>
      <CardHeader title={"Question 2"} question={question} />
      <CenteredBox>
        <Formik
          initialValues={{ choices: [] }}
          onSubmit={(values) => {
            dispatch(addToAnswer(values.choices));
            SW.nextStep();
          }}
        >
          {() => (
            <Form className={"form-container"}>
              <VStack spacing={10}>
                {answers.map((item) => (
                  <FormikSwitch
                    key={item.answer}
                    answer={item.answer}
                    name={"choices"}
                    value={item["animal-type"]}
                  />
                ))}
              </VStack>
              <Button mt={"5rem"} type={"submit"}>
                Submit Answer
              </Button>
            </Form>
          )}
        </Formik>
      </CenteredBox>
    </QuestionContainer>
  );
};

export const ThirdQuestion = ({ SW }) => {
  const { question } = data[2];
  const dispatch = useDispatch();
  const [sliderValue, setSliderValue] = useState(50);

  const answer = (val) => {
    console.log(val);
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

  return (
    <QuestionContainer>
      <CardHeader title={"Question 3"} question={question} />
      <CenteredBox>
        <Flex direction={"column"} w={"80%"}>
          <Box>
            <Slider
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
          </Box>
          <Box>
            <Button
              mt={"5rem"}
              type={"submit"}
              onClick={() => {
                dispatch(addToAnswer(answer(sliderValue)));
                SW.nextStep();
              }}
            >
              Submit Answer
            </Button>
          </Box>
        </Flex>
      </CenteredBox>
    </QuestionContainer>
  );
};

function getDuplicates(data) {
  let dups = data.filter(
    (
      (s) => (v) =>
        s.has(v) || !s.add(v)
    )(new Set())
  );
  if (dups.length) {
    return dups[0];
  } else {
    return "alien";
  }
}

export const Results = ({ SW }) => {
  const dispatch = useDispatch();
  const choices = useSelector((state) => state["user_answers"].answers);
  const types = {
    dog: "🐶",
    cat: "🐱",
    rabbit: "🐇",
    turtle: "🐢",
    alien: "👽",
  };
  return (
    <QuestionContainer>
      <CardHeader title={"Results"} />
      <CenteredBox>
        <Stack direction={"column"} width={"80%"}>
          <VStack>
            <Text fontSize={"2xl"}>
              You are a{" "}
              <Text fontSize={"3xl"} as={"span"}>
                {types[getDuplicates(choices)]}
              </Text>
              !!
            </Text>
            <Text fontSize={"lg"}>
              {personalities[types[getDuplicates(choices)]]}
            </Text>
          </VStack>
          <Box paddingTop={"5rem"}>
            <Button
              onClick={() => {
                SW.firstStep();
                dispatch(clearAnswers());
              }}
            >
              Done
            </Button>
          </Box>
        </Stack>
      </CenteredBox>
    </QuestionContainer>
  );
};
