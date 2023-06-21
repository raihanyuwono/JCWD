import { Box, Button, Image, Text, VStack } from "@chakra-ui/react";
import { color } from "../theme/Themes";
import { addItem } from "../storage/CounterCart";
import { useDispatch } from "react-redux";

function priceDiv(price) {
    let text = "";
    while (Math.floor(price / 1000) > 0) {
        text = `.${String(price).substr(-3)}${text}`;
        price = Math.floor(price / 1000);
    }
    text = `${price}${text}`;
    return text;
}

function CardItem({ data }) {
    const dispatch = useDispatch();
    return data.map((item) => {
        return (
            <>
                <VStack
                    // w={"20rem"}
                    flex={"1 1 18rem"}
                    bgColor={color.card}
                    borderRadius={"10px"}
                    overflow={"hidden"}
                    pb={"0.5rem"}
                >
                    <Box pos={"relative"}>
                        <Text
                            w={"full"}
                            p={"8px"}
                            textAlign={"center"}
                            bgColor={"#00000066"}
                            noOfLines={2}
                            color={color.textIcon}
                            pos={"absolute"}
                            bottom={"0px"}
                            fontSize={"xl"}
                            fontWeight={"semibold"}
                            fontFamily={"JetBrains Mono"}
                        >
                            {item.productName}
                        </Text>
                        <Image src={item.img} alt="Image" objectFit={"cover"} />
                    </Box>
                    <Text fontSize={"xl"} fontWeight={"semibold"}>Rp {priceDiv(item.price)}</Text>
                    <Button w={"97%"} color={"#ffffff"} bgColor={"green"} onClick={() => dispatch(addItem(item))}>Add to Cart</Button>
                </VStack>
            </>
        );
    });
}

export default CardItem;
