import { ApproachSection } from '../components/approach.section';
import { FinalCTASection } from '../components/final-cta.section';
import { HeroSection } from '../components/hero.section';
import { ServicesSection } from '../components/services.section';
import { ValueSection } from '../components/value.section';

export const HomePage = () => (
  <main>
    <HeroSection className='lg:container mx-auto px-8 xl:px-16 2xl:px-32' />
    <ApproachSection className='lg:container mx-auto px-8 xl:px-16 2xl:px-32' />
    <ServicesSection className='lg:container mx-auto px-8 xl:px-16 2xl:px-32' />
    <ValueSection className='lg:container mx-auto px-8 xl:px-16 2xl:px-32' />
    <FinalCTASection className='lg:container mx-auto px-8 xl:px-16 2xl:px-32' />
  </main>
);
