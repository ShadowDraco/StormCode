import Carousel from './components/landing/Carousel'
import CodeHero from './components/landing/CodeHero'
import WebHero from './components/landing/WebHero';

export default function HomePage() {
  return (
    <>
    <WebHero />
    <CodeHero />
    <Carousel />
    </>
   
  );
}