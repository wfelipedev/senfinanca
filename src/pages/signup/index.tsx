import { useCallback, useState } from 'react';
import { Form } from 'antd';
import { useNavigate } from 'react-router-dom';

import * as S from '../../styles/signin';

import { api } from '../../services/api';
import { BarChart2 } from 'react-feather';
import { CircularProgress } from '@mui/material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { checkIfErrorIsProvidedFromDtoOrArray } from '../../utils/checkError';

export default function SignUp() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const error = (msg: string) => {
    toast.error(msg, {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  };

  const handleSignup = useCallback(
    async (fields: any) => {
      setLoading(true);
      try {
        await api.post('auth/signup', fields);

        navigate('/');
      } catch (err: any) {
        error(checkIfErrorIsProvidedFromDtoOrArray(err));
        // error(err);
      } finally {
        setLoading(false);
      }
    },
    [navigate],
  );

  return (
    <>
      <S.Layout>
        <S.Banner>
          <S.Row>
            <BarChart2 color="#fff" />
            <h1 style={{ color: '#fff' }}>senfinance</h1>
          </S.Row>
        </S.Banner>
        <S.Content>
          <div>
            <S.CustomGrid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Form form={form} layout="vertical" onFinish={handleSignup}>
                <S.Title>Criando sua conta</S.Title>
                <Form.Item name="name">
                  <S.TextFieldCustom
                    id="textfield-name"
                    margin="dense"
                    label="Seu Nome"
                    variant="filled"
                    fullWidth
                  />
                </Form.Item>
                <Form.Item name="email">
                  <S.TextFieldCustom
                    id="textfield-email"
                    margin="dense"
                    label="E-Mail"
                    variant="filled"
                    fullWidth
                  />
                </Form.Item>
                <Form.Item name="password">
                  <S.TextFieldCustom
                    id="textfield-password"
                    margin="dense"
                    label="Senha"
                    variant="filled"
                    fullWidth
                    type="password"
                  />
                </Form.Item>
                <Form.Item shouldUpdate>
                  <S.CustomLoadingButton
                    loading={loading}
                    type="submit"
                    loadingIndicator={
                      <CircularProgress style={{ color: '#fff' }} size={16} />
                    }
                  >
                    Cadastrar-se
                  </S.CustomLoadingButton>
                </Form.Item>
              </Form>
            </S.CustomGrid>
          </div>
        </S.Content>
      </S.Layout>
    </>
  );
}
