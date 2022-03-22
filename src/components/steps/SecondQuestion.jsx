import React from "react";
import { Form, Formik, useField } from "formik";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Progress,
  Spacer,
  Switch,
  VStack,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import data from "../../data/questions.json";
import { addToAnswer } from "../../feature/answerSlice";
import { CenteredBox } from "./Utils";
import "./styles.css";
import { Layout } from "../layout";

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

const SecondQuestion = ({ SW }) => {
  const dispatch = useDispatch();
  const { question, answers } = data[1];
  return (
    <Layout
      header={
        <Center>
          <Heading>Question 2</Heading>
        </Center>
      }
      footer={
        <Progress
          hasStripe
          isAnimated
          colorScheme={"green"}
          size={"xs"}
          max={4}
          value={2}
        />
      }
    >
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
    </Layout>
  );
};

export default SecondQuestion;
