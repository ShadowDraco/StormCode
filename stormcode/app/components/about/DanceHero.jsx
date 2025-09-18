import { IconCheck } from "@tabler/icons-react";
import {
  Anchor,
  Button,
  Container,
  Group,
  Flex,
  Image,
  List,
  ListItem,
  Text,
  ThemeIcon,
  Title,
  Box,
} from "@mantine/core";
import image from "../../../public/Breakdance.webp";
import classes from "./DanceHero.module.css";

export default function DanceHero() {
  return (
    <>
      <Container size="lg" className={classes.borderBottom} visibleFrom="sm">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A <span className={classes.highlight}>Trained</span> Breakdancer{" "}
              <br />
            </Title>

            <List
              mt={30}
              spacing="sm"
              size="lg"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={12} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <ListItem>
                <b>8+ Years</b> – Pursuing Passion of{" "}
                <strong>Dance and Programming</strong>
              </ListItem>
              <ListItem>
                <b>8+ Styles</b> – Classically trained in Ballet, Tap, Jazz,
                Lyrical, Modern, Theatre, Hula, and Breakdance
              </ListItem>
              <ListItem>
                <b>Commited</b> – Talent helps, but commitment is{" "}
                <strong>Key</strong>
              </ListItem>
            </List>

            <Group mt={30}>
              <Button radius="xl" size="md" className={classes.control}>
                <Anchor href="/contact" td="none" c="white">
                  Commission
                </Anchor>
              </Button>
              <Button
                variant="default"
                radius="xl"
                size="md"
                className={classes.control}
              >
                <Anchor href="/contact" td="none">
                  Contact
                </Anchor>
              </Button>
            </Group>
          </div>
          <Image src={image.src} className={classes.image} />
        </div>
      </Container>

      <Box size="lg" className={classes.borderBottom} hiddenFrom="sm" m={5}>
        <Flex wrap="wrap" justify="center" className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A <span className={classes.highlight}>Trained</span> Breakdancer{" "}
              <br />
            </Title>

            <List
              mt={30}
              spacing="sm"
              size="lg"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={12} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <ListItem>
                <b>8+ Years</b> – Pursuing Passion of{" "}
                <strong>Dance and Programming</strong>
              </ListItem>
              <ListItem>
                <b>8+ Styles</b> – Classically trained in Ballet, Tap, Jazz,
                Lyrical, Modern, Theatre, Hula, and Breakdance
              </ListItem>
              <ListItem>
                <b>Commited</b> – Talent helps, but commitment is{" "}
                <strong>Key</strong>
              </ListItem>
            </List>

            <Group mt={30}>
              <Button radius="xl" size="md" className={classes.control}>
                <Anchor href="/commission" td="none" c="white">
                  Commission
                </Anchor>
              </Button>
              <Button
                variant="default"
                radius="xl"
                size="md"
                className={classes.control}
              >
                <Anchor href="/contact" td="none">
                  Contact
                </Anchor>
              </Button>
            </Group>
          </div>
          <Image
            src={image.src}
            className={classes.image}
            w="75%"
            h="75%"
            mt={20}
          />
        </Flex>
      </Box>
    </>
  );
}
