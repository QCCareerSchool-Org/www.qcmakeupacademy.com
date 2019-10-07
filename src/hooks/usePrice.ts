import axios from 'axios';
import { useEffect, useState } from 'react';

import { Price } from '../functions';

export const usePrice = (courses: Array<string | string[]>, countryCode: string, provinceCode: string | null) => {
  const [ price, setPrice ] = useState<Price[]>([]);
  console.log(countryCode, provinceCode, 'usePrice');
  useEffect(() => {
    (async () => {
      const promises = courses.map(c => {
        return axios.get<Price>('https://api.qccareerschool.com/prices', {
          params: { courses: Array.isArray(c) ? c : [ c ], countryCode, provinceCode },
        });
      });
      const results = await Promise.all(promises);
      setPrice(results.map(r => r.data));
    })();
  }, [ countryCode, provinceCode ]);
  return price;
};
