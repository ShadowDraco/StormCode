import { IconCertificate, IconCoin, IconWorldWww } from "@tabler/icons-react";
import { Container, SimpleGrid, Text } from "@mantine/core";
import classes from "./Services.module.css";

function Feature({ icon: Icon, title, description, className, ...others }) {
  return (
    <div className={classes.feature} {...others}>
      <div className={classes.overlay} />

      <div className={classes.content}>
        <Icon size={38} className={classes.icon} stroke={1.5} />
        <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text c="dimmed" fz="lg">
          {description}
        </Text>
      </div>
    </div>
  );
}

const mockdata = [
  {
    icon: IconWorldWww,
    title: "Custom Websites for All",
    description:
      "Invidual, Business, Church, School, Startup, Restaurant, Service - Everyone",
  },
  {
    icon: IconCertificate,
    title: "Best Quality Product",
    description: "A Certified Full-Stack web developer manages every project.",
  },
  {
    icon: IconCoin,
    title: "Very Affordable Pricing",
    description:
      "Build YOUR custom website for $250 and get lifetime support, updates, and content for cheap",
  },
];

export default function Services() {
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

  return (
    <Container mt={30} mb={30} size="lg">
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={50}>
        {items}
      </SimpleGrid>
    </Container>
  );
}
