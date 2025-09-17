import LandingCarousel from './components/landing/LandingCarousel'
import CodeHero from './components/landing/CodeHero'
import WebHero from './components/landing/WebHero';
import GameHero from './components/landing/GameHero';
import DanceHero from './components/landing/DanceHero';

export default function HomePage() {
  return (
    <>
    <WebHero />
    <CodeHero />
    <GameHero />
    <DanceHero />
    <LandingCarousel />
    </>
   
  );
}