import '../styles/global.scss';

import type { AppProps } from 'next/app';
import { ReactElement } from 'react';

import { LocationProvider } from '../providers/LocationProvider';
import { ScreenWidthProvider } from '../providers/ScreenWidthProvider';
import { ScrollPositionProvider } from '../providers/ScrollPositionProvider';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <LocationProvider>
      <ScreenWidthProvider>
        <ScrollPositionProvider>
          <Component {...pageProps} />
        </ScrollPositionProvider>
      </ScreenWidthProvider>
    </LocationProvider>
  );
}

export default MyApp;
