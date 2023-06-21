import { Avatar, Flex, } from "@chakra-ui/react";
import Cart from "./Cart";
import LoginButton from "./LoginButton";

function NavRight() {
    return (
        <Flex direction={"row"} alignItems={"center"} gap={3}>
            <Cart />
            <Avatar size={"md"} />
            <LoginButton/>
        </Flex>
    );
}

export default NavRight;
