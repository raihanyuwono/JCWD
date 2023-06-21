import {Flex, Spacer} from "@chakra-ui/react"
import NavLeft from "./details/NavLeft";
import NavRight from "./details/NavRight";
import {color} from "../theme/Themes"

function NavBar(){
    return (
        <Flex zIndex={2} pos={"sticky"} top={0} id="navbar" px={"1rem"} py={"0.7rem"} bgColor={color.primary}>
            <NavLeft/>
            <Spacer/>
            <NavRight/>
        </Flex>
    );
}

export default NavBar;