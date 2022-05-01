import * as S from '../../../styles/transactions';
import { Dialog, DialogActions, DialogContent, Grid } from '@mui/material';
import { useAuth } from '../../../context/useAuth';

interface DialogProps {
  isVisible: boolean;
  closeModal: () => void;
}

export default function DialogSignout({ isVisible, closeModal }: DialogProps) {
  const { signOut } = useAuth();

  return (
    <Dialog maxWidth="sm" fullWidth open={isVisible} onClose={closeModal}>
      <DialogContent>
        <Grid container>
          <Grid item xs={12}>
            <h1>Deseja mesmo sair?</h1>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <S.ActionButtons isEdit={false}>
          <S.Row>
            <S.CustomCancelLoadingButton
              className="cancel"
              onClick={closeModal}
            >
              Não
            </S.CustomCancelLoadingButton>

            <S.CustomLoadingButton className="save" onClick={signOut}>
              Sim
            </S.CustomLoadingButton>
          </S.Row>
        </S.ActionButtons>
      </DialogActions>
    </Dialog>
  );
}
