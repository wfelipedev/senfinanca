/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { useEffect, useRef, useState } from 'react';
import DrawerCustom from '../../components/Drawer';
import * as Styled from './styles';
import { api } from '../../services/api';
import DialogTransaction from './Create';
import 'react-toastify/dist/ReactToastify.min.css';
import { ITransaction } from '../../interfaces';
import TransactionTable from './table';
import Empty from '../../assets/images/empty.svg';
import PartialBalance from './partial';
import { Toaster } from 'react-hot-toast';
import DialogDeleteTransaction from './Delete';
import SearchComponent from './search';

const initialValues = {
  _id: '',
  category: '',
  title: '',
  type: 'deposit',
  value: '',
  createdAt: '',
};

const TransactionsComponent = () => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [selectedTransaction, setSelectedTransaction] =
    useState<ITransaction>();
  const [partialBalance, setPartialBalance] = useState<boolean>(false);

  const [deposit, setDeposit] = useState<number>(0);
  const [withdraw, setWithdraw] = useState<number>(0);
  var depositRef = useRef<number>(deposit);
  var withdrawRef = useRef<number>(withdraw);

  const fetchMyTransactions = async () => {
    const { data } = await api.get('transaction/my-transactions');

    setTransactions(data);
  };

  const openModalCreate = (transaction?: ITransaction) => {
    setIsCreateModalVisible(true);
    if (transaction) setSelectedTransaction(transaction);
    fetchMyTransactions();
  };

  const openModalDelete = (transaction?: ITransaction) => {
    setIsDeleteModalVisible(true);
    if (transaction) setSelectedTransaction(transaction);
    fetchMyTransactions();
  };

  const closeModal = () => {
    setIsCreateModalVisible(false);
    setIsDeleteModalVisible(false);
    setSelectedTransaction(initialValues);
  };

  const getDepositAndWithdrawRefs = (transactions: ITransaction[]) => {
    depositRef.current = 0;
    withdrawRef.current = 0;

    if (transactions.length === 0) {
      setDeposit(depositRef.current);
      setWithdraw(withdrawRef.current);
    }

    transactions.map((transaction) => {
      if (transaction.type === 'deposit') {
        depositRef.current += +transaction.value;
      } else {
        withdrawRef.current += +transaction.value;
      }

      setDeposit(depositRef.current);
      setWithdraw(withdrawRef.current);
    });
  };

  useEffect(() => {
    fetchMyTransactions();
  }, []);

  return (
    <>
      <Toaster />
      <DrawerCustom>
        <Styled.Container>
          <Styled.SearchBox>
            <SearchComponent
              getDepositAndWithdrawRefs={getDepositAndWithdrawRefs}
              setPartialBalance={setPartialBalance}
              setTransactions={setTransactions}
              openModalCreate={openModalCreate}
              selectedTransaction={selectedTransaction}
            />
          </Styled.SearchBox>

          {partialBalance && transactions.length > 0 && (
            <PartialBalance
              deposit={depositRef.current}
              withdraw={withdrawRef.current}
            />
          )}

          {transactions.length > 0 ? (
            <TransactionTable
              transactions={transactions}
              openModalCreate={openModalCreate}
              openModalDelete={openModalDelete}
              fetchTransactions={fetchMyTransactions}
            />
          ) : (
            <Styled.EmptyContainer>
              <img src={Empty} alt="empty" />
              <div className="subtitle">Nenhuma Transação encontrada. 🙁</div>
            </Styled.EmptyContainer>
          )}
        </Styled.Container>
      </DrawerCustom>

      <DialogTransaction
        isVisible={isCreateModalVisible}
        closeModal={closeModal}
        transaction={selectedTransaction}
        fetchTransactions={fetchMyTransactions}
      />

      <DialogDeleteTransaction
        isVisible={isDeleteModalVisible}
        closeModal={closeModal}
        transaction={selectedTransaction}
        fetchTransactions={fetchMyTransactions}
      />
    </>
  );
};

export default TransactionsComponent;
