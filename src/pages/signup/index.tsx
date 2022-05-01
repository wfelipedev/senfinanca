/* eslint-disable jsx-a11y/anchor-is-valid */
import { useCallback, useState } from 'react';
import { Form } from 'antd';
import { useNavigate } from 'react-router-dom';

import * as S from '../../styles/signin';

import { api } from '../../services/api';
import { BarChart2 } from 'react-feather';
import { CircularProgress } from '@mui/material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { rules } from '../../utils/rules/Signup';
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

  const success = (msg: string) => {
    toast.success(msg, {
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
        const { data } = await api.post('auth/signup', fields);

        success(data.message);
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
            <h1>senfinance</h1>
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
                <Form.Item name="name" rules={rules.name}>
                  <S.TextFieldCustom
                    id="textfield-name"
                    margin="dense"
                    label="Seu Nome"
                    variant="filled"
                    fullWidth
                  />
                </Form.Item>
                <Form.Item name="email" rules={rules.email}>
                  <S.TextFieldCustom
                    id="textfield-email"
                    margin="dense"
                    label="E-Mail"
                    variant="filled"
                    fullWidth
                  />
                </Form.Item>
                <Form.Item name="password" rules={rules.password}>
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
                      <CircularProgress className="progress" size={16} />
                    }
                  >
                    Cadastrar-se
                  </S.CustomLoadingButton>
                </Form.Item>
              </Form>
            </S.CustomGrid>
            <section>
              <a onClick={() => navigate('/')}>
                <h3
                  style={{
                    color: '#333',
                  }}
                >
                  Voltar para Sign in
                </h3>
              </a>
            </section>
          </div>
        </S.Content>
      </S.Layout>
    </>
  );
}
