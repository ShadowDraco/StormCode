import cx from 'clsx';
import { BackgroundImage, Button, Box, Container, Overlay, Text, Title } from '@mantine/core';
import classes from './WebHero.module.css';
import WebMaster from '../../../public/WebMaster.webp'

export default function WebHero() {
  return (
    <BackgroundImage src={WebMaster.src} radius="sm">
    <Container size='lg' p={50}>

      <div className={classes.inner}>
        <Title className={classes.title} my={20}>
          Experienced Web Master{' '}
          <Text component="span" inherit className={classes.highlight}>
            - Any Platform
          </Text>
        </Title>

        <Container size={640}  my={20}>
          <Text size="lg" className={classes.description}>
           With great experience in self hosted platforms like Vercel and render putting my own code to the test. To <strong>Word Press</strong>
          </Text>
        </Container>

        <Box className={classes.controls}  my={50}>
          <Button className={classes.control} variant="white" size="lg">
            Get started
          </Button>
          <Button className={cx(classes.control, classes.secondaryControl)} size="lg">
            Live demo
          </Button>
        </Box>
      </div>
    </Container>
    </BackgroundImage>
  );
}