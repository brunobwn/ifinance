import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Table } from './components/Table';
import { Totals } from './components/Totals';
import { NewTransactionModal } from './components/NewTransactionModal';
import { Container } from './style';

export interface Transaction {
  id: string;
  titulo: string;
  categoria: string;
  tipo: 'receita' | 'despesa';
  valor: number;
  criadoEm: Date;
}

export function Dashboard() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  const [Transactions, setTransactions] = useState<Transaction[] | []>([]);

  useEffect(() => {
    // fetch('/api/transactions')
    //   .then((res) => res.json())
    //   .then((data) => setTransactions(data.transactions));
    const transactionsStorage = localStorage.getItem('transactions') || '[]';
    const transactionsData = JSON.parse(transactionsStorage);
    setTransactions(transactionsData);
  }, []);

  function addNewTransaction(newTransaction: Transaction) {
    setTransactions([...Transactions, newTransaction]);
  }

  function closeNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  function openNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  return (
    <>
      <Header openNewTransactionModal={openNewTransactionModal} />
      <Container>
        <Totals Transactions={Transactions} />
        <Table Transactions={Transactions} />
      </Container>
      <NewTransactionModal
        isNewTransactionModalOpen={isNewTransactionModalOpen}
        closeNewTransactionModal={closeNewTransactionModal}
        addNewTransaction={addNewTransaction}
      />
    </>
  );
}
