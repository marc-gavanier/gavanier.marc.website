'use client';

import { RiMenuLine } from 'react-icons/ri';
import { ThemeChanger } from '@/libraries/ui/blocks/theme-changer';
import { CollapseController } from '@/libraries/ui/headless/collapse-controller';
import { Button } from '@/libraries/ui/primitives/button';
import { Link } from '@/libraries/ui/primitives/link';

export const Navbar = () => (
  <CollapseController>
    {({ toggle, collapsible }) => (
      <>
        <nav className='bg-primary text-primary-content'>
          <div className='lg:container mx-auto px-16 lg:px-8 xl:px-16 2xl:px-32 py-14 flex flex-col sm:flex-row justify-between'>
            <div className='flex gap-2 justify-between items-center'>
              <Link
                href='/'
                title='Retour à l’accueil'
                className='font-bold text-xl text-base-title flex items-center gap-2'
                kind='link-hover'
              >
                <img src='/images/logo/logo-white-64.svg' alt='Marc Gavanier logo' />
              </Link>

              <Button kind='btn-ghost' className='px-2 sm:hidden' {...toggle}>
                <RiMenuLine size={24} aria-hidden={true} />
              </Button>
            </div>
            <div
              {...collapsible({
                className: 'collapse sm:collapse-open text-right'
              })}
            >
              <div className='collapse-content p-0'>
                <ThemeChanger />
              </div>
            </div>
          </div>
        </nav>
        {/** biome-ignore lint/a11y/noSvgWithoutTitle: decorative element do not need title */}
        <svg className='fill-primary' preserveAspectRatio='none' width='100%' height='74' viewBox='0 0 1440 74'>
          <path d='M0 0v49.433S347.833-8.21 521.878 3.044c135.216 12.374 267.465 55.314 404.5 46.579 121.166-6.249 241.889-35.6 363.592-18.927C1340.156 35.659 1440 50 1440 50V0Z' />
        </svg>
      </>
    )}
  </CollapseController>
);
