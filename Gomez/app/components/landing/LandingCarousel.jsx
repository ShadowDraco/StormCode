"use client";
import { Carousel } from "@mantine/carousel";
import {
  Container,
  Button,
  Paper,
  Text,
  Title,
  useMantineTheme,
  Anchor,
  Flex,
  Box,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import classes from "./LandingCarousel.module.css";

import HollywoodPainter from "../../../public/HollywoodPainter.webp";
import IslasAuto from "../../../public/IslasAuto.webp";
import WhitePC from "../../../public/WhitePC.webp";
import BlackPC from "../../../public/BlackPC.webp";

function Card({ image, title, category, link, buttonText }) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <Box bg="rgba(10,10,10,0.5)" style={{ borderRadius: 5, padding: 5 }}>
        <Text className={classes.category} size="sm">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title ? title : ""}
        </Title>
      </Box>
      <Anchor href={link ? link : null} target="_blank">
        <Button variant="white" color="dark">
          {buttonText ? buttonText : "Learn More"}
        </Button>
      </Anchor>
    </Paper>
  );
}

const data = [
  {
    image: HollywoodPainter.src,
    title: "Website Builds",
    category: "Web Design",
    buttonText: "See Website",
    link: "https://bereketli-art.vercel.app/",
  },
  {
    image: IslasAuto.src,
    title: "",
    category: "Web Design",
    buttonText: "See Website",
    link: "https://www.islasautobody.com/",
  },
  {
    image: BlackPC.src,
    title: "Local Area PC Building",
    category: "PC Building",
    buttonText: "Build!",
    link: "/commision",
  },
  {
    image: WhitePC.src,
    title: "",
    category: "PC Building",
    link: "/commision",
    buttonText: "Build!",
  },
];

export default function LandingCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item, index) => (
    <Carousel.Slide key={item.title ? item.title : "landing-carosel" + index}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Container size="md" pt={20}>
      <Flex m={20} justify={"center"}>
        <Title order={3} className={classes.title}>
          Want to see more?
        </Title>
      </Flex>

      <Carousel
        slideSize={{ base: "100%", sm: "50%" }}
        slideGap={5}
        emblaOptions={{
          align: "start",
          slidesToScroll: mobile ? 1 : 1,
          loop: true,
          active: true,
        }}
      >
        {slides}
      </Carousel>
    </Container>
  );
}
