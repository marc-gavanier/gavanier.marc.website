'use client';

import { CollapseController } from '@/libraries/ui/headless/collapse-controller';
import { Logo } from '@/libraries/ui/illustrations/logo';
import { Link } from '@/libraries/ui/primitives/link';

export const Navbar = () => (
  <CollapseController>
    {() => (
      <div className='relative bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-subtle)]'>
        <nav className='text-primary-content'>
          <div className='lg:container mx-auto px-16 lg:px-8 xl:px-16 2xl:px-32 py-14 flex flex-col sm:flex-row justify-between'>
            <div className='flex gap-2 justify-between items-center'>
              <Link
                href='/'
                title='Retour à l’accueil'
                className='font-bold text-xl text-base-title flex items-center gap-2'
                kind='link-hover'
              >
                <Logo color='color-base-100' className='max-w-24' />
              </Link>
              {/*<Button kind='btn-ghost' className='px-2 sm:hidden' {...toggle}>*/}
              {/*  <RiMenuLine size={24} aria-hidden={true} />*/}
              {/*</Button>*/}
            </div>
            {/*<div*/}
            {/*  {...collapsible({*/}
            {/*    className: 'collapse sm:collapse-open text-right'*/}
            {/*  })}*/}
            {/*>*/}
            {/*  <div className='collapse-content p-0'>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </nav>
        {/** biome-ignore lint/a11y/noSvgWithoutTitle: decorative element do not need title */}
        <svg viewBox='0 0 2000 50' className='w-full lg:h-16 md:h-12 h-8' preserveAspectRatio='none'>
          <defs>
            <mask id='wave-mask'>
              <rect width='100%' height='100%' fill='white' />
              <path
                d='M0 0v49.433S618.37-8.21 927.783 3.044c240.384 12.374 475.493 55.314 719.111 46.579 215.406-6.249 430.025-35.6 646.386-18.927C2382.5 35.659 2000 50 2000 50V0Z'
                fill='black'
              />
            </mask>
          </defs>
          <rect width='100%' height='100%' className='fill-base-100' mask='url(#wave-mask)' />
        </svg>
      </div>
    )}
  </CollapseController>
);
