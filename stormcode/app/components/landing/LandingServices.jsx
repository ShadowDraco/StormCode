"use client";

import { IconGauge, IconUser, IconX } from "@tabler/icons-react";
import {
  Card,
  Container,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import classes from "./LandingServices.module.css";

const mockdata = [
  {
    title: "Free - Easy Consulting",
    description:
      "Get started fast and simple, contact us to learn more about our services",
    icon: IconGauge,
  },
  {
    title: "Personal",
    description:
      "A website tells more than just business a address. Your story is important and requires a personal touch!",
    icon: IconUser,
  },
  {
    title: "No Fluff",
    description:
      "No extra costs, no hidden fees, no drag and drop templates, no third parties, no loops",
    icon: IconX,
  },
];

export default function LandingServices() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <feature.icon size={50} stroke={1.5} color={theme.colors.blue[6]} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Build or Bring a Website With Storm Code
      </Title>

      <Text
        c="dimmed"
        size="lg"
        className={classes.description}
        ta="center"
        mt="md"
      >
        Cheaper and More Versatile than the rest.
        <strong> Everyone</strong> joins the Storm!
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
