import { useState } from 'react';
import { Header } from './components/Header';
import { Table } from './components/Table';
import { Totals } from './components/Totals';
import { NewTransactionModal } from './components/NewTransactionModal';
import { Container } from './style';

export function Dashboard() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

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
        <Totals />
        <Table />
      </Container>
      <NewTransactionModal
        isNewTransactionModalOpen={isNewTransactionModalOpen}
        closeNewTransactionModal={closeNewTransactionModal}
      />
    </>
  );
}
