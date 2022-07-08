import { useLayoutEffect, useState } from 'react';
import { format } from 'date-fns';
import { ITransaction } from '../../../interfaces';
import { priceMaskNumber } from '../../../utils/mask';
import { randomColor } from '../../../utils/randomColor';
import * as Styled from '../styles';

interface TransactionTileProps {
  transaction: ITransaction;
}

const TransactionTile = ({ transaction }: TransactionTileProps) => {
  const [color, setColor] = useState<string>('');

  const handleRandomColor = () => {
    const color = randomColor();
    setColor(color);
  };

  useLayoutEffect(() => {
    handleRandomColor();
  }, [color]);

  return (
    <Styled.TransactionTile key={transaction.createdAt}>
      <div className="row">
        <Styled.TransactionAvatar color={color}>
          {transaction.category.charAt(0)}
        </Styled.TransactionAvatar>
        <div className="column">
          <Styled.TransactionTitle>{transaction.title}</Styled.TransactionTitle>
          <Styled.TransactionCreated>
            {format(new Date(transaction.createdAt), "dd/MM/yyyy', às ' HH:mm")}
          </Styled.TransactionCreated>
        </div>
      </div>

      <Styled.TransactionValue isGreater={transaction.type === 'deposit'}>
        {transaction.type === 'withdraw' && '- '}
        {`R$ ${priceMaskNumber(+transaction.value)}`}
      </Styled.TransactionValue>
    </Styled.TransactionTile>
  );
};

export default TransactionTile;
