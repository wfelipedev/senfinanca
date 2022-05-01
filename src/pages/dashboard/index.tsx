import DrawerCustom from '../../components/Drawer';
import * as S from '../../styles/dashboard';
import { ISEOProps } from '../../interfaces';
import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import { IBalance } from '../../interfaces';
import { ArrowDownCircle, ArrowUpCircle, DollarSign } from 'react-feather';
import Greetings from '../../components/Header';

export default function Dashboard({ title }: ISEOProps) {
  document.title = title;
  const [balance, setBalance] = useState<IBalance>();

  const fetchTransactions = async () => {
    const { data } = await api.get('transaction/my-balance');

    console.log(data);

    setBalance(data);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <DrawerCustom>
      <S.Main>
        <Greetings subtitle="Bem-vindo(a) de volta!" />
        <S.Grades>
          <h4 className="title">Seu Balanço</h4>
          {balance && (
            <S.Row>
              <S.BalanceTile>
                <div className="row">
                  <ArrowUpCircle color="#33cc95" />
                  <h1>
                    {/* R$ {priceMask(balance?.deposit)} */}
                    R$ {(balance?.deposit / 100).toFixed(2).replace('.', ',')}
                  </h1>
                </div>
              </S.BalanceTile>
              <S.BalanceTile>
                <div className="row">
                  <ArrowDownCircle color="#e52e4d" />
                  <h1>
                    R$ {(balance?.withdraw / 100).toFixed(2).replace('.', ',')}
                  </h1>
                </div>
              </S.BalanceTile>
              <S.BalanceTile>
                <S.Balance greater={balance?.balance > 0}>
                  <div className="row">
                    <DollarSign />
                    <h1>
                      R$ {(balance?.balance / 100).toFixed(2).replace('.', ',')}
                    </h1>
                  </div>
                </S.Balance>
              </S.BalanceTile>
            </S.Row>
          )}
        </S.Grades>
      </S.Main>
    </DrawerCustom>
  );
}
