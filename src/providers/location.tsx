import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

interface Location {
  countryCode: string;
  provinceCode: string | null;
}

const defaultLocation = { countryCode: 'US', provinceCode: 'MD' };

// better to keep these separate, rather than combining in an array or object
export const LocationStateContext = React.createContext<Location>(defaultLocation);
export const LocationDispatchContext = React.createContext<(location: Location) => void>(() => { /* */ });

export const LocationProvider: React.FC = ({ children }) => {
  const [ location, setLocation ] = useState<Location>(defaultLocation);

  useEffect(() => {
    (async () => {
      const response = await axios.get('https://api.qccareerschool.com/geoLocation/ip');
      console.log(response.data);
      setLocation({ countryCode: response.data.countryCode, provinceCode: response.data.provinceCode });
    })();
  }, []);

  return (
    <LocationStateContext.Provider value={location}>
      <LocationDispatchContext.Provider value={setLocation}>
        {children}
      </LocationDispatchContext.Provider>
    </LocationStateContext.Provider>
  );
};

LocationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
