import { Rule } from 'antd/lib/form';

const name: Rule[] = [
  {
    required: true,
    message: 'Informe seu E-Mail para continuar!',
  },
  {
    min: 3,
    message: 'Seu nome deve conter pelo menos 3 caracteres!',
  },
];

const email: Rule[] = [
  {
    required: true,
    message: 'Informe seu E-Mail para continuar!',
  },
  {
    type: 'email',
    message: 'E-mail inválido!',
  },
];

const password: Rule[] = [
  {
    required: true,
    message: 'Informe sua Senha para continuar!',
  },
  {
    min: 8,
    message: 'A senha deve conter pelo menos 8 caracteres!',
  },
];

export const rules = {
  name,
  email,
  password,
};
