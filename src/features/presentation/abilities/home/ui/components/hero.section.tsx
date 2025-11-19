import { RiCompass3Line, RiMailLine } from 'react-icons/ri';
import { ButtonLink } from '@/libraries/ui/primitives/button-link';
import { Link } from '@/libraries/ui/primitives/link';
import { cn } from '@/libraries/utils';
import { RoundedShapeFrame } from './rounded-shape-frame';

export const HeroSection = ({ className }: { className?: string }) => (
  <section id='hero' className={cn('md:flex gap-12 my-24', className)}>
    <div className='flex-2/6 order-first md:order-last flex justify-center max-w-2/3 mx-auto'>
      <RoundedShapeFrame width={438} height={526} src='/images/home/profil-picture.min.png' alt='Portrait de Marc Gavanier' />
    </div>
    <div className='md:flex-4/6'>
      <h1 className='text-4xl sm:text-5xl font-bold my-12 text-center md:text-left'>
        <span className='inline-flex items-center gap-3'>
          <span>👋</span>
          <span className='md:inline-block inline-grid'>
            Bonjour, je suis{' '}
            <span className='bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-subtle)] whitespace-nowrap bg-clip-text text-transparent'>
              Marc Gavanier
            </span>
          </span>
        </span>
      </h1>
      <p className='text-lg md:text-xl mb-12'>
        Ingénieur logiciel indépendant avec {new Date().getFullYear() - 2013} ans d’expérience professionnelle. Je conçois des
        produits numériques au service du métier, du besoin terrain à la production, pour{' '}
        <strong>livrer rapidement des fonctionnalités utiles et à fort impact</strong>.
      </p>
      <div className='mb-12 flex flex-col sm:flex-row justify-center md:justify-start gap-2'>
        <ButtonLink href='/contact' scale='btn-lg' color='btn-primary'>
          <RiMailLine className='mr-1' aria-hidden={true} />
          Entrez en contact
        </ButtonLink>
        <ButtonLink href='#approach' scale='btn-lg' kind='btn-soft' color='btn-primary'>
          <RiCompass3Line className='mr-1' aria-hidden={true} />
          Découvrez mon approche
        </ButtonLink>
      </div>
      <p className='text-muted'>
        Depuis 2021, j’accompagne principalement{' '}
        <Link href='https://anct.gouv.fr/' target='_blank' rel='noopener noreferrer'>
          l’Agence Nationale de la Cohésion des Territoires
        </Link>{' '}
        dans la conception et le développement de produits numériques à fort impact, dans le cadre du programme{' '}
        <Link href='https://www.societenumerique.gouv.fr/' target='_blank' rel='noopener noreferrer'>
          Société Numérique
        </Link>
        .
      </p>
    </div>
  </section>
);
