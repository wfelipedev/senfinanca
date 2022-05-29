import { useCallback, useState, useEffect } from 'react';
import * as Styled from '../../../styles/transactions';
import {
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  InputAdornment,
  MenuItem,
} from '@mui/material';
import { Form } from 'antd';
import { api } from '../../../services/api';
import { ArrowDownCircle, ArrowUpCircle, X } from 'react-feather';
import { ITransaction } from '../../../interfaces';
import { priceMask, priceMaskNumber } from '../../../utils/mask';
import { checkIfErrorIsProvidedFromDtoOrArray } from '../../../utils/checkError';
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
      try {
        let title = fields.title;
        if (fields.title === '' || fields.title === undefined)
          title = 'Sem Título';

        const value: number = fields.value.replace('.', '').replace(',', '');

        const entity = {
          ...fields,
          title,
          value,
          type: transactionType,
        };

        const { data } = await api.post('transaction', entity);

        success(data.message);
        form.resetFields();
        setTransactionType('deposit');
        closeModal();
        fetchTransactions();
      } catch (err: any) {
        error(checkIfErrorIsProvidedFromDtoOrArray(err));
      } finally {
        setLoading(false);
      }
    },
    [closeModal, error, fetchTransactions, form, success, transactionType],
  );

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

      success(data.message);
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

  /*   const handleDeleteTransaction = useCallback(async () => {
    const { data } = await api.delete(`/transaction/${transaction?._id}`);

    success(data.message);
    form.resetFields();
    closeModal();
    fetchTransactions();
  }, [closeModal, fetchTransactions, form, success, transaction?._id]); */

  useEffect(() => {
    if (transaction) {
      form.setFieldsValue({
        title: transaction.title,
        type: transaction.type,
        value: priceMaskNumber(transaction.value),
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
        onFinish={transaction ? handleUpdateTransaction : handleSaveTransaction}
      >
        <DialogTitle>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            {transaction ? 'Editar ' : 'Nova'} Transação
            <Styled.CloseIcon onClick={closeModal}>
              <X />
            </Styled.CloseIcon>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Informações da Transação</DialogContentText>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Form.Item name="title">
                <Styled.TextFieldCustom
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
                <Styled.TextFieldCustom
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
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">R$</InputAdornment>
                    ),
                  }}
                />
              </Form.Item>
            </Grid>
            <Grid item xs={6}>
              <Styled.TypeButtom
                isActive={transactionType === 'deposit'}
                activeColor="green"
                onClick={() => {
                  setTransactionType('deposit');
                }}
              >
                <Styled.Row>
                  <ArrowUpCircle color="#333" size={18} />
                  <h1>Entrada</h1>
                </Styled.Row>
              </Styled.TypeButtom>
            </Grid>
            <Grid item xs={6}>
              <Styled.TypeButtom
                isActive={transactionType === 'withdraw'}
                activeColor="red"
                onClick={() => setTransactionType('withdraw')}
              >
                <Styled.Row>
                  <ArrowDownCircle color="#333" size={18} />
                  <h1>Saída</h1>
                </Styled.Row>
              </Styled.TypeButtom>
            </Grid>
            <Grid item xs={12}>
              <Form.Item name="category">
                <Styled.TextFieldCustom
                  id="outlined-select-currency"
                  select
                  placeholder="Selecione uma categoria"
                  label="Categoria"
                  name="type"
                  variant="filled"
                  fullWidth
                  size="small"
                  value={categories[0]}
                >
                  {categories.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Styled.TextFieldCustom>
              </Form.Item>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Styled.ActionButtons isEdit={!!transaction}>
            <Styled.Row>
              <Styled.CustomCancelLoadingButton
                className="cancel"
                onClick={closeModal}
              >
                Cancelar
              </Styled.CustomCancelLoadingButton>

              <Form.Item shouldUpdate>
                <Styled.CustomLoadingButton
                  className="save"
                  type="submit"
                  loading={loading}
                  loadingIndicator={
                    <CircularProgress className="progress" size={16} />
                  }
                >
                  {transaction ? 'Editar' : 'Cadastrar'}
                </Styled.CustomLoadingButton>
              </Form.Item>
            </Styled.Row>
          </Styled.ActionButtons>
        </DialogActions>
      </Form>
    </Dialog>
  );
}
