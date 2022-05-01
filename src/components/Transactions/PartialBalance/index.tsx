import { ArrowDownCircle, ArrowUpCircle } from 'react-feather';
import { priceMaskNumber } from '../../../utils/mask';
import * as S from '../../../styles/transactions/partial';

interface PartialProps {
  deposit: number;
  withdraw: number;
}

export default function PartialBalance({ deposit, withdraw }: PartialProps) {
  return (
    <S.Container>
      <S.Row>
        <ArrowDownCircle size={16} color="#33cc95" />
        <h4>R$ {priceMaskNumber(deposit)}</h4>
      </S.Row>
      <S.Row>
        <ArrowUpCircle size={16} color="#e52e4d" />
        <h4>R$ -{priceMaskNumber(withdraw)}</h4>
      </S.Row>
    </S.Container>
  );
}
