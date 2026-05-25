'use client'
import LandingCarousel from './components/landing/LandingCarousel'
import CodeHero from './components/landing/CodeHero'
import WebHero from './components/landing/WebHero';
import GameHero from './components/landing/GameHero';
import Services from './components/landing/LandingServices';
import { Box } from '@mantine/core';
import Preview from './components/preview/Preview';

export default function HomePage() {
  return (
    <Box>
      <WebHero />
      <Services />
      <CodeHero />
      <Preview />
    </Box>
   
  );
}