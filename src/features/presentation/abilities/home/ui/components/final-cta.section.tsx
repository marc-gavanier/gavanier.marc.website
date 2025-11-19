import { RiMailLine } from 'react-icons/ri';
import { ButtonLink } from '@/libraries/ui/primitives/button-link';
import { cn } from '@/libraries/utils';

export const FinalCTASection = ({ className }: { className?: string }) => (
  <section id='final-cta' className={cn('my-24', className)}>
    <div className='text-center bg-primary-surface py-20 sm:px-16 px-8 rounded-xl md:text-xl text-lg'>
      <h2 className='pb-8 text-4xl font-medium'>Prenons contact !</h2>
      <p className='pb-4'>
        Ouvert et accessible, je réponds volontiers à un premier échange&nbsp;:
        <br />
        qu’il s’agisse d’un besoin clair ou encore en phase de réflexion.
      </p>
      <p className='pb-8'>Écrivez-moi, je vous réponds rapidement.</p>
      <ButtonLink href='/contact' scale='btn-lg' color='btn-primary'>
        <RiMailLine className='mr-1' aria-hidden={true} />
        Commencer la discussion
      </ButtonLink>
    </div>
  </section>
);
