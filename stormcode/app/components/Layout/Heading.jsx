import { BackgroundImage, Anchor, Group, Box, Text, Title } from '@mantine/core';
import FutureBackground from '../../../public/FutureBackground.webp'
import classes from './Heading.module.css';

export default function Heading() {
  return (
  <BackgroundImage src={FutureBackground.src} radius="sm" >
    
      <Anchor href="/">
      <Title className={classes.title} c="white" ta="left" p={5} pl={10}>
        Storm{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'blue', to: 'white' }}>
          Code
        </Text>
      </Title>
      </Anchor>
      <Text c="" ta="center" size="lg" maw={400}>
        Web design and Tech Solutions for <strong>Everyone</strong>
      </Text>

       <Group mt="sm" className={classes.navbar}>
        <Box p="sm" className={classes.navlink}>
            <Text c="black" size="lg">
                <Anchor href="/about" td="none" c="gray">About</Anchor>
            </Text>
        </Box>
        <Box p="sm" className={classes.navlink}>
            <Text c="black" size="lg">
                <Anchor href="/contact" td="none" c="gray">Contact</Anchor>
            </Text>
        </Box>
        <Box p="sm" className={classes.navlink}>
            <Text c="black" size="lg">
                <Anchor href="/commission" td="none" c="gray">Commission</Anchor>
            </Text>
        </Box>
      </Group>

    </BackgroundImage>
  );
}