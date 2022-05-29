import { useState } from 'react';
import {
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import { ITransaction } from '../../../interfaces';
import * as S from '../../../styles/transactions';
import { ArrowDownCircle, ArrowUpCircle, Edit2, Trash2 } from 'react-feather';
import { format } from 'date-fns';
import { priceMaskNumber } from '../../../utils/mask';

interface ITableProps {
  transactions: ITransaction[];
  openModalCreate: (transaction?: ITransaction | undefined) => void;
}

export default function TransactionTable({
  transactions,
  openModalCreate,
}: ITableProps) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#333',
      color: '#fff',
      fontWeight: 'bold',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  return (
    <TableContainer elevation={0} component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table" >
        <TableHead>
          <TableRow>
            <StyledTableCell>Título</StyledTableCell>
            <StyledTableCell>Valor</StyledTableCell>
            <StyledTableCell>Categoria</StyledTableCell>
            <StyledTableCell>Criada em</StyledTableCell>
            <StyledTableCell align="center">Ações</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions &&
            transactions
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((transaction) => (
                <S.CustomTableRow key={transaction._id}>
                  <StyledTableCell component="th" scope="row">
                    {transaction.title}
                  </StyledTableCell>
                  <StyledTableCell>
                    {transaction.type === 'deposit' ? (
                      <S.Row>
                        <ArrowUpCircle
                          size={16}
                          style={{ marginRight: '.4rem' }}
                          color="#33cc95"
                        />
                        R$
                        {priceMaskNumber(transaction.value)}
                      </S.Row>
                    ) : (
                      <S.Row>
                        <ArrowDownCircle
                          size={16}
                          style={{ marginRight: '.4rem' }}
                          color="#e52e4d"
                        />
                        R$
                        {priceMaskNumber(transaction.value)}
                      </S.Row>
                    )}
                  </StyledTableCell>
                  <StyledTableCell>{transaction.category}</StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {format(new Date(transaction.createdAt), 'dd/MM/yyyy')}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <S.ActionButton>
                      <Edit2
                        className="icon"
                        size={18}
                        onClick={() => openModalCreate(transaction)}
                      />
                      <Trash2 className="icon trash" size={18} />
                    </S.ActionButton>
                  </StyledTableCell>
                </S.CustomTableRow>
              ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[10, 25, 50]}
              colSpan={3}
              count={transactions.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'Paginas ',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
