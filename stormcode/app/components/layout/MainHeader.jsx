import { BackgroundImage, Anchor, Group, Box, Flex, Text, Title } from '@mantine/core';
import FutureBackground from '../../../public/FutureBackground.webp'
import classes from './MainHeader.module.css';
import { ColorSchemeToggle } from './ColorSchemeToggle';

export default function MainHeader() {
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
      <Text c="white" ta="center" size="lg" maw={400}>
        Web design and Tech Solutions for <strong>Everyone</strong>
      </Text>

       <Group mt="sm" className={classes.navbar}>
        <Anchor href="/about" td="none">
        <Box p="sm" className={classes.navlink}>
            <Text size="lg">
                About
            </Text>
        </Box>
        </Anchor>
         <Anchor href="/contact" td="none">
        <Box p="sm" className={classes.navlink}>
            <Text size="lg">
               Contact
            </Text>
        </Box>
        </Anchor>
         <Anchor href="/commission" td="none">
        <Box p="sm" className={classes.navlink}>
            <Text size="lg">
               Commission
            </Text>
        </Box>
        </Anchor>
        <Flex className={classes.colorButton}style={{ flexGrow: 1, justifyContent: 'right'}}>
          <ColorSchemeToggle />
        </Flex>
      </Group>

    </BackgroundImage>
  );
}