import { CollaborationPictogram } from '@/libraries/ui/pictograms/human/collaboration.pictogram';
import { ArchitecturePictogram } from '@/libraries/ui/pictograms/technical/architecture.pictogram';
import { AutomationPictogram } from '@/libraries/ui/pictograms/technical/automation.pictogram';
import { CodePictogram } from '@/libraries/ui/pictograms/technical/code.pictogram';
import { cn } from '@/libraries/utils';

export const ServicesSection = ({ className }: { className?: string }) => (
  <section id='services' className={cn('my-24', className)}>
    <h2 className='text-4xl text-center md:text-left font-bold bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-subtle)] bg-clip-text text-transparent mb-8'>
      Expertises & savoir-faire
    </h2>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
      <div className='flex items-start gap-6'>
        <div>
          <ArchitecturePictogram />
        </div>
        <div>
          <h3 className='font-bold text-xl mb-2'>Architecture & conception logicielle</h3>
          <p>
            Je conçois des architectures robustes et évolutives qui mettent la technique au service du métier. Mon approche
            privilégie la clarté, la cohérence du domaine et une évolution simple et maîtrisée pour accueillir sereinement les
            prochaines évolutions.
          </p>
        </div>
      </div>
      <div className='flex items-start gap-6'>
        <div>
          <CodePictogram />
        </div>
        <div>
          <h3 className='font-bold text-xl mb-2'>Développement full-stack & cloud</h3>
          <p>
            Je construis des produits complets, du front au back jusqu’à la production. Je mets en place des infrastructures
            cloud solides et économiques, en privilégiant des solutions simples, pragmatiques et performantes, immédiatement
            utiles sur le terrain.
          </p>
        </div>
      </div>
      <div className='flex items-start gap-6'>
        <div>
          <AutomationPictogram />
        </div>
        <div>
          <h3 className='font-bold text-xl mb-2'>Industrialisation, qualité & livraisons</h3>
          <p>
            Je mets en place des automatisations fiables pour les contrôles qualité, l’exécution des tests et les déploiements.
            Résultat : un rythme de livraison soutenu, qui maximise les retours terrain et garantit que le produit progresse
            dans la bonne direction.
          </p>
        </div>
      </div>
      <div className='inline-flex items-start gap-6'>
        <div>
          <CollaborationPictogram />
        </div>
        <div>
          <h3 className='font-bold text-xl mb-2'>Collaboration & partage</h3>
          <p>
            J’accompagne les équipes quand c’est nécessaire : cadrage, bonnes pratiques, pair-programming, organisation
            technique. Le partage de connaissances est au cœur de ma démarche pour renforcer les compétences et l’autonomie des
            équipes.
          </p>
        </div>
      </div>
    </div>
  </section>
);
