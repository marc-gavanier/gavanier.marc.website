import Image, { type ImageProps } from 'next/image';

export const RoundedShapeFrame = (props: ImageProps) => (
  <div className='relative w-full'>
    <Image className='absolute w-full' {...props} />
    {/** biome-ignore lint/a11y/noSvgWithoutTitle: decorative element do not need title */}
    <svg className='w-full' viewBox='0 0 657 657' xmlns='http://www.w3.org/2000/svg'>
      <path d='m271 271 386 107.89L380.6 657 271 271Z' className='fill-primary' opacity='.1'></path>
      <path d='M0 143h268v268H0z' className='fill-primary' opacity='.1'></path>
      <circle cx='314.5' cy='331.5' className='fill-primary' opacity='.2' r='216.5'></circle>
    </svg>
  </div>
);
