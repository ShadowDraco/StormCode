"use client";
import { IconGauge, IconLock, IconUser } from "@tabler/icons-react";
import { Container, SimpleGrid, Text, ThemeIcon, Title } from "@mantine/core";
import classes from "./Accolades.module.css";

export const MOCKDATA = [
  {
    icon: IconGauge,
    title: "Extreme performance",
    description:
      "Ultra fast loading times and incredible visibility. Websites become top search results quick with amazing SEO",
  },
  {
    icon: IconUser,
    title: "No AI or Expensive Templates",
    description:
      "Websites by Storm Code use no A.I, no templates or templating websites, no stock photos, no unnesseary costs. ",
  },
  {
    icon: IconLock,
    title: "No Price Changes",
    description:
      "Prices for a website will never go up! Lifetime service with Storm Code will never change!",
  },
];

export function Feature({ icon: Icon, title, description }) {
  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon size={30} stroke={1.5} />
      </ThemeIcon>
      <Text mt="sm" size="lg" mb={7} style={{ fontWeight: "bold" }}>
        {title}
      </Text>
      <Text size="md" lh={1.6}>
        {description}
      </Text>
    </div>
  );
}

export default function Accolades() {
  const features = MOCKDATA.map((feature, index) => (
    <Feature {...feature} key={index} />
  ));

  return (
    <Container className={classes.wrapper} py={20}>
      <Title className={classes.title} ta="center">
        Websites Built By Storm Code
      </Title>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}></Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: "xl", md: 50 }}
        verticalSpacing={{ base: "xl", md: 50 }}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
