import { RiCopyleftLine, RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri';
import { Link } from '@/libraries/ui/primitives/link';
import { RoundedShapeFrame } from '../components/rounded-shape-frame';

export const HomePage = () => (
  <main>
    <div className='lg:container mx-auto px-16 lg:px-8 xl:px-16 2xl:px-32'>
      <div className='md:flex gap-12 my-20'>
        <div className='flex-2/6 order-first md:order-last flex justify-center max-w-4/5 mx-auto'>
          <RoundedShapeFrame width={438} height={526} src='/images/home/profil-picture.min.png' alt='' />
        </div>
        <div className='md:flex-4/6 text-center md:text-left'>
          <h1 className='text-4xl sm:text-5xl font-bold py-10 text-center md:text-left'>
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
          <p className='text-xl pb-6'>
            Ingénieur logiciel indépendant avec plus de {new Date().getFullYear() - 2013} ans d’expérience professionnelle. Je
            conçois des produits numériques complexes selon les plus hauts standards de qualité.
          </p>
          <div className='text-muted space-y-4'>
            <p>
              Ma priorité est la valeur que j’apporte à l’utilisateur final, cette exigence me pousse à appliquer les principes
              de conception logicielle les plus rigoureux&nbsp;:
            </p>
            <ul className='list-none space-y-2'>
              <li>
                👤 Je place le métier au cœur de la conception logiciel grâce au{' '}
                <Link
                  href='https://martinfowler.com/bliki/DomainDrivenDesign.html'
                  target='_blank'
                  rel='noreferrer'
                  className='text-primary'
                >
                  domain-driven design
                </Link>
              </li>
              <li>
                ✨ Je créé des fonctionnalités maintenables en écrivant du{' '}
                <Link
                  href='https://medium.com/s/story/reflections-on-clean-code-8c9b683277ca'
                  target='_blank'
                  rel='noreferrer'
                  className='text-primary'
                >
                  code propre
                </Link>{' '}
                dans une{' '}
                <Link
                  href='https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html'
                  target='_blank'
                  rel='noreferrer'
                  className='text-primary'
                >
                  architecture claire
                </Link>
              </li>
              <li>
                🚀 J’améliore l’optimisation et la rapidité de mise en ligne grâce au{' '}
                <Link
                  href='https://www.martinfowler.com/bliki/TestDrivenDevelopment.html'
                  target='_blank'
                  rel='noreferrer'
                  className='text-primary'
                >
                  développement piloté par les tests
                </Link>
              </li>
              <li>
                🎉 Je déploie fréquemment et automatiquement dans le cloud selon la{' '}
                <Link
                  href='https://martinfowler.com/bliki/DevOpsCulture.html'
                  target='_blank'
                  rel='noreferrer'
                  className='text-primary'
                >
                  culture DevOps
                </Link>
              </li>
            </ul>
          </div>
          <div className='mt-10 flex items-end justify-center md:justify-start gap-3'>
            <a
              href='https://www.linkedin.com/in/marc-gavanier'
              target='_blank'
              rel='noreferrer'
              className='text-muted hover:text-primary transition-colors'
            >
              <RiLinkedinBoxFill className='text-2xl' aria-hidden={true} />
              <span className='sr-only'>Linkedin</span>
            </a>
            <a
              href='https://github.com/marc-gavanier'
              target='_blank'
              rel='noreferrer'
              className='text-muted hover:text-primary transition-colors'
            >
              <RiGithubFill className='text-2xl' aria-hidden={true} />
              <span className='sr-only'>Github</span>
            </a>
            <div className='text-muted text-sm flex items-center gap-1'>
              <RiCopyleftLine />
              <span>{new Date().getFullYear()} Marc Gavanier</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);
