import { useState } from "react";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Progress,
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
import _ from "lodash";
import "./styles.css";

const CustomContainer = ({ children }) => {
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

const CenteredBox = ({ children }) => (
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

export const IntroView = ({ SW }) => {
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

export const FirstQuestion = ({ SW }) => {
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
    <CustomContainer>
      <Center>
        <Heading>Question 2</Heading>
      </Center>
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
              <VStack spacing={{ base: 5, md: 10 }}>
                <Center>
                  <Heading color={"#00ADB5"} fontSize={"xl"}>
                    {question}
                  </Heading>
                </Center>
                {answers.map((item) => (
                  <FormikSwitch
                    key={item.answer}
                    answer={item.answer}
                    name={"choices"}
                    value={item["animal-type"]}
                  />
                ))}
                <Box>
                  <Button
                    size={"sm"}
                    borderRadius={"full"}
                    mt={{ base: "2rem", md: "5rem" }}
                    type={"submit"}
                  >
                    Submit Answer
                  </Button>
                </Box>
              </VStack>
            </Form>
          )}
        </Formik>
      </CenteredBox>
      <Box width={"100%"}>
        <Progress
          hasStripe
          isAnimated
          colorScheme={"green"}
          size={"xs"}
          value={50}
        />
      </Box>
    </CustomContainer>
  );
};

export const ThirdQuestion = ({ SW }) => {
  const { question } = data[2];
  const dispatch = useDispatch();
  const [sliderValue, setSliderValue] = useState(50);

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

  return (
    <CustomContainer>
      <Center>
        <Heading>Question 3</Heading>
      </Center>
      <CenteredBox>
        <Flex direction={"column"} width={"100%"}>
          <VStack spacing={10} width={"100%"}>
            <Center>
              <Heading color={"#00ADB5"} fontSize={"xl"}>
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
      <Box width={"100%"}>
        <Progress
          hasStripe
          isAnimated
          colorScheme={"green"}
          size={"xs"}
          value={75}
        />
      </Box>
    </CustomContainer>
  );
};

export const Results = ({ SW }) => {
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
