import fetch from 'isomorphic-unfetch';
import { useEffect, useState } from 'react';

import { getQueryString } from '../lib/querystring';
import type { PriceResult } from '../models/price';

const getPrices = async (courses: string[], countryCode: string, provinceCode: string | null): Promise<PriceResult> => {
  const url = 'https://api.qccareerschool.com/prices?' + getQueryString({ courses, countryCode, provinceCode });
  const response = await fetch(url, {
    headers: { 'X-API-Version': '2' },
  });
  if (!response.ok) {
    throw Error('Unable to fetch price');
  }
  return response.json();
};

export const usePrice = (courses: string[], countryCode?: string, provinceCode?: string | null): PriceResult | undefined => {
  const [ state, dispatch ] = useState<PriceResult>();

  useEffect(() => {
    if (countryCode === undefined || provinceCode === undefined) {
      dispatch(undefined);
    } else {
      getPrices(courses, countryCode, provinceCode).then(p => {
        dispatch(p);
      }).catch(() => { /* empty */ });
    }
  }, [ courses, countryCode, provinceCode ]);

  return state;
};
