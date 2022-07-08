/* eslint-disable jsx-a11y/anchor-is-valid */
import { useCallback, useState } from 'react';
import { Form } from 'antd';
import { useNavigate } from 'react-router-dom';
import { BarChart2 } from 'react-feather';
import { CircularProgress, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import { useAuth } from '../../context/useAuth';
import { rules } from '../../utils/rules/Signin';
import { checkErrorOrigin } from '../../utils/checkError';
import { error } from '../../utils/toasts';
import * as Styled from './styles';

const SignInComponent = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const { isAuthenticated, signIn } = useAuth();

  if (isAuthenticated) {
    navigate('/dashboard');
  }

  const handleSignin = useCallback(
    async (fields: any) => {
      setLoading(true);
      try {
        await signIn(fields);
        form.resetFields();
      } catch (err: any) {
        error(checkErrorOrigin(err));
      } finally {
        setLoading(false);
      }
    },
    [form, signIn],
  );

  return (
    <Styled.Container>
      <Styled.Logo>
        <Styled.Row>
          <BarChart2 color="#fff" />
          <h1 className="text">senfinance</h1>
        </Styled.Row>
      </Styled.Logo>
      <Styled.Content>
        <div>
          <Styled.Form
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Form form={form} layout="vertical" onFinish={handleSignin}>
              <Form.Item className="form" name="email" rules={rules.email}>
                <TextField
                  id="textfield-username"
                  margin="dense"
                  label="Email"
                  variant="filled"
                  fullWidth
                />
              </Form.Item>
              <Form.Item
                className="form"
                name="password"
                rules={rules.password}
              >
                <TextField
                  id="textfield-password"
                  margin="dense"
                  label="Senha"
                  variant="filled"
                  fullWidth
                  type="password"
                />
              </Form.Item>
              <Form.Item shouldUpdate>
                <LoadingButton
                  className="button"
                  loading={loading}
                  type="submit"
                  loadingIndicator={
                    <CircularProgress className="progress" size={16} />
                  }
                >
                  Entrar
                </LoadingButton>
              </Form.Item>
            </Form>
          </Styled.Form>
          <section>
            <a onClick={() => navigate('/signup')}>
              <h3 className="text">Cadastre-se</h3>
            </a>
          </section>
        </div>
      </Styled.Content>
    </Styled.Container>
  );
};

export default SignInComponent;
