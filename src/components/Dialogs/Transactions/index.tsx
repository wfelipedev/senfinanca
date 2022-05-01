import { useCallback, useState, useEffect } from 'react';
import * as S from '../../../styles/transactions';
import {
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  MenuItem,
} from '@mui/material';
import { Form } from 'antd';
import { api } from '../../../services/api';
import { ArrowDownCircle, ArrowUpCircle } from 'react-feather';
import { ITransaction } from '../../../interfaces';
import { priceMask } from '../../../utils/mask';

interface DialogProps {
  transaction?: ITransaction;
  isVisible: boolean;
  closeModal: () => void;
  fetchTransactions: () => Promise<void>;
  success: (msg: string) => void;
  error: (msg: string) => void;
}

const categories = [
  'Moradias',
  'Contas',
  'Educação',
  'Comida',
  'Saúde',
  'Lazer',
  'Mercado',
  'Transporte',
  'Salário',
  'Outro',
];

export default function DialogTransaction({
  transaction,
  isVisible,
  closeModal,
  fetchTransactions,
  success,
  error,
}: DialogProps) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const [transactionType, setTransactionType] = useState<string>('deposit');

  const handleSaveTransaction = useCallback(
    async (fields: any) => {
      setLoading(true);

      const value: number = fields.value.replace('.', '').replace(',', '');

      const entity = {
        ...fields,
        value,
        type: transactionType,
      };

      const { data } = await api.post('transaction', entity);

      success(data.msg);
      setLoading(false);
      form.resetFields();
      setTransactionType('deposit');
      closeModal();
      fetchTransactions();
    },
    [closeModal, fetchTransactions, form, success, transactionType],
  );

  const handleDeleteTransaction = useCallback(async () => {
    const { data } = await api.delete(`/transaction/${transaction?._id}`);

    success(data.msg);
    form.resetFields();
    closeModal();
    fetchTransactions();
  }, [closeModal, fetchTransactions, form, success, transaction?._id]);

  const handleUpdateTransaction = useCallback(
    async (fields: any) => {
      setLoading(true);

      const entity = Object.assign(transaction, {
        ...fields,
        type: transactionType,
      });

      const { data } = await api.patch(
        `/transaction/${transaction?._id}`,
        entity,
      );

      success(data.msg);
      setLoading(false);
      form.resetFields();
      setTransactionType('deposit');
      closeModal();
      fetchTransactions();
    },
    [
      closeModal,
      fetchTransactions,
      form,
      success,
      transaction,
      transactionType,
    ],
  );

  useEffect(() => {
    if (transaction) {
      form.setFieldsValue({
        title: transaction.title,
        type: transaction.type,
        value: transaction.value,
        category: transaction.category,
      });
      setTransactionType(transaction.type);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transaction]);

  return (
    <Dialog maxWidth="sm" fullWidth open={isVisible} onClose={closeModal}>
      <Form
        form={form}
        layout="vertical"
        onFinish={
          transaction?.title ? handleUpdateTransaction : handleSaveTransaction
        }
      >
        <DialogTitle>
          {transaction?.title ? 'Editar ' : 'Novo'} Transações
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Informações da Transação</DialogContentText>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Form.Item name="title">
                <S.TextFieldCustom
                  margin="dense"
                  id="title-id"
                  label="Título"
                  type="text"
                  fullWidth
                  variant="filled"
                  size="small"
                />
              </Form.Item>
            </Grid>
            <Grid item xs={12}>
              <Form.Item name="value">
                <S.TextFieldCustom
                  margin="dense"
                  id="type-id"
                  label="Valor"
                  type="text"
                  variant="filled"
                  fullWidth
                  onChange={() => {
                    const { value } = form.getFieldsValue();
                    form.setFieldsValue({ value: priceMask(value) });
                  }}
                  size="small"
                />
              </Form.Item>
            </Grid>
            <Grid item xs={6}>
              <S.TypeButtom
                isActive={transactionType === 'deposit'}
                activeColor="green"
                onClick={() => {
                  setTransactionType('deposit');
                }}
              >
                <S.Row>
                  <ArrowUpCircle color="#333" size={18} />
                  <h1>Entrada</h1>
                </S.Row>
              </S.TypeButtom>
            </Grid>
            <Grid item xs={6}>
              <S.TypeButtom
                isActive={transactionType === 'withdraw'}
                activeColor="red"
                onClick={() => setTransactionType('withdraw')}
              >
                <S.Row>
                  <ArrowDownCircle color="#333" size={18} />
                  <h1>Saída</h1>
                </S.Row>
              </S.TypeButtom>
            </Grid>
            <Grid item xs={12}>
              <Form.Item name="category">
                <S.TextFieldCustom
                  id="outlined-select-currency"
                  select
                  placeholder="Selecione uma categoria"
                  label="Categoria"
                  name="type"
                  variant="filled"
                  fullWidth
                  size="small"
                >
                  {categories.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </S.TextFieldCustom>
              </Form.Item>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <S.ActionButtons isEdit={!!transaction?.title}>
            {transaction?.title && (
              <S.CustomDeleteLoadingButton
                className="cancel"
                onClick={handleDeleteTransaction}
              >
                Deletar
              </S.CustomDeleteLoadingButton>
            )}

            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <S.CustomCancelLoadingButton
                className="cancel"
                onClick={closeModal}
              >
                Cancelar
              </S.CustomCancelLoadingButton>

              <Form.Item shouldUpdate>
                <S.CustomLoadingButton
                  className="save"
                  type="submit"
                  loading={loading}
                  loadingIndicator={
                    <CircularProgress style={{ color: '#fff' }} size={16} />
                  }
                >
                  {transaction?.title ? 'Editar' : 'Cadastrar'}
                </S.CustomLoadingButton>
              </Form.Item>
            </div>
          </S.ActionButtons>
        </DialogActions>
      </Form>
    </Dialog>
  );
}