import { Anchor, Button, Container, Group, Text, Title } from '@mantine/core';
import classes from './not-found.module.css';
import Image from 'next/image';
import Logo from '../public/Logo.webp'

export default function page() {
  return (
    <Container className={classes.root} ta="center">
      <Image src={Logo.src} width={100} height={100} alt="Storm Code Logo" />
      <Title className={classes.title}>Coming Soon!</Title>
      <Text c="dimmed" size="lg" ta="center" className={classes.description}>
        Unfortunately, this is still being worked on!
      </Text>
      <Group justify="center">
        <Anchor href="/">
        <Button variant="subtle" size="md">
          Take me back to home page
        </Button>
        </Anchor>
      </Group>
    </Container>
  );
}