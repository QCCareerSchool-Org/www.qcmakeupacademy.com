import { ReactElement, useRef } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { useLocation } from '../hooks/useLocation';
import { usePrice } from '../hooks/usePrice';
import { formatPrice } from '../lib/formatPrice';
import { Spinner } from './Spinner';

type Props = {
  courses: string[];
};

export const PriceCard = ({ courses }: Props): ReactElement => {
  const location = useLocation();
  const price = usePrice(courses, location?.countryCode, location?.provinceCode);
  const radix = 32;
  const startPosition = 2;
  const uniqueId = useRef(Math.random().toString(radix).slice(startPosition));
  const enrollLink = `https://enroll.qcwellnessstudies.com/?${courses.map(c => `c[]=${c}`).join('&')}`;

  return (
    <div className="card shadow text-center price-card">
      <div className="card-body">
        {price
          ? (
            <>
              <Tabs defaultActiveKey="full" id={uniqueId.current}>
                <Tab eventKey="full" title={<small>PAY IN FULL</small>} className="mt-3">
                  <p className="card-text small text-muted mb-0"><del>{price?.currency.symbol}{formatPrice(price?.discountedCost)}</del></p>
                  <p className="card-text price text-dark"><small>{price?.currency.symbol}</small>{formatPrice(price?.plans.full.total)}</p>
                  <p className="card-text"><a className="btn btn-info" href={enrollLink}>ENROLL NOW</a></p>
                  <p className="card-text"><strong><mark>SAVE {price?.currency.symbol}{formatPrice(price?.plans.full.discount)}</mark></strong><br />when you pay in full.</p>
                </Tab>
                <Tab eventKey="part" title={<small>INSTALLMENT PLAN</small>} className="mt-3">
                  <p className="card-text small text-muted mb-0">&nbsp;</p>
                  <p className="card-text price text-dark"><small>{price?.currency.symbol}</small>{formatPrice(price?.plans.part.installmentSize)}<small className="text-muted"> / mo</small></p>
                  <p className="card-text"><a className="btn btn-info" href={enrollLink}>ENROLL NOW</a></p>
                  <p className="card-text"><strong>Deposit of {price?.currency.symbol}{formatPrice(price?.plans.part.deposit)}</strong><br />then {price?.plans.part.installments} monthly payments of {price?.currency.symbol}{formatPrice(price?.plans.part.installmentSize)}.</p>
                </Tab>
              </Tabs>
              <hr />
              Prices are in {price?.currency.name}
            </>
          )
          : <Spinner />
        }
      </div>
    </div>
  );
};
