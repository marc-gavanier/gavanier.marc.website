import { cn } from '@/libraries/utils';

export const ApproachSection = ({ className }: { className?: string }) => (
  <section id='approach' className={cn('my-24', className)}>
    <h2 className='text-4xl text-center md:text-left font-bold bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-subtle)] bg-clip-text text-transparent mb-8'>
      Mon approche
    </h2>
    <p className='md:text-lg mb-6'>
      J’adopte une démarche itérative centrée sur le terrain.
      <br />
      Chaque cycle permet d’avancer dans la bonne direction, d’apprendre et d’adapter rapidement le produit.
      <br />
      C’est une boucle continue, répétée jusqu’à converger vers le produit le plus utile et le plus efficace.
    </p>
    <ul className='list rounded-box shadow-xl shadow-primary-surface grid grid-cols-1 lg:grid-cols-2 py-4'>
      <li className='flex gap-6 p-4'>
        <div className='text-4xl font-light text-primary'>1</div>
        <div className='list-col-grow'>
          <h3 className='uppercase font-bold text-primary py-2'>Partir du besoin métier</h3>
          <p className='text-base'>
            Chaque cycle démarre par le terrain&nbsp;: identifier le problème à résoudre et déterminer la prochaine évolution
            qui aura un impact concret et immédiat.
          </p>
        </div>
      </li>
      <li className='flex gap-6 p-4'>
        <div className='text-4xl font-light text-primary'>2</div>
        <div className='list-col-grow'>
          <h3 className='uppercase font-bold text-primary py-2'>Une solution qui accueille le changement</h3>
          <p className='text-base'>
            Je développe strictement ce qui est nécessaire, sur des fondations claire, simple et durable, pensée pour ajuster ou
            pivoter sans friction.
          </p>
        </div>
      </li>
      <li className='flex gap-6 p-4'>
        <div className='text-4xl font-light text-primary'>3</div>
        <div className='list-col-grow'>
          <h3 className='uppercase font-bold text-primary py-2'>Livrer tôt, livrer souvent</h3>
          <p className='text-base'>
            Je mets rapidement en ligne&nbsp;: des mises en production fréquentes réduisent le risque et permettent de
            confronter la solution au terrain dès que possible.
          </p>
        </div>
      </li>
      <li className='flex gap-6 p-4'>
        <div className='text-4xl font-light text-primary'>4</div>
        <div className='list-col-grow'>
          <h3 className='uppercase font-bold text-primary py-2'>Mesurer, écouter, ajuster</h3>
          <p className='text-base'>
            Les retours terrain guident la suite. L’observation et la mesure garantissent que le produit progresse toujours dans
            la bonne direction.
          </p>
        </div>
      </li>
    </ul>
  </section>
);
