import type { ReactNode } from 'react';
import '@/styles/globals.css';
import { Navbar } from '@/features/presentation/abilities/layout/ui/components/navbar';
import { ThemeProvider } from '@/libraries/ui/theme/providers';

export default ({ children }: { children: ReactNode }) => (
  <html lang='fr' data-theme='light' suppressHydrationWarning>
    <body>
      <ThemeProvider attribute='data-theme' defaultTheme='light' enableSystem disableTransitionOnChange>
        <Navbar />
        {children}
      </ThemeProvider>
    </body>
  </html>
);
