/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from 'react';

import { ScreenWidthProvider } from './src/providers/screen-width';
import { ScrollPositionProvider } from './src/providers/scroll-position';
import { LocationProvider } from './src/providers/location';

export const wrapRootElement = ({ element }) => (
  <ScreenWidthProvider>
    <ScrollPositionProvider>
      <LocationProvider>
        {element}
      </LocationProvider>
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

