import type { ReactNode } from 'react';
import '@/styles/globals.css';

export default ({ children }: { children: ReactNode }) => (
  <html lang='fr'>
    <body>{children}</body>
  </html>
);
