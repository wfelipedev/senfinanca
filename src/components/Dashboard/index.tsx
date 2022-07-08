import { Divider } from '@mui/material';
import { useEffect, useState } from 'react';
import { Code } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import { IBalance, ITransaction } from '../../interfaces';
import { api } from '../../services/api';
import DrawerCustom from '../Drawer';
import Header from './Header';
import * as Styled from './styles';
import TransactionTile from './TransactionTile';

interface IDashboardComponentProps {
  balance?: IBalance;
}

const DashboardComponent = ({ balance }: IDashboardComponentProps) => {
  const navigate = useNavigate();

  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  const fetchMyTransactions = async () => {
    const { data } = await api.get('transaction/my-transactions');

    setTransactions(data);
  };

  useEffect(() => {
    fetchMyTransactions();
  }, []);

  return (
    <DrawerCustom>
      <Styled.Main>
        <Header balance={balance} />
        <Styled.Container>
          <Styled.Tile>
            <Styled.Box background="#333">
              <Styled.BoxHeader>
                <Styled.Title isTitle style={{ color: '#fff' }}>
                  Conta
                </Styled.Title>
                <Styled.Title style={{ color: '#fff', fontSize: '.8rem' }}>
                  Maio 2022{' '}
                  <Code size={14} style={{ transform: 'rotate(90deg)' }} />
                </Styled.Title>
              </Styled.BoxHeader>
              <div style={{ padding: '0 1rem' }}>
                <Divider color="#606060" />
              </div>
            </Styled.Box>
            <Styled.Box hasBorder>
              <Styled.BoxHeader>
                <Styled.Title isTitle>Transações</Styled.Title>
                <Styled.Title onClick={() => navigate('/transactions')}>
                  ... mais
                </Styled.Title>
              </Styled.BoxHeader>
              <div style={{ padding: '0 1rem' }}>
                <Divider />
                {transactions &&
                  transactions.map((item) => (
                    <TransactionTile key={item.createdAt} transaction={item} />
                  ))}
              </div>
            </Styled.Box>
          </Styled.Tile>
        </Styled.Container>
      </Styled.Main>
    </DrawerCustom>
  );
};

export default DashboardComponent;
