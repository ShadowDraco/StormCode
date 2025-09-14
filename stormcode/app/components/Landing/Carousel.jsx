"use client"
import { Carousel} from '@mantine/carousel';
import { Container, Button, Paper, Text, Title, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import classes from './Carousel.module.css';

//import WebDesign from '../../../public/WebDesign.webp'
import HollywoodPainter from '../../../public/HollywoodPainter.webp'
import WhitePC from '../../../public/WhitePC.webp'
import BlackPC from '../../../public/BlackPC.webp'


function Card({ image, title, category }) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Read article
      </Button>
    </Paper>
  );
}

const data = [
  
  {
    image: HollywoodPainter.src,
    title: "The Hollywood Painter",
    category: 'Web Design',
  },
  {
    image: BlackPC.src,
    title: 'Local Area PC Building',
    category: 'PC Building',
  },
   {
    image: WhitePC.src,
    title: 'Gaming PC / Work PC',
    category: '',
  },

];

export default function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Container size="md">
      <Carousel
        slideSize={{ base: '100%', sm: '50%' }}
        slideGap={2}
        emblaOptions={{ align: 'start', slidesToScroll: mobile ? 1 : 2 }}
      >
        {slides}
      </Carousel>
    </Container>
  );
}