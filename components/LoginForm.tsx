import { Button, Stack, Flex } from "@chakra-ui/react";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  return (
    <Flex
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        width="250px"
        p="1rem"
        bg={"blue.400"}
        boxShadow="md"
        borderRadius="2"
      >
        <Button color={"white"} onClick={() => signIn("google")}>
          Googleでログイン
        </Button>
      </Stack>
    </Flex>
  );
}
