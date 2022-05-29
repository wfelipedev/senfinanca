import { format } from 'date-fns';
import { useLayoutEffect, useState } from 'react';
import { ITransaction } from '../../../interfaces';
import * as Styled from '../../../styles/dashboard';
import { priceMaskNumber } from '../../../utils/mask';

interface TransactionTileProps {
  transaction: ITransaction;
}

const TransactionTile = ({ transaction }: TransactionTileProps) => {
  const [color, setColor] = useState<string>('');

  const handleRandomColor = (): string => {
    const color = Math.floor(Math.random() * 5);

    switch (color) {
      case 1:
        setColor('#bfc8d7');
        break;
      case 2:
        setColor('#e3e2b4');
        break;
      case 3:
        setColor('#a2b59f');
        break;
      case 4:
        setColor('#d18063');
        break;
    }

    return '';
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
        {`R$ ${priceMaskNumber(transaction.value)}`}
      </Styled.TransactionValue>
    </Styled.TransactionTile>
  );
};

export default TransactionTile;
