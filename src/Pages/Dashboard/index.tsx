import { ReactEventHandler, useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Table } from './components/Table';
import { Summary } from './components/Summary';
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
    const transactionsData = [...Transactions, newTransaction];
    localStorage.setItem('transactions', JSON.stringify(transactionsData));
    setTransactions([...Transactions, newTransaction]);
  }

  function handleDeleteTransaction(id: string) {
    const transactionsData = Transactions.filter((transaction) => transaction.id !== id);
    setTransactions(transactionsData);
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
        <Summary Transactions={Transactions} />
        <Table Transactions={Transactions} handleDeleteTransaction={handleDeleteTransaction} />
      </Container>
      <NewTransactionModal
        isNewTransactionModalOpen={isNewTransactionModalOpen}
        closeNewTransactionModal={closeNewTransactionModal}
        addNewTransaction={addNewTransaction}
      />
    </>
  );
}
