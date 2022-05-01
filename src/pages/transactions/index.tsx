import { useEffect, useState } from 'react';
import DrawerCustom from '../../components/Drawer';
import * as S from '../../styles/transactions';
import { api } from '../../services/api';
import DialogTransaction from '../../components/Dialogs/Transactions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { ISEOProps, ITransaction } from '../../interfaces';
import TransactionTable from '../../components/Transactions';
import { MenuItem } from '@mui/material';
import Empty from '../../images/empty.svg';
import Greetings from '../../components/Header';

const categories = [
  'Todas as Categorias',
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

const types = ['Todos os Tipos', 'Entrada', 'Saída'];

export default function Transactions({ title }: ISEOProps) {
  document.title = title;

  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);
  const [selectedTransaction, setSelectedTransaction] =
    useState<ITransaction>();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');

  const success = (msg: string) => {
    toast.success(msg, {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  };

  const error = (msg: string) => {
    toast.error(msg, {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  };

  const fetchMyTransactions = async () => {
    const { data } = await api.get('transaction/my-transactions');

    setTransactions(data);
  };

  const openModalCreate = (transaction?: ITransaction) => {
    setIsCreateModalVisible(true);
    if (transaction) {
      setSelectedTransaction(transaction);
    }
    fetchMyTransactions();
  };

  const closeModal = () => {
    setIsCreateModalVisible(false);
    setSelectedTransaction({
      _id: '',
      category: '',
      title: '',
      type: 'deposit',
      value: 0,
      createdAt: '',
    });
  };

  const handleSearch = async () => {
    const { data } = await api.post('transaction/filter', {
      search,
      category,
      type,
    });

    setTransactions(data);
  };

  useEffect(() => {
    fetchMyTransactions();
  }, []);

  return (
    <>
      <DrawerCustom>
        <S.Main>
          <Greetings subtitle="Suas Transações" />
          <S.SearchBox>
            <S.SearchfieldCustom
              isSearch={true}
              variant="filled"
              fullWidth
              label="Buscar Transação"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              size="small"
            />
            <S.SearchfieldCustom
              isSearch={false}
              id="outlined-select-currency"
              select
              placeholder="Selecione uma categoria"
              label="Categoria"
              name="category"
              variant="filled"
              fullWidth
              onChange={(e) => {
                const value = e.target.value;
                if (value === 'Todas as Categorias') setCategory('');
                else setCategory(e.target.value);
              }}
              size="small"
            >
              {categories.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </S.SearchfieldCustom>
            <S.SearchfieldCustom
              isSearch={false}
              id="outlined-select-currency"
              select
              placeholder="Selecione uma categoria"
              label="Tipo"
              name="type"
              variant="filled"
              fullWidth
              onChange={(e) => {
                const value = e.target.value;
                if (value === 'Todos os Tipos') setType('');
                else setType(value === 'Entrada' ? 'deposit' : 'withdraw');
              }}
              size="small"
            >
              {types.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </S.SearchfieldCustom>
            <S.SearchButton onClick={handleSearch}>Buscar</S.SearchButton>
            <S.AddButton onClick={() => openModalCreate(selectedTransaction)}>
              Novo
            </S.AddButton>
          </S.SearchBox>
          {transactions.length > 0 ? (
            <TransactionTable
              transactions={transactions}
              openModalCreate={openModalCreate}
            />
          ) : (
            <S.Empty>
              <img src={Empty} alt="empty" />
              <div className="subtitle">Nenhuma Transação encontrada. 🙁</div>
            </S.Empty>
          )}
        </S.Main>
      </DrawerCustom>

      <DialogTransaction
        isVisible={isCreateModalVisible}
        closeModal={closeModal}
        transaction={selectedTransaction}
        fetchTransactions={fetchMyTransactions}
        success={success}
        error={error}
      />
    </>
  );
}
