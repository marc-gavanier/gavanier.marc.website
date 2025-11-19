import { RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri';
import { ButtonLink } from '@/libraries/ui/primitives/button-link';
import { ContactForm } from '../components/contact.form';

export const ContactPage = () => (
  <main className='flex lg:flex-1 lg:flex-row flex-col xl:gap-16 lg:gap-12 mt-36 lg:container mx-auto px-8 xl:px-16 2xl:px-32'>
    <div className='flex-1 flex flex-col gap-12 justify-between'>
      <div>
        <h1 className='text-5xl text-center md:text-left font-bold bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-subtle)] bg-clip-text text-transparent mb-8'>
          Contact
        </h1>
        <p className='mb-6 text-xl'>
          Besoin d’un regard technique, d’un accompagnement ponctuel ou simplement d’un premier avis&nbsp;?
        </p>
        <p className=' text-xl'>Je prends volontiers un moment pour échanger et comprendre votre situation.</p>
      </div>
      <div>
        <div className='mb-6 flex gap-4 lg:justify-start justify-center'>
          <ButtonLink
            href='https://linkedin.com/in/marc-gavanier'
            target='_blank'
            rel='noopener noreferrer'
            color='btn-primary'
            className='rounded-full py-8'
            kind='btn-soft'
          >
            <RiLinkedinBoxFill size={36} aria-hidden={true} />
            <span className='sr-only'>Linkedin</span>
          </ButtonLink>
          <ButtonLink
            href='https://github.com/marc-gavanier'
            target='_blank'
            rel='noopener noreferrer'
            color='btn-primary'
            className='rounded-full py-8'
            kind='btn-soft'
          >
            <RiGithubFill size={36} aria-hidden={true} />
            <span className='sr-only'>Github</span>
          </ButtonLink>
        </div>
        <address className='text-muted not-italic mb-8 lg:text-start text-center'>
          Gavanier ingénierie logicielle
          <br />
          229 rue Saint-Honoré
          <br />
          75001 Paris - France
        </address>
      </div>
    </div>
    <div className='flex-1 '>
      <div className='bg-primary-surface p-12 mb-8 rounded-lg'>
        <ContactForm />
      </div>
    </div>
  </main>
);
