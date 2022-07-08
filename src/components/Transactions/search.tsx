import { MenuItem } from '@mui/material';
import { useState } from 'react';
import { Plus, Search } from 'react-feather';
import { ITransaction } from '../../interfaces';
import { api } from '../../services/api';
import { checkErrorOrigin } from '../../utils/checkError';
import { categories, types } from '../../utils/constants';
import { error } from '../../utils/toasts';
import * as Styled from './styles';

interface ISearchComponentProps {
  getDepositAndWithdrawRefs: (transactions: ITransaction[]) => void;
  setTransactions: (value: React.SetStateAction<ITransaction[]>) => void;
  setPartialBalance: (value: React.SetStateAction<boolean>) => void;
  openModalCreate: (transaction?: ITransaction) => void;
  selectedTransaction?: ITransaction;
}

const SearchComponent = ({
  getDepositAndWithdrawRefs,
  setTransactions,
  setPartialBalance,
  openModalCreate,
  selectedTransaction,
}: ISearchComponentProps) => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');

  const handleSearch = async () => {
    try {
      const { data } = await api.post('transaction/filter', {
        search,
        category,
        type,
      });

      getDepositAndWithdrawRefs(data);

      if (search === '' && category === '' && type === '')
        setPartialBalance(false);
      else if (search !== '' || category !== '' || type !== '') {
        setPartialBalance(true);
      }

      setTransactions(data);
    } catch (err: any) {
      error(checkErrorOrigin(err));
    }
  };

  return (
    <>
      <Styled.SearchfieldCustom
        isSearch={true}
        variant="filled"
        fullWidth
        label="Buscar Transação"
        onChange={(e: any) => {
          setSearch(e.target.value);
        }}
        size="small"
      />
      <Styled.SearchfieldCustom
        isSearch={false}
        id="outlined-select-currency"
        select
        placeholder="Selecione uma categoria"
        label="Categoria"
        name="category"
        variant="filled"
        fullWidth
        onChange={(e: any) => {
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
      </Styled.SearchfieldCustom>
      <Styled.SearchfieldCustom
        isSearch={false}
        id="outlined-select-currency"
        select
        placeholder="Selecione uma categoria"
        label="Tipo"
        name="type"
        variant="filled"
        fullWidth
        onChange={(e: any) => {
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
      </Styled.SearchfieldCustom>
      <Styled.Button onClick={handleSearch}>
        <Search size={18} />
        Buscar
      </Styled.Button>
      <Styled.Button onClick={() => openModalCreate(selectedTransaction)}>
        <Plus size={18} />
        Novo
      </Styled.Button>
    </>
  );
};

export default SearchComponent;
