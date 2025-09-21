"use client";
import { IconHeartDollar, IconLock, IconLabel } from "@tabler/icons-react";
import { Container, SimpleGrid, Text, ThemeIcon, Title } from "@mantine/core";
import classes from "./Accolades.module.css";

export const MOCKDATA = [
  {
    icon: IconHeartDollar,
    title: "No Build Cost",
    description:
      "Bring your website to Storm Code and skip the build fee! We take over for life.",
  },
  {
    icon: IconLabel,
    title: "Keep Your Domain and Data",
    description:
      "No expensive or complicated migration. Storm Code can meet you where you are and take over!",
  },
  {
    icon: IconLock,
    title: "No Update Fees",
    description:
      "No expensive fees for small changes, Storm Code is about value and performance, not charging an arm and a leg!",
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

export default function AccoladesTwo() {
  const features = MOCKDATA.map((feature, index) => (
    <Feature {...feature} key={index} />
  ));

  return (
    <Container className={classes.wrapper} py={20}>
      <Title className={classes.title} ta="center">
        Websites Managed By Storm Code
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
