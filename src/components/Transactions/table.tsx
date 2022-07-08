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
import { ITransaction } from '../../interfaces';
import { ArrowDownCircle, ArrowUpCircle, Edit2, Trash2 } from 'react-feather';
import { format } from 'date-fns';
import { priceMaskNumber } from '../../utils/mask';
import * as Styled from './styles';

interface ITableProps {
  transactions: ITransaction[];
  openModalCreate: (transaction?: ITransaction | undefined) => void;
  openModalDelete: (transaction?: ITransaction | undefined) => void;
  fetchTransactions: () => void;
}

export default function TransactionTable({
  transactions,
  openModalCreate,
  openModalDelete,
  fetchTransactions,
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

  const arrowIcon = (transaction: ITransaction) =>
    transaction.type === 'deposit' ? (
      <ArrowUpCircle
        size={16}
        style={{ marginRight: '.4rem' }}
        color="#33cc95"
      />
    ) : (
      <ArrowDownCircle
        size={16}
        style={{ marginRight: '.4rem' }}
        color="#e52e4d"
      />
    );

  return (
    <TableContainer elevation={0} component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
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
                <Styled.CustomTableRow key={transaction._id}>
                  <StyledTableCell component="th" scope="row">
                    {transaction.title}
                  </StyledTableCell>
                  <StyledTableCell>
                    <Styled.Row>
                      {arrowIcon(transaction)}
                      R$
                      {priceMaskNumber(+transaction.value)}
                    </Styled.Row>
                  </StyledTableCell>
                  <StyledTableCell>{transaction.category}</StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {format(new Date(transaction.createdAt), 'dd/MM/yyyy')}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Styled.ActionButton>
                      <Edit2
                        className="icon"
                        size={18}
                        onClick={() => openModalCreate(transaction)}
                      />
                      <Trash2
                        onClick={() => openModalDelete(transaction)}
                        className="icon trash"
                        size={18}
                      />
                    </Styled.ActionButton>
                  </StyledTableCell>
                </Styled.CustomTableRow>
              ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[10, 25, 50]}
              colSpan={6}
              count={transactions.length}
              rowsPerPage={rowsPerPage}
              page={page}
              labelRowsPerPage="Linhas por página"
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
