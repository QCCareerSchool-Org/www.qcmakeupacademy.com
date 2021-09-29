import { ReactElement, ReactNode } from 'react';

import { Footer } from './Footer';
import { Header } from './Header';

type Props = {
  noHero?: boolean;
  children: ReactNode;
};

export const DefaultLayout = ({ noHero, children }: Props): ReactElement => (
  <>
    <div className="d-flex flex-column vh-100">
      <Header noHero={noHero} className="flex-shrink-0 fixed-top" />
      <main className="flex-shrink-0">
        {children}
      </main>
      <Footer className="mt-auto" />
    </div>
  </>
);
