import { Transaction } from '../..';
import { Container, TableTransactions } from './style';
import xmark from '../../../../assets/circle-xmark-regular.svg';

interface TableProps {
  Transactions: Transaction[];
  handleDeleteTransaction: (id: string) => void;
}

export function Table({ Transactions, handleDeleteTransaction }: TableProps) {
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
                {transaction.tipo === 'despesa' && '-'}
                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
                  transaction.valor
                )}
              </td>
              <td>{transaction.categoria}</td>
              <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.criadoEm))}</td>
              <button type="button" onClick={() => handleDeleteTransaction(transaction.id)}>
                <img src={xmark} alt="Deletar registro" />
              </button>
            </tr>
          ))}
          {Transactions.length === 0 && (
            <tr>
              <td colSpan={4} align="center">
                <small>
                  Nenhuma transação cadastrada, adicione novos registros clicando no botão Nova
                  Transação
                </small>
              </td>
            </tr>
          )}
        </tbody>
      </TableTransactions>
    </Container>
  );
}
