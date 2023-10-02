import { Flex, Select, Text } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Flex px={6} justify={"center"}>
      <Text color="#C0C0D1" fontSize="24px" fontWeight={"semibold"}>
        {" "}
        ECHO{" "}
      </Text>
      <Select color="white" ml={6} width={"130px"} mr="-190px">
        <option style={{ color: "black" }} value="test">
          {" "}
          Stone City 1{" "}
        </option>
        <option style={{ color: "black" }} value="test">
          {" "}
          Stone City 2{" "}
        </option>
        <option style={{ color: "black" }} value="test">
          {" "}
          Fountain 1{" "}
        </option>
        <option style={{ color: "black" }} value="test">
          {" "}
          Fountain 2{" "}
        </option>
        <option style={{ color: "black" }} value="test">
          {" "}
          HQ 1{" "}
        </option>
        <option style={{ color: "black" }} value="test">
          {" "}
          HQ 2{" "}
        </option>
      </Select>
    </Flex>
  );
};

export default Logo;
