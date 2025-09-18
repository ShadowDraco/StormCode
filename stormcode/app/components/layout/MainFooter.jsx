"use client";
import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { ActionIcon, Anchor, Group, Container, Box } from "@mantine/core";
import Logo from "../../../public/Logo.webp";
import classes from "./MainFooter.module.css";
import Image from "next/image";

const links = [
  { link: "/contact", label: "Contact" },
  { link: "/commision", label: "Commision" },
  { link: "/portfolio", label: "Portfolio" },
];

export default function MainFooter() {
  const items = links.map((link) => (
    <Anchor c="dimmed" key={link.label} href={link.link} lh={1} size="sm">
      {link.label}
    </Anchor>
  ));

  return (
    <>
      <Box className={classes.footer} visibleFrom="sm">
        <Container
          className={classes.inner}
          display="flex"
          style={{ justifyContent: "space-between", alignItems: "center" }}
          pb={20}
        >
          <Anchor href="/">
            <Image
              src={Logo.src}
              width={50}
              height={50}
              alt="Storm Code Logo"
            />
          </Anchor>

          <Group className={classes.links}>{items}</Group>

          <Group gap="xs" justify="flex-end" wrap="nowrap">
            <Anchor href="https://instagram.com/stormyfrolic" target="_blank">
              <ActionIcon size="lg" variant="default" radius="xl">
                <IconBrandInstagram size={18} stroke={1.5} />
              </ActionIcon>
            </Anchor>
          </Group>
        </Container>
      </Box>

      <Box className={classes.footer} hiddenFrom="sm">
        <Container
          className={classes.inner}
          display="flex"
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            gap: 10,
            flexWrap: "wrap",
          }}
          pb={20}
        >
          <Anchor href="/">
            <Image
              src={Logo.src}
              width={50}
              height={50}
              alt="Storm Code Logo"
            />
          </Anchor>

          <Group className={classes.links}>{items}</Group>

          <Group gap="xs" justify="flex-end" wrap="nowrap">
            <Anchor href="https://instagram.com/stormyfrolic" target="_blank">
              <ActionIcon size="lg" variant="default" radius="xl">
                <IconBrandInstagram size={18} stroke={1.5} />
              </ActionIcon>
            </Anchor>
          </Group>
        </Container>
      </Box>
    </>
  );
}
