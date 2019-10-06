/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from 'react';

import { ScreenWidthProvider } from './src/providers/screen-width';
import { ScrollPositionProvider } from './src/providers/scroll-position';
import { CountryCodeProvider } from './src/providers/country-code';

export const wrapRootElement = ({ element }) => (
  <ScreenWidthProvider>
    <ScrollPositionProvider>
      <CountryCodeProvider>
        {element}
      </CountryCodeProvider>
    </ScrollPositionProvider>
  </ScreenWidthProvider>
);

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}

