import cx from 'clsx';
import { BackgroundImage, Button, Box, Container, Overlay, Text, Title } from '@mantine/core';
import classes from './WebHero.module.css';
import WebMaster from '../../../public/WebMaster.webp'

export default function WebHero() {
  return (
    <BackgroundImage src={WebMaster.src} radius="sm" m={0} className={classes.borderBottom}>
    <Container size='lg' p={50} >

      <Box className={classes.inner} bg="rgba(10,10,10,0.7)" p={10}>
        <Title className={classes.title} my={20} c="white">
          Experienced Web Master{' '}
          <Text component="span" inherit className={classes.highlight}>
            - On Every Platform
          </Text>
        </Title>

        <Container size={640}  my={20}>
          <Text size="lg" className={classes.description} c="white">
           Experience with Word Press, Go Daddy, Squarespace, Shopify, Wix, and more 
           <br></br>A web master can take the reigns on any website!
          </Text>
        </Container>

        <Box className={classes.controls}  my={50}>
          <Button className={classes.control} variant="white" size="lg">
            Portfolio
          </Button>
          <Button className={cx(classes.control, classes.secondaryControl)} size="lg">
            Contact
          </Button>
        </Box>
      </Box>
    </Container>
    </BackgroundImage>
  );
}