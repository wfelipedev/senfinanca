import { useCallback, useState } from 'react';
import { Form } from 'antd';
import { useNavigate } from 'react-router-dom';

import * as S from '../../styles/signin';

import { api } from '../../services/api';
import { BarChart2 } from 'react-feather';

export default function SignUp() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignup = useCallback(
    async (fields: any) => {
      setLoading(true);

      const accessToken = localStorage.getItem('@schoolsys:accessToken');
      api.defaults.headers.Authorization = `Bearer ${accessToken}`;

      await api.post('auth/signup', fields);

      setLoading(false);

      navigate('/signin');
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <Form form={form} layout="vertical" onFinish={handleSignup}>
              <S.Title>Sua Conta</S.Title>
              <Form.Item name="name">
                <S.TextFieldCustom
                  id="textfield-email"
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
                <S.CustomLoadingButton loading={loading} type="submit">
                  Cadastrar-se
                </S.CustomLoadingButton>
              </Form.Item>
            </Form>
          </S.CustomGrid>
        </div>
      </S.Content>
    </S.Layout>
  );
}
