import { useCallback, useState } from 'react';
import {
  CircularProgress,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { X } from 'react-feather';

import { ITransaction } from '../../../interfaces';
import { api } from '../../../services/api';
import { error, success } from '../../../utils/toasts';
import { checkErrorOrigin } from '../../../utils/checkError';
import * as Styled from './styles';

interface IDialogProps {
  transaction?: ITransaction;
  isVisible: boolean;
  closeModal: () => void;
  fetchTransactions: () => Promise<void>;
}

const DialogDeleteTransaction = ({
  transaction,
  isVisible,
  closeModal,
  fetchTransactions,
}: IDialogProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleDeleteTransaction = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await api.delete(`/transaction/${transaction?._id}`);
      success(data.message);
      closeModal();
      fetchTransactions();
    } catch (err: any) {
      error(checkErrorOrigin(err));
    } finally {
      setLoading(false);
    }
  }, [closeModal, fetchTransactions, transaction?._id]);

  return (
    <Dialog maxWidth="sm" fullWidth open={isVisible} onClose={closeModal}>
      <DialogTitle>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          Remover Transação
          <Styled.CloseIcon onClick={closeModal}>
            <X />
          </Styled.CloseIcon>
        </div>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <div
            style={{
              height: '4.5rem',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '1rem',
              fontWeight: 'bold',
            }}
          >
            Deseja mesmo remover essa transação?
          </div>
        </DialogContentText>
        <Styled.ActionButtons isEdit={!!transaction}>
          <Styled.Row>
            <Styled.CustomCancelLoadingButton
              className="cancel"
              disabled={loading}
              onClick={closeModal}
            >
              Cancelar
            </Styled.CustomCancelLoadingButton>

            <Styled.CustomLoadingButton
              className="save"
              onClick={handleDeleteTransaction}
              loading={loading}
              disabled={loading}
              loadingIndicator={
                <CircularProgress className="progress" size={16} />
              }
            >
              Remover
            </Styled.CustomLoadingButton>
          </Styled.Row>
        </Styled.ActionButtons>
      </DialogContent>
    </Dialog>
  );
};

export default DialogDeleteTransaction;
