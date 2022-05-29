import { Divider } from '@mui/material';
import { useEffect, useState } from 'react';
import { Code } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import { ITransaction } from '../../interfaces';
import { api } from '../../services/api';
import * as Styled from '../../styles/dashboard';
import TransactionTile from './TransactionTile';

const DashboardComponent = () => {
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
    <Styled.DashboardContainer>
      <Styled.DashboardMainTileContainer>
        <Styled.DashboardMainTile background="#333">
          <Styled.MainTileHeader>
            <Styled.MainTileTitle isTitle style={{ color: '#fff' }}>
              Conta
            </Styled.MainTileTitle>
            <Styled.MainTileTitle style={{ color: '#fff', fontSize: '.8rem' }}>
              Maio 2022{' '}
              <Code size={14} style={{ transform: 'rotate(90deg)' }} />
            </Styled.MainTileTitle>
          </Styled.MainTileHeader>
          <div style={{ padding: '0 1rem' }}>
            <Divider color="#606060" />
          </div>
        </Styled.DashboardMainTile>
        <Styled.DashboardMainTile hasBorder>
          <Styled.MainTileHeader>
            <Styled.MainTileTitle isTitle>Transações</Styled.MainTileTitle>
            <Styled.MainTileTitle onClick={() => navigate('/transactions')}>
              ... mais
            </Styled.MainTileTitle>
          </Styled.MainTileHeader>
          <div style={{ padding: '0 1rem' }}>
            <Divider />
            {transactions &&
              transactions.map((item) => (
                <TransactionTile key={item.createdAt} transaction={item} />
              ))}
          </div>
        </Styled.DashboardMainTile>
      </Styled.DashboardMainTileContainer>
    </Styled.DashboardContainer>
  );
};

export default DashboardComponent;
