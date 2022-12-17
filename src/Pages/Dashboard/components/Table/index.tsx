import { Transaction } from '../..';
import { Container, TableTransactions } from './style';
import xmark from '../../../../assets/circle-xmark-regular.svg';

interface TableProps {
  Transactions: Transaction[];
}

export function Table({ Transactions }: TableProps) {
  return (
    <Container>
      <TableTransactions>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {Transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.titulo}</td>
              <td className={transaction.tipo}>
                {transaction.tipo === 'despesa' && '- '}
                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
                  transaction.valor
                )}
              </td>
              <td>{transaction.categoria}</td>
              <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.criadoEm))}</td>
              <button>
                <img src={xmark} alt="Deletar registro" />
              </button>
            </tr>
          ))}
        </tbody>
      </TableTransactions>
    </Container>
  );
}
