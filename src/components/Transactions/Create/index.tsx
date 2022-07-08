import { useCallback, useState, useEffect } from 'react';
import {
  CircularProgress,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  InputAdornment,
  MenuItem,
  TextField,
} from '@mui/material';
import { Form } from 'antd';
import { ArrowDownCircle, ArrowUpCircle, X } from 'react-feather';
import { api } from '../../../services/api';
import { ITransaction } from '../../../interfaces';
import { priceMask, priceMaskNumber } from '../../../utils/mask';
import { success, error } from '../../../utils/toasts';
import { checkErrorOrigin } from '../../../utils/checkError';
import { categories } from '../../../utils/constants';
import * as Styled from './styles';

interface IDialogProps {
  transaction?: ITransaction;
  isVisible: boolean;
  closeModal: () => void;
  fetchTransactions: () => Promise<void>;
}

export default function DialogTransaction({
  transaction,
  isVisible,
  closeModal,
  fetchTransactions,
}: IDialogProps) {
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

        const value = fields.value.replace('.', '').replace(',', '');

        const entity = {
          ...fields,
          title,
          value: +value,
          type: transactionType,
        };

        const { data } = await api.post('transaction', entity);

        success(data.message);
        form.resetFields();
        setTransactionType('deposit');
        closeModal();
        fetchTransactions();
      } catch (err: any) {
        error(checkErrorOrigin(err));
      } finally {
        setLoading(false);
      }
    },
    [closeModal, fetchTransactions, form, transactionType],
  );

  const handleUpdateTransaction = useCallback(
    async (fields: any) => {
      setLoading(true);

      let entity;
      if (transaction) {
        const value = fields.value.replace('.', '').replace(',', '');
        entity = Object.assign(transaction, {
          ...fields,
          value: +value,
          type: transactionType,
        });
      }

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
    [closeModal, fetchTransactions, form, transaction, transactionType],
  );

  useEffect(() => {
    if (transaction) {
      form.setFieldsValue({
        title: transaction.title,
        type: transaction.type,
        value: priceMaskNumber(+transaction.value),
        category: transaction.category,
      });
      setTransactionType(transaction.type);
    }
  }, [form, transaction]);

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
            {transaction?.title ? 'Editar ' : 'Nova'} Transação
            <Styled.CloseIcon onClick={closeModal}>
              <X />
            </Styled.CloseIcon>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Informações da Transação</DialogContentText>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Form.Item name="title" style={{ marginBottom: '0' }}>
                <TextField
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
              <Form.Item name="value" style={{ marginBottom: '0' }}>
                <TextField
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
                <TextField
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
                </TextField>
              </Form.Item>
            </Grid>
          </Grid>
          <Styled.ActionButtons isEdit={!!transaction}>
            <Styled.Row>
              <Styled.CustomCancelLoadingButton
                className="cancel"
                disabled={loading}
                onClick={closeModal}
              >
                Cancelar
              </Styled.CustomCancelLoadingButton>

              <Form.Item shouldUpdate className="form">
                <Styled.CustomLoadingButton
                  className="save"
                  type="submit"
                  loading={loading}
                  disabled={loading}
                  loadingIndicator={
                    <CircularProgress className="progress" size={16} />
                  }
                >
                  {transaction ? 'Editar' : 'Cadastrar'}
                </Styled.CustomLoadingButton>
              </Form.Item>
            </Styled.Row>
          </Styled.ActionButtons>
        </DialogContent>
      </Form>
    </Dialog>
  );
}
