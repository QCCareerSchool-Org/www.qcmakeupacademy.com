import React, { useContext } from 'react';

import { getTelephoneNumber } from '../functions';
import { LocationStateContext } from '../providers/location';

interface Props {
  className?: string;
}

export const SecondLevelNav: React.FC<Props> = ({ className }) => {
  const location = useContext(LocationStateContext);
  const telephoneNumber = getTelephoneNumber(location.countryCode);
  return (
    <div className={className}>{telephoneNumber}</div>
  );
};
