import Big from 'big.js';
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

import { Price } from '../functions';

interface Props {
  price: Price;
}

export const PriceBox: React.FC<Props> = ({ price }) => {
  const [ plan, setPlan ] = useState('installment');
  if (!price) {
    return null;
  }
  return (
    <>
      <Nav as="nav" variant="tabs" activeKey={plan} onSelect={(selectedKey: string) => setPlan(selectedKey)} className="mb-4">
        <Nav.Item>
          <Nav.Link eventKey="installment">Installment Plan</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="full">Pay In Full</Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="text-center" style={{ height: 220 }}>
        {plan === 'full'
          ? (
            <>
              <h6 className="mb-4"><span className="display-4">{price.currency.symbol}{price.deposit.full}</span><br />One Time Payment</h6>
              <p>Save {price.currency.symbol}{price.discount.full}<br />when you pay in full.</p>
              <p className="lead">Total Tuition: <del>{price.currency.symbol}{price.cost}</del> <strong>{price.currency.symbol}{price.deposit.full}</strong></p>
            </>
          ) : (
            <>
              <h6 className="mb-4"><span className="display-4">{price.currency.symbol}{price.installmentSize.part}</span><br />/ month</h6>
              <p>{price.currency.symbol}{price.deposit.part} deposit then<br />{price.installments.part} monthly payments.</p>
              <p className="lead">Total Tuition: {price.currency.symbol}{formatPrice(Big(price.cost).minus(price.discount.part).minus(price.secondaryDiscount))}</p>
            </>
          )
        }
      </div>
    </>
  );
};

function formatPrice(big: Big): string {
  const s = big.toFixed(2);
  if (s.endsWith('.00')) {
    return s.slice(0, -3);
  }
  return s;
}
