import React, { useContext } from 'react';

import { getTelephoneNumber } from '../functions';
import { CountryCodeStateContext } from '../providers/country-code';

interface Props {
  className?: string;
}

export const SecondLevelNav: React.FC<Props> = ({ className }) => {
  const countryCode = useContext(CountryCodeStateContext);
  const telephoneNumber = getTelephoneNumber(countryCode);
  return (
    <div className={className}>{telephoneNumber}</div>
  );
};
