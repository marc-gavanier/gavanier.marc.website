import { RiShieldCheckLine, RiStackLine, RiTeamLine } from 'react-icons/ri';
import { cn } from '@/libraries/utils';

export const ValueSection = ({ className }: { className?: string }) => (
  <section id='value' className={cn('py-24 bg-primary-surface')}>
    <div className={className}>
      <h2 className='text-4xl text-center md:text-left font-bold bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-subtle)] bg-clip-text text-transparent mb-6'>
        Ma valeur en mission
      </h2>
      <p className='md:text-lg mb-6'>
        J’apporte une dynamique sereine, précise et orientée résultats.
        <br />
        Mon objectif&nbsp;: faire progresser le projet de façon fiable, durable et sans friction pour l’équipe, tout en
        maximisant la valeur pour les utilisateurs.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='card bg-base-100'>
          <div className='card-body'>
            <RiShieldCheckLine
              className='text-base-100 primary bg-primary p-3 mb-3 rounded-full'
              size={48}
              aria-hidden={true}
            />
            <h2 className='card-title'>Fiabilité & transparence</h2>
            <p>
              Je prends le temps de comprendre les enjeux, je clarifie les besoin des utilisateurs et j’avance en toute
              transparence pour livrer une solution fiable, sans dérive et sans surprise.
            </p>
          </div>
        </div>
        <div className='card bg-base-100'>
          <div className='card-body'>
            <RiStackLine className='text-base-100 primary bg-primary p-3 mb-3 rounded-full' size={48} aria-hidden={true} />
            <h2 className='card-title'>Compétences transverses</h2>
            <p>
              Je m’intéresse à tout ce qui fait avancer un produit&nbsp;: front, back, cloud, automatisation. Cette
              compréhension globale me permet d’agir au bon endroit et de faire le lien entre les équipes.
            </p>
          </div>
        </div>
        <div className='card bg-base-100'>
          <div className='card-body'>
            <RiTeamLine className='text-base-100 primary bg-primary p-3 mb-3 rounded-full' size={48} aria-hidden={true} />
            <h2 className='card-title'>Impact sur l’équipe</h2>
            <p>
              Je m’aligne sur la cadence de l’équipe et je renforce l’expérience développeur au fil de l’eau, grâce à des
              améliorations ciblées sur la qualité, l’architecture et l’automatisation.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
