import { Rule } from 'antd/lib/form';

const title: Rule[] = [
  {
    required: true,
    message: 'Informe o título da transação!',
  },
  {
    min: 3,
    max: 50,
    message: 'O título deve conter entre 3 e 50 caracteres!',
  },
];

const value: Rule[] = [
  {
    required: true,
    message: 'Informe o valor da transação',
  },
  () => ({
    validator(_, value: number) {
      if (value === 0)
        return Promise.reject(new Error('O valor deve ser maior que 0!'));
    },
  }),
];

const category: Rule[] = [
  {
    required: true,
    message: 'Selecione uma categoria!',
  },
];

export const rules = {
  title,
  value,
  category,
};
