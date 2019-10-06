import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import './index.scss';

export const ScreenWidthContext = React.createContext<number>(0);
export const ScrollPositionContext = React.createContext<number>(0);

export const Index: React.FC = ({ children }) => {
  const [ screenWidth, setScreenWidth ] = useState<number>(0);
  const [ scrollPosition, setScrollPosition ] = useState<number>(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    setScrollPosition(window.scrollY);
    const handleResize = () => setScreenWidth(window.innerWidth);
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ScreenWidthContext.Provider value={screenWidth}>
      <ScrollPositionContext.Provider value={scrollPosition}>
        {children}
      </ScrollPositionContext.Provider>
    </ScreenWidthContext.Provider>
  );
};
