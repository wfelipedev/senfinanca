import 'react-toastify/dist/ReactToastify.min.css';
import { ISEOProps } from '../../interfaces';

import TransactionsComponent from '../../components/Transactions';

export default function Transactions({ title }: ISEOProps) {
  document.title = title;

  return <TransactionsComponent />;
}
