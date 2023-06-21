import { Flex } from "@chakra-ui/react";
import CardItem from "../components/CardItem";

const dummy = [
    {
        img: "https://i0.wp.com/www.gimbot.com/wp-content/uploads/2023/03/social_media_image.jpg?resize=1200%2C675&ssl=1",
        productName: "Steam Deck 0",
        price: 4000000,
    },
    {
        img: "https://i0.wp.com/www.gimbot.com/wp-content/uploads/2023/03/social_media_image.jpg?resize=1200%2C675&ssl=1",
        productName: "Steam Deck 1",
        price: 3800000,
    },
    {
        img: "https://i0.wp.com/www.gimbot.com/wp-content/uploads/2023/03/social_media_image.jpg?resize=1200%2C675&ssl=1",
        productName: "Steam Deck 2",
        price: 4200000,
    },
    {
        img: "https://i0.wp.com/www.gimbot.com/wp-content/uploads/2023/03/social_media_image.jpg?resize=1200%2C675&ssl=1",
        productName: "Steam Deck 3",
        price: 4500000,
    },
    {
        img: "https://i0.wp.com/www.gimbot.com/wp-content/uploads/2023/03/social_media_image.jpg?resize=1200%2C675&ssl=1",
        productName: "Steam Deck 4",
        price: 3600000,
    },
];

function Shop() {
    return (
        <Flex w={"full"} p={"8px"} gap={2} wrap={"wrap"}>
            <CardItem data={dummy} />
        </Flex>
    );
}

export default Shop;
