import { IconCheck } from "@tabler/icons-react";
import {
  Anchor,
  Box,
  Button,
  Container,
  Flex,
  Group,
  Image,
  List,
  ListItem,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import image from "../../../public/CodeBackground1.webp";
import classes from "./CodeHero.module.css";

export default function CodeHero() {
  return (
    <>
      <Container size="lg" className={classes.borderBottom} visibleFrom="sm">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A <span className={classes.highlight}>Modern</span> Web Designer{" "}
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
                <b>Real Programming</b> – Websites are built with code and
                designs written by a human
              </ListItem>
              <ListItem>
                <b>Flexible Pricing</b> –{" "}
                <strong>
                  As a customer you are taken care of. Let us discuss price,
                  honest!
                </strong>
              </ListItem>
              <ListItem>
                <b>Original Work</b> – No paid web templates, no shortcuts, no
                extra costs, just <strong>Your Website</strong>
              </ListItem>
            </List>
          </div>
          <Image src={image.src} className={classes.image} mt={10} />
        </div>
      </Container>

      <Box size="lg" className={classes.borderBottom} hiddenFrom="sm" p={5}>
        <Flex className={classes.inner} wrap="wrap" justify="center">
          <div className={classes.content}>
            <Title className={classes.title}>
              A <span className={classes.highlight}>Modern</span> Web Designer{" "}
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
                <b>Real Programming</b> – Websites are built with code and
                designs written by a human
              </ListItem>
              <ListItem>
                <b>Flexible Pricing</b> –{" "}
                <strong>
                  As a customer you are taken care of. Let us discuss price,
                  honest!
                </strong>
              </ListItem>
              <ListItem>
                <b>Original Work</b> – No paid web templates, no shortcuts, no
                extra costs, just <strong>Your Website</strong>
              </ListItem>
            </List>
          </div>
          <Image
            src={image.src}
            className={classes.image}
            mt={20}
            w="75%"
            h="75%"
          />
        </Flex>
      </Box>
    </>
  );
}
