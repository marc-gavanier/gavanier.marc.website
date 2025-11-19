import { minLength, String as Str, Struct } from 'effect/Schema';

export const contactValidation = Struct({
  name: Str.pipe(minLength(1, { message: () => 'Saisissez votre nom' })),
  email: Str.pipe(minLength(1, { message: () => 'Saisissez votre adresse électronique' })),
  message: Str.pipe(minLength(1, { message: () => 'Saisissez votre message' }))
});
