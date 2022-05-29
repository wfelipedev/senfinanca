import { ArrowDown, ArrowUp, DollarSign, MoreHorizontal } from 'react-feather';
import { useAuth } from '../../../context/useAuth';
import { IBalance } from '../../../interfaces';
import * as Styled from '../../../styles/dashboard';
import BalanceTile from './balance';

interface HeaderProps {
  balance?: IBalance;
}

const Header = ({ balance }: HeaderProps) => {
  const { user } = useAuth();

  return (
    <Styled.Header>
      <Styled.BalanceContainer>
        <BalanceTile
          icon={<ArrowUp size={16} />}
          value={balance?.deposit}
          subtitle={'Entradas'}
        />
        <BalanceTile
          icon={<ArrowDown size={16} />}
          value={balance?.withdraw}
          subtitle={'Saídas'}
        />
        <BalanceTile
          icon={<DollarSign size={16} />}
          value={balance?.balance}
          type="balance"
          subtitle={'Saldo'}
        />
      </Styled.BalanceContainer>

      <Styled.UserContainer>
        <MoreHorizontal size={20} />
        <Styled.UserAvatar>{user.name.charAt(0)}</Styled.UserAvatar>
      </Styled.UserContainer>
    </Styled.Header>
  );
};

export default Header;
