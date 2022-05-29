import { useEffect, useState } from 'react';
import * as Styled from '../../../styles/dashboard';
import { priceMaskNumber } from '../../../utils/mask';

interface BalanceProps {
  icon: any;
  value?: number;
  type?: string;
  subtitle: string;
}

const BalanceTile = ({ icon, value, type, subtitle }: BalanceProps) => {
  const [isGreater, setIsGreater] = useState<boolean>(false);

  useEffect(() => {
    if (value) {
      if (value >= 0) setIsGreater(true);
      else setIsGreater(false);
    }
  }, [value]);

  return (
    <Styled.BalanceTile>
      <div>
        <div className="row">
          <Styled.BalanceIcon>{icon}</Styled.BalanceIcon>
          <Styled.BalanceValue
            isBalance={type === 'balance'}
            isGreater={isGreater}
          >
            R$ {priceMaskNumber(value)}
            <br />
            <div style={{ fontSize: '.8rem', color: '#c9c9c9', marginTop: '.3rem' }}>{subtitle}</div>
          </Styled.BalanceValue>
        </div>
      </div>
    </Styled.BalanceTile>
  );
};

export default BalanceTile;
