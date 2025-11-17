import type { ReactNode } from 'react';
import '@/styles/globals.css';
import { RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri';
import { Navbar } from '@/features/presentation/abilities/layout/ui/components/navbar';
import { type Category, Footer, FooterLegal, type FooterLink, FooterSocialLinks } from '@/libraries/ui/blocks/footer';
import { ThemeChanger } from '@/libraries/ui/blocks/theme-changer';
import { Logo } from '@/libraries/ui/illustrations/logo';
import { ThemeProvider } from '@/libraries/ui/theme/providers';

const footerCategories: Category[] = [];

const socialLinks: FooterLink[] = [
  {
    key: 'twitter',
    linkProps: { href: 'https://www.linkedin.com/in/marc-gavanier', icon: <RiLinkedinBoxFill size='24' />, children: 'Twitter' }
  },
  {
    key: 'github',
    linkProps: { href: 'https://github.com/marc-gavanier', icon: <RiGithubFill size='24' />, children: 'GitHub' }
  }
];

export default ({ children }: { children: ReactNode }) => (
  <html lang='fr' data-theme='light' suppressHydrationWarning>
    <body>
      <ThemeProvider attribute='data-theme' defaultTheme='light' enableSystem disableTransitionOnChange>
        <Navbar />
        {children}
        <Footer className='bg-base-200' categories={footerCategories}>
          <Logo color='color-base-500' className='max-w-40 pb-4' />
          <ThemeChanger />
        </Footer>
        <FooterLegal className='bg-base-300' company='Marc Gavanier' privacyPolicyLink='/privacy' termsOfServiceLink='/terms'>
          <FooterSocialLinks links={socialLinks}></FooterSocialLinks>
        </FooterLegal>
      </ThemeProvider>
    </body>
  </html>
);
