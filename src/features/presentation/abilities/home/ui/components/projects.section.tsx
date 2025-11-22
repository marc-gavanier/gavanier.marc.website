import { BasesIllustration } from '@/libraries/ui/illustrations/products/bases/bases.illustration';
import { BasesLogo } from '@/libraries/ui/illustrations/products/bases/bases.logo';
import { CartographieIllustration } from '@/libraries/ui/illustrations/products/cartographie/cartographie.illustration';
import { CartographieLogo } from '@/libraries/ui/illustrations/products/cartographie/cartographie.logo';
import { CoopIllustration } from '@/libraries/ui/illustrations/products/coop/coop.illustration';
import { CoopLogo } from '@/libraries/ui/illustrations/products/coop/coop.logo';
import { Badge } from '@/libraries/ui/primitives/badge';
import { cn } from '@/libraries/utils';

export const ProjectsSection = ({ className }: { className?: string }) => (
  <section id='projects' className={cn('my-24', className)}>
    <h2 className='text-4xl text-center md:text-left font-bold bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-subtle)] bg-clip-text text-transparent mb-8'>
      Mes dernières contributions
    </h2>
    <div className='flex flex-col gap-12'>
      <div className='flex flex-col lg:flex-row gap-12 items-center'>
        <div className='lg:w-3/5'>
          <CoopLogo width={60} height={60} />
          <h3 className='font-bold text-2xl mt-4 mb-2'>La Coop de la médiation numérique</h3>
          <p className='text-muted mb-2'>
            Un outil métier national dédié à l’accompagnement des publics éloignés du numérique.
          </p>
          <p>
            J’ai contribué dès les premières briques à construire un outil utile et fiable, en restant constamment connecté au
            terrain et aux médiateurs. Cette dynamique collective nous a permis de livrer régulièrement des fonctionnalités à
            fort impact.
          </p>
          <p className='py-3 font-medium'>
            Résultat&nbsp;: un outil robuste, évolutif, et utilisé chaque jour par des médiateurs partout en France.
          </p>
          <ul className='flex flex-wrap gap-2'>
            <li>
              <Badge color='badge-primary' kind='badge-soft'>
                +2 000 professionnels actifs
              </Badge>
            </li>
            <li>
              <Badge color='badge-primary' kind='badge-soft'>
                +1,5M d’accompagnements en un an
              </Badge>
            </li>
            <li>
              <Badge color='badge-primary' kind='badge-soft'>
                +100 000 bénéficiaires suivis régulièrement
              </Badge>
            </li>
          </ul>
        </div>
        <div className='lg:w-2/5'>
          <CoopIllustration width='100%' />
        </div>
      </div>
      <div className='flex flex-col lg:flex-row gap-12 items-center'>
        <div className='lg:w-3/5'>
          <CartographieLogo width={60} height={60} />
          <h3 className='font-bold text-2xl mt-4 mb-2'>La Cartographie nationale des lieux d’inclusion numérique</h3>
          <p className='text-muted mb-2'>
            Un outil national pour orienter les publics vers les lieux d’accompagnement les plus adaptés.
          </p>
          <p>
            En plus de l’outil cartographique qui permet de rechercher, filtrer et consulter les lieux de médiation numérique,
            j’ai conçu un pipeline complet (normalisation, déduplication, publication) permettant d’agréger quotidiennement des
            données hétérogènes issues de multiples sources.
          </p>
          <p className='py-3 font-medium'>
            Résultat&nbsp;: une cartographie alimentée automatiquement par les données remontées du terrain, fiable et
            accessible à tous.
          </p>
          <ul className='flex flex-wrap gap-2'>
            <li>
              <Badge color='badge-primary' kind='badge-soft'>
                23 sources consolidées
              </Badge>
            </li>
            <li>
              <Badge color='badge-primary' kind='badge-soft'>
                +17 000 lieux référencés
              </Badge>
            </li>
            <li>
              <Badge color='badge-primary' kind='badge-soft'>
                +300 visites quotidiennes.
              </Badge>
            </li>
          </ul>
        </div>
        <div className='lg:w-2/5'>
          <CartographieIllustration width='100%' />
        </div>
      </div>
      <div className='flex flex-col lg:flex-row gap-12 items-center'>
        <div className='lg:w-3/5'>
          <BasesLogo width={60} height={60} />
          <h3 className='font-bold text-2xl mt-4 mb-2'>Les Bases du numérique d’intérêt général</h3>
          <p className='text-muted mb-2'>
            Une plateforme collaborative pour partager ressources, outils et communs numériques.
          </p>
          <p>
            Je suis arrivé sur le projet quelques jours avant le lancement officiel pour renforcer l’équipe technique et
            sécuriser une mise en production fluide. J’ai ensuite accompagné l’équipe produit pour itérer rapidement sur les
            fonctionnalités clés et garantir une expérience utilisateur solide.
          </p>
          <p className='py-3 font-medium'>
            Résultat&nbsp;: une plateforme fluide, adaptée aux usages réels des acteurs du terrain et pleinement adoptée par la
            communauté.
          </p>
          <ul className='flex flex-wrap gap-2'>
            <li>
              <Badge color='badge-primary' kind='badge-soft'>
                +2 000 ressources publiées
              </Badge>
            </li>
            <li>
              <Badge color='badge-primary' kind='badge-soft'>
                +1M de vues des ressources
              </Badge>
            </li>
            <li>
              <Badge color='badge-primary' kind='badge-soft'>
                +100 membres actifs chaque mois.
              </Badge>
            </li>
          </ul>
        </div>
        <div className='lg:w-2/5'>
          <BasesIllustration width='100%' />
        </div>
      </div>
    </div>
  </section>
);
