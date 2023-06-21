import { Flex, Text } from "@chakra-ui/react";
import { MdOutlineGames } from "react-icons/md";
import { color } from "../../theme/Themes";

function NavLeft() {
    return (
        <Flex
            direction={"row"}
            gap={2}
            alignItems={"center"}
            color={color.textIcon}
        >
            <MdOutlineGames size={"2.4rem"} />
            <Text fontFamily="Fira Code" fontSize={"2xl"}>
                Game<b>Net</b>
            </Text>
        </Flex>
    );
}

export default NavLeft;
