import {
  BackgroundImage,
  Anchor,
  Group,
  Box,
  Flex,
  Text,
  Title,
} from "@mantine/core";
import FutureBackground from "../../../public/FutureBackground.webp";
import classes from "./MainHeader.module.css";
import { ColorSchemeToggle } from "./ColorSchemeToggle";

export default function MainHeader() {
  return (
    <>
      <BackgroundImage src={FutureBackground.src} radius="sm" visibleFrom="sm">
        <Flex
          className={classes.colorButton}
          style={{ flexGrow: 1, justifyContent: "space-between" }}
        >
          <Anchor href="/">
            <Title
              className={classes.title}
              c="white"
              ta="left"
              bg="black"
              p={5}
              pl={10}
            >
              Storm{" "}
              <Text
                inherit
                variant="gradient"
                component="span"
                gradient={{ from: "blue", to: "white" }}
              >
                Code
              </Text>
            </Title>
          </Anchor>

          <Box hiddenFrom="sm">
            <ColorSchemeToggle />
          </Box>
        </Flex>

        <Text c="white" ta="center" size="lg" maw={400}>
          Web Services and Tech Solutions for <strong>Everyone</strong>
        </Text>
        <Group mt="sm" className={classes.navbar}>
          <Anchor href="/contact" td="none" c="white">
            <Box p="sm" className={classes.navlink}>
              <Text size="lg">Contact</Text>
            </Box>
          </Anchor>

          <Flex
            className={classes.colorButton}
            style={{ flexGrow: 1, justifyContent: "right" }}
          >
            <ColorSchemeToggle />
          </Flex>
        </Group>
      </BackgroundImage>

      <Box bg="black" hiddenFrom="sm">
        <Anchor href="/">
          <Title
            className={classes.title}
            c="white"
            ta="left"
            bg="black"
            p={5}
            pl={10}
          >
            Storm{" "}
            <Text
              inherit
              variant="gradient"
              component="span"
              gradient={{ from: "blue", to: "white" }}
            >
              Code
            </Text>
          </Title>
        </Anchor>
        <Text c="white" ta="left" size="lg" maw={400} pl={10}>
          Web design and<br></br>Tech Solutions for <strong>Everyone</strong>
        </Text>

        <Group mt="sm" className={classes.navbar}>
          <Anchor href="/contact" td="none" c="white">
            <Box p="sm" className={classes.navlink}>
              <Text size="lg">Contact</Text>
            </Box>
          </Anchor>
        </Group>
      </Box>
    </>
  );
}
