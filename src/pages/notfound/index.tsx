import { ISEOProps } from '../../interfaces';
import NotFoundSVG from '../../images/not_found.svg';
import * as S from '../../styles/notfound';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/useAuth';

export default function NotFound({ title }: ISEOProps) {
  document.title = title;
  const { isAuthenticated } = useAuth();

  const navigate = useNavigate();

  const handleNavigation = () => {
    if (isAuthenticated) navigate('/dashboard');
    else navigate('/');
  };

  return (
    <S.Main>
      <S.Empty>
        <img src={NotFoundSVG} alt="notFound" />
        <div className="subtitle">Ooops! Página não encontrada. 🙁</div>
      </S.Empty>
      <S.Row>
        <S.Button onClick={handleNavigation}>Voltar ao sistema</S.Button>
      </S.Row>
    </S.Main>
  );
}
