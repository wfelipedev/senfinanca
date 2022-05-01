/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useCallback, useState } from 'react';
import { Form } from 'antd';
import { useNavigate } from 'react-router-dom';

import * as S from '../../styles/signin';
import { useAuth } from '../../context/useAuth';
import { BarChart2 } from 'react-feather';
import { CircularProgress } from '@mui/material';

export default function SignIn() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const { signIn } = useAuth();

  const handleSignin = useCallback(
    async (fields: any) => {
      setLoading(true);
      await signIn(fields);
      setLoading(false);
      form.resetFields();
    },
    [form],
  );

  return (
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
            <Form form={form} layout="vertical" onFinish={handleSignin}>
              <Form.Item name="email">
                <S.CustomTextField
                  id="textfield-username"
                  margin="dense"
                  label="Email"
                  variant="filled"
                  fullWidth
                />
              </Form.Item>
              <Form.Item name="password">
                <S.CustomTextField
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
                  Entrar
                </S.CustomLoadingButton>
              </Form.Item>
            </Form>
          </S.CustomGrid>
          <section>
            <a onClick={() => navigate('/signup')}>
              <h3
                style={{
                  color: '#333',
                }}
              >
                Cadastre-se
              </h3>
            </a>
          </section>
        </div>
      </S.Content>
    </S.Layout>
  );
}
