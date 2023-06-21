import {
    Box,
    Flex,
    HStack,
    Link,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverFooter,
    PopoverHeader,
    PopoverTrigger,
    Portal,
    Spacer,
    Text,
} from "@chakra-ui/react";
import { FaOpencart } from "react-icons/fa";
import { color } from "../../theme/Themes";
import { useDispatch, useSelector } from "react-redux";

function priceDiv(price) {
    let text = "";
    while (Math.floor(price / 1000) > 0) {
        text = `.${String(price).substr(-3)}${text}`;
        price = Math.floor(price / 1000);
    }
    text = `${price}${text}`;
    return text;
}

function Cart() {
    const cartList = useSelector((state) => state.CounterCart.cartList);
    const total = useSelector((state) => state.CounterCart.total);
    const counter = useSelector((state) => state.CounterCart.counter);
    // const dispatch = useDispatch();
    return (
        <Popover trigger="hover">
            <PopoverTrigger tirgger="hover">
                <Link>
                    <HStack pos={"relative"}>
                        <FaOpencart
                            color={color.textIcon}
                            size={"2.4rem"}
                            cursor={"pointer"}
                        />
                        {counter > 0 && 
                            <Flex right={"-0.75rem"} pos={"absolute"} mt={"-2rem"} ml={"-1.25rem"} w={"1.5rem"} h={"1.5rem"} borderRadius={"50%"} bgColor={"red"} alignItems={"center"} justifyContent={"center"}>
                                <Text fontSize={"sm"} fontWeight={"semibold"} color={"#ffffff"}>
                                    {counter}
                                </Text>
                            </Flex>
                        }
                    </HStack>
                </Link>
            </PopoverTrigger>
            <Portal>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Cart</PopoverHeader>
                    <PopoverBody>
                        {cartList.map((item) => {
                            return (
                                <>
                                    <Flex>
                                        <Text>{item.qty}</Text>
                                        <Spacer />
                                        <Text>{item.productName}</Text>
                                    </Flex>
                                </>
                            );
                        })}
                    </PopoverBody>
                    <PopoverFooter>
                        <Flex>
                            <Text>Total</Text>
                            <Spacer />
                            <Text>Rp {priceDiv(total)}</Text>
                        </Flex>
                    </PopoverFooter>
                </PopoverContent>
            </Portal>
        </Popover>
    );
}

export default Cart;
