import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

// better to keep these separate, rather than combining in an array or object
export const CountryCodeStateContext = React.createContext<string | undefined>(undefined);
export const CountryCodeDispatchContext = React.createContext<(countryCode: string) => void>(() => { /* */ });

export const CountryCodeProvider: React.FC = ({ children }) => {
  const [ countryCode, setCountryCode ] = useState<string>();

  useEffect(() => {
    (async () => {
      const response = await axios.get('https://api.qccareerschool.com/geoLocation/ip');
      setCountryCode(response.data.countryCode);
    })();
  }, []);

  return (
    <CountryCodeStateContext.Provider value={countryCode}>
      <CountryCodeDispatchContext.Provider value={setCountryCode}>
      {children}
      </CountryCodeDispatchContext.Provider>
    </CountryCodeStateContext.Provider>
  );
};

CountryCodeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
