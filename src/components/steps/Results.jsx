import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import {
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
import { CenteredBox } from "./Utils";
import { Layout } from "../layout";

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
    <Layout
      header={
        <Center>
          <Heading>Results</Heading>
        </Center>
      }
      footer={
        <Progress
          hasStripe
          isAnimated
          colorScheme={"green"}
          size={"xs"}
          max={4}
          value={4}
        />
      }
    >
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
    </Layout>
  );
};

export default Results;
