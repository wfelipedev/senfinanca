import * as Styled from '../../../styles/transactions';
import { Dialog } from '@mui/material';
import { useAuth } from '../../../context/useAuth';

interface DialogProps {
  isVisible: boolean;
  closeModal: () => void;
}

export default function DialogSignout({ isVisible, closeModal }: DialogProps) {
  const { signOut } = useAuth();

  return (
    <Dialog maxWidth="sm" fullWidth open={isVisible} onClose={closeModal}>
      <Styled.DialogContent>
        <h1>Deseja mesmo sair?</h1>
      </Styled.DialogContent>
      <Styled.DialogButtonContainer>
        <div className="row">
          <Styled.CustomCancelLoadingButton
            className="cancel"
            onClick={closeModal}
          >
            Não
          </Styled.CustomCancelLoadingButton>

          <Styled.CustomLoadingButton className="save" onClick={signOut}>
            Sim
          </Styled.CustomLoadingButton>
        </div>
      </Styled.DialogButtonContainer>
    </Dialog>
  );
}
