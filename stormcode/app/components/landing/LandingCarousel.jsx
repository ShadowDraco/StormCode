"use client"
import { Carousel } from '@mantine/carousel';
import { Container, Button, Paper, Text, Title, useMantineTheme, Anchor } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import classes from './LandingCarousel.module.css';

//import WebDesign from '../../../public/WebDesign.webp'
import HollywoodPainter from '../../../public/HollywoodPainter.webp'
import IslasAuto from '../../../public/IslasAuto.webp'
import WhitePC from '../../../public/WhitePC.webp'
import BlackPC from '../../../public/BlackPC.webp'


function Card({ image, title, category, link, buttonText }) {
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
          {title? title : ''}
        </Title>
      </div>
      <Anchor href={link ? link : null} target="_blank">
        <Button variant="white" color="dark">
          { buttonText ? buttonText : "Learn More"}
        </Button>
      </Anchor>
    </Paper>
  );
}

const data = [
  
  {
    image: HollywoodPainter.src,
    title: "Website Builds",
    category: 'Web Design',
    link: "https://bereketli-art.vercel.app/"
  },
  {
    image: IslasAuto.src,
    title: "",
    category: 'Web Design',
    link: "https://www.islasautobody.com/"
  },
  {
    image: BlackPC.src,
    title: 'Local Area PC Building',
    category: 'PC Building',
  },
   {
    image: WhitePC.src,
    title: '',
    category: 'PC Building',
  },

];

export default function LandingCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item, index) => (
    <Carousel.Slide key={item.title? item.title : "landing-carosel"+index}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Container size="md" pt={20}>
       <Title order={3} className={classes.title}>
          Want a Preview?
        </Title>
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