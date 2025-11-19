'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';
import { RiMailLine, RiUserLine } from 'react-icons/ri';
import { applyEffectSchema } from '@/libraries/form/apply-effect-schema';
import { handleSubmit } from '@/libraries/form/handle-submit';
import { useAppForm } from '@/libraries/form/use-app-form';
import { contactValidation } from '../../validations/contact.validation';

export const ContactForm = () => {
  const [isPending, setIsPending] = useState(false);

  const form = useAppForm({
    defaultValues: {
      name: '',
      email: '',
      message: ''
    },
    validators: {
      onChange: applyEffectSchema(contactValidation)
    },
    onSubmit: async ({ value }) => {
      setIsPending(true);

      const formData = new FormData();
      formData.append('name', value.name);
      formData.append('email', value.email);
      formData.append('message', value.message);
      formData.append('access_key', '1bfd7120-bdb4-4906-b047-a85a769fec17');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      }).finally(() => setIsPending(false));

      const data = await response.json();

      if (data.success) {
        form.reset();
        toast.success('Merci pour votre message ! Je vous répondrai dans les plus brefs délais.', {
          duration: 8000
        });
      } else {
        toast.error('Une erreur est survenue lors de l’envoi du message. Veuillez réessayer plus tard.');
      }
    }
  });

  return (
    <form.AppForm>
      <form onSubmit={handleSubmit(form)}>
        <form.AppField name='name'>
          {(field) => (
            <div className='mb-4'>
              <field.Label>Votre nom</field.Label>
              <field.Input
                isPending={isPending}
                scale='input-lg'
                kind='input-ghost'
                color='input-primary'
                className='shadow w-full'
                left={<RiUserLine className='opacity-40' />}
              />
              <field.Info />
            </div>
          )}
        </form.AppField>
        <form.AppField name='email'>
          {(field) => (
            <div className='mb-4'>
              <field.Label>Votre adresse électronique</field.Label>
              <field.Input
                isPending={isPending}
                scale='input-lg'
                kind='input-ghost'
                color='input-primary'
                className='shadow w-full'
                left={<RiMailLine className='opacity-40' />}
              />
              <field.Info />
            </div>
          )}
        </form.AppField>
        <form.AppField name='message'>
          {(field) => (
            <div className='mb-8'>
              <field.Label>Votre message</field.Label>
              <field.Textarea
                isPending={isPending}
                scale='textarea-lg'
                kind='textarea-ghost'
                color='textarea-primary'
                className='shadow w-full'
                rows={10}
              />
              <field.Info />
            </div>
          )}
        </form.AppField>
        <form.Submit isPending={isPending} scale='btn-lg' modifier='btn-block'>
          Envoyer le message
        </form.Submit>
      </form>
    </form.AppForm>
  );
};
