import * as Styled from '../../styles/dashboard';
import { ISEOProps } from '../../interfaces';
import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import { IBalance } from '../../interfaces';
import DashboardComponent from '../../components/Dashboard';
import Header from '../../components/Dashboard/Header';
import DrawerCustom from '../../components/Drawer';

export default function Dashboard({ title }: ISEOProps) {
  document.title = title;
  const [balance, setBalance] = useState<IBalance>();

  const fetchBalance = async () => {
    const { data } = await api.get('transaction/my-balance');

    setBalance(data);
  };

  useEffect(() => {
    fetchBalance();
  }, []);

  return (
    <DrawerCustom>
      <Styled.Main>
        <Header balance={balance} />
        <DashboardComponent />
      </Styled.Main>
    </DrawerCustom>
  );
}
