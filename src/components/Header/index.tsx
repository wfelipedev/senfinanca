import { useAuth } from '../../context/useAuth';
import * as S from '../../styles/dashboard';

interface GreetingsProps {
  subtitle: string;
}

export default function Greetings({ subtitle }: GreetingsProps) {
  const { user } = useAuth();

  return (
    <S.Greetings>
      Olá, {user.name} 👋
      <br />
      <span>{subtitle}</span>
    </S.Greetings>
  );
}
