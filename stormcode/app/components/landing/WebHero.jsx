import cx from "clsx";

import {
  Anchor,
  BackgroundImage,
  Button,
  Box,
  Container,
  Flex,
  Text,
  Title,
  Group,
} from "@mantine/core";

import classes from "./WebHero.module.css";

import WebMaster from "../../../public/SubtleBackground.webp";

export default function WebHero() {
  return (
    <BackgroundImage
      src={WebMaster.src}
      radius="sm"
      m={0}
      className={classes.borderBottom}
    >
      <Container size="lg" p={50}>
        <Box className={classes.inner} bg="rgba(10,10,10,0.7)" p={10}>
          <Title
            className={classes.title}
            my={20}
            mb={35}
            ta="center"
            c="white"
          >
            The Web Master for <strong>Your</strong> Website!
            <Text component="span" inherit className={classes.highlight}></Text>
          </Title>

          <Container
            size={840}
            my={20}
            display="flex"
            justify="center"
            visibleFrom="sm"
          >
            <Group c="teal">
              <Group>
                <Title order={3}>Individual ⬤</Title>
                <Title order={3}>Small Business ⬤</Title>
                <Title order={3}>Church ⬤</Title>
              </Group>
              <Group>
                <Title order={3}>Restaurant ⬤</Title>
                <Title order={3}>Store ⬤</Title>
                <Title order={3}>Friend ⬤</Title>
                <Title order={3}>Everyone ⬤</Title>
              </Group>
            </Group>

            <Title
              className={classes.title}
              my={20}
              mt={35}
              c="white"
              ta="center"
            >
              Start or Transfer <em>Your</em> Web Services <br></br> with Storm
              Code
            </Title>
          </Container>

          <Container size={840} my={20} hiddenFrom="sm">
            <Group c="teal">
              <Group>
                <Title order={3}>Individual ⬤</Title>
                <Title order={3}>Small Business ⬤</Title>
                <Title order={3}>Church ⬤</Title>
              </Group>
              <Group>
                <Title order={3}>Restaurant ⬤</Title>
                <Title order={3}>Store ⬤</Title>
                <Title order={3}>Friend ⬤</Title>
                <Title order={3}>Everyone ⬤</Title>
              </Group>
            </Group>

            <Title
              className={classes.title}
              my={20}
              mt={35}
              c="white"
              ta="center"
            >
              Start or Transfer <em>Your</em> Web Services <br></br> with Storm
              Code
            </Title>
          </Container>

          <Flex className={classes.controls} my={50} justify="center">
            <Anchor href="/contact" className={classes.control}>
              <Button
                className={classes.control}
                variant="white"
                size="lg"
                visibleFrom="md"
              >
                Portfolio
              </Button>
            </Anchor>
            <Anchor
              href="/contact"
              className={cx(classes.control, classes.secondaryControl)}
            >
              <Button
                className={cx(classes.control, classes.secondaryControl)}
                size="lg"
                visibleFrom="md"
              >
                Contact
              </Button>
            </Anchor>

            <Anchor href="/contact" className={classes.control}>
              <Button
                className={classes.control}
                variant="white"
                size="sm"
                hiddenFrom="md"
              >
                Portfolio
              </Button>
            </Anchor>
            <Anchor
              href="/contact"
              className={cx(classes.control, classes.secondaryControl)}
            >
              <Button
                className={cx(classes.control, classes.secondaryControl)}
                size="sm"
                hiddenFrom="md"
              >
                Contact
              </Button>
            </Anchor>
          </Flex>
        </Box>
      </Container>
    </BackgroundImage>
  );
}
