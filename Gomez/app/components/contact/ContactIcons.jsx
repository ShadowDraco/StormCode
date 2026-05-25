"use client";

import { IconAt, IconSun, IconMapPin } from "@tabler/icons-react";
import { Box, Stack, Text } from "@mantine/core";
import classes from "./ContactIcons.module.css";

function ContactIcon({ icon: Icon, title, description, ...others }) {
  return (
    <div className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon size={24} />
      </Box>

      <div>
        <Text size="lg" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

const MOCKDATA = [
  { title: "Email", description: "stormcodeweb@gmail.com", icon: IconAt },
  { title: "Working hours", description: "8 a.m. – 8 p.m.", icon: IconSun },
  {
    title: "Location",
    description: "Inland Empire - Riverside/San Bernardino",
    icon: IconMapPin,
  },
];

export default function ContactIconsList() {
  const items = MOCKDATA.map((item, index) => (
    <ContactIcon key={index} {...item} />
  ));
  return <Stack>{items}</Stack>;
}
