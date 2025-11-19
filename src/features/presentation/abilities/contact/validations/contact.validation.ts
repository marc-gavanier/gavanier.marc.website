import { filter, minLength, String as Str, Struct, Trim } from 'effect/Schema';

export const contactValidation = Struct({
  name: Str.pipe(minLength(1, { message: () => 'Saisissez votre nom' })),
  email: Trim.pipe(
    minLength(1, { message: () => 'Saisissez votre adresse électronique' }),
    filter(
      (value: string): string | true =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || `"${value}" n'est pas une adresse électronique valide`
    )
  ),
  message: Str.pipe(minLength(1, { message: () => 'Saisissez votre message' }))
});
