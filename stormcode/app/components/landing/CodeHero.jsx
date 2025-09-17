import { IconCheck } from '@tabler/icons-react';
import { Anchor, Button, Container, Group, Image, List, ListItem, Text, ThemeIcon, Title } from '@mantine/core';
import image from '../../../public/CodeBackground1.webp';
import classes from './CodeHero.module.css';

export default function Hero() {
  return (
    <Container size="lg">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            A <span className={classes.highlight}>Modern</span> Web Designer <br />
          </Title>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck size={12} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <ListItem>
              <b>Real Programming</b> – Websites are built with code and designs written by a human
            </ListItem>
            <ListItem>
              <b>Flexible Pricing</b> – As a customer you are taken care of. Let us discuss price, honest!
            </ListItem>
             <ListItem>
              <b>Original Work</b> – No paid web templates, no shortcuts, no extra costs, just <strong>Your Website</strong>
            </ListItem>
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control} >
                <Anchor href="/commission" td="none" c="white">Commission</Anchor>
            </Button>
            <Button variant="default" radius="xl" size="md" className={classes.control}>
              <Anchor href="/contact" td="none" >Contact</Anchor>
            </Button>
          </Group>
        </div>
        <Image src={image.src} className={classes.image} />
      </div>
    </Container>
  );
}