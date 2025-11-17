import { RiMailLine } from 'react-icons/ri';
import { Button } from '@/libraries/ui/primitives/button';
import { cn } from '@/libraries/utils';

export const FinalCTASection = ({ className }: { className?: string }) => (
  <section id='final-cta' className={cn('my-24 text-center', className)}>
    <p className='text-xl pb-4'>
      Je suis toujours ouvert à un premier échange, qu’il s’agisse d’un besoin concret ou d’une simple exploration.
    </p>
    <p className='text-xl pb-6'>N’hésitez pas à me contacter, je réponds rapidement.</p>
    <Button scale='btn-lg' color='btn-primary'>
      <RiMailLine className='mr-1' aria-hidden={true} />
      Contactez-moi
    </Button>
  </section>
);
