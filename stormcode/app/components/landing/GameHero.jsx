import { IconCheck } from '@tabler/icons-react';
import { Anchor, Button, Container, Group, Image, List, ListItem, Box, Flex, ThemeIcon, Title } from '@mantine/core';
import image from '../../../public/GameSetup.webp';
import classes from './GameHero.module.css';

export default function GameHero() {
  return (
    <>
    <Container size="lg" className={classes.borderBottom} visibleFrom='sm'>
      <div className={classes.inner}>

        <Image src={image.src} className={classes.image} />
        <div className={classes.content}>
          <Title className={classes.title}>
            Custom <span className={classes.highlight}>Local</span> Gaming PC's <br />
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
              <b>No Markup</b> – Work / Gaming PC Builds at Cost
            </ListItem>
            <ListItem>
              <b>Small Build Fee</b> – Even with a build fee expect to <strong>Save</strong> $300 or more!
            </ListItem>
             <ListItem>
              <b>Testing</b> – Testing, Benchmarks, and Quality Assurance before pick up
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
        
      </div>
    </Container>

    <Box size="lg" className={classes.borderBottom} hiddenFrom="sm" m={5}>
      <Flex wrap="wrap" className={classes.inner} justify='center'>
        <Image src={image.src} className={classes.image} w="75%" h="75%" mb={20}/>
        <div className={classes.content}>
          <Title className={classes.title}>
            Custom <span className={classes.highlight}>Local</span> Gaming PC's <br />
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
              <b>No Markup</b> – Work / Gaming PC Builds at Cost
            </ListItem>
            <ListItem>
              <b>Small Build Fee</b> – Even with a build fee expect to <strong>Save</strong> $300 or more!
            </ListItem>
             <ListItem>
              <b>Testing</b> – Testing, Benchmarks, and Quality Assurance before pick up
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
        
      </Flex>
    </Box>
    </>
  );
}