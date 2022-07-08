/* eslint-disable jsx-a11y/anchor-is-valid */
import { useCallback, useState } from 'react';
import { Form } from 'antd';
import { useNavigate } from 'react-router-dom';
import { CircularProgress, TextField } from '@mui/material';
import { BarChart2 } from 'react-feather';
import { LoadingButton } from '@mui/lab';

import { api } from '../../services/api';
import { rules } from '../../utils/rules/Signup';
import { checkErrorOrigin } from '../../utils/checkError';
import { success, error } from '../../utils/toasts';
import * as Styled from './styles';

const SignUpComponent = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignup = useCallback(
    async (fields: any) => {
      try {
        setLoading(true);
        const { data } = await api.post('auth/signup', fields);

        success(data.message);
        navigate('/');
      } catch (err: any) {
        error(checkErrorOrigin(err));
      } finally {
        setLoading(false);
      }
    },
    [navigate],
  );

  return (
    <>
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
              <Form form={form} layout="vertical" onFinish={handleSignup}>
                <Styled.Title>Criando sua conta</Styled.Title>
                <Form.Item className="form" name="name" rules={rules.name}>
                  <TextField
                    id="textfield-name"
                    margin="dense"
                    label="Seu Nome"
                    variant="filled"
                    fullWidth
                  />
                </Form.Item>
                <Form.Item className="form" name="email" rules={rules.email}>
                  <TextField
                    id="textfield-email"
                    margin="dense"
                    label="E-Mail"
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
                    Cadastrar-se
                  </LoadingButton>
                </Form.Item>
              </Form>
            </Styled.Form>
            <section>
              <a onClick={() => navigate('/')}>
                <h3 className="text">Voltar para Sign in</h3>
              </a>
            </section>
          </div>
        </Styled.Content>
      </Styled.Container>
    </>
  );
};

export default SignUpComponent;
