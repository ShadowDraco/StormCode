
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import "@mantine/core/styles.layer.css"; // Use layer CSS
import React from 'react';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

import MainHeader from './components/layout/MainHeader';
import MainFooter from './components/layout/MainFooter';

export const metadata = {
  title: 'Storm Code',
  description: 'Are you up to the Storm Code? Custom Websites, Web Services and Gaming PCs!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme='dark'>
          <MainHeader />
          {children}
          <MainFooter />
        </MantineProvider>
        <Analytics />
        <SpeedInsights/>
      </body>
    </html>
  );
}
