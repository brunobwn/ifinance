import { useState } from 'react';
import Modal from 'react-modal';
import circleDownSvg from '../../../../assets/circle-down-regular.svg';
import circleUpSvg from '../../../../assets/circle-up-regular.svg';
import { NewTransactionForm } from './style';
import uuid from 'react-uuid';
import { Transaction } from '../..';

Modal.setAppElement('#root');

interface NewTransactionModalProps {
  isNewTransactionModalOpen: boolean;
  closeNewTransactionModal: () => void;
  addNewTransaction: (obj: Transaction) => void;
}

export function NewTransactionModal({
  isNewTransactionModalOpen,
  closeNewTransactionModal,
  addNewTransaction,
}: NewTransactionModalProps) {
  const [Titulo, setTitulo] = useState('');
  const [Valor, setValor] = useState(0);
  const [Categoria, setCategoria] = useState('');
  const [Tipo, setTipo] = useState<'receita' | 'despesa'>('receita');

  function handleNewTransactionSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newTransaction = {
      id: uuid(),
      titulo: Titulo,
      valor: Valor,
      categoria: Categoria,
      tipo: Tipo,
      criadoEm: new Date(),
    };

    addNewTransaction(newTransaction);
    closeNewTransactionModal();

    setTitulo('');
    setValor(0);
    setCategoria('');
    setTipo('receita');
  }

  return (
    <Modal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={closeNewTransactionModal}
      contentLabel="Cadastrar nova transação"
      className="Modal"
      overlayClassName="Overlay">
      <button className="closeBtn" onClick={closeNewTransactionModal} aria-label="Fechar modal">
        X
      </button>
      <NewTransactionForm onSubmit={handleNewTransactionSubmit} method="post">
        <input
          type="text"
          name="titulo"
          placeholder="Título"
          value={Titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
        <input
          type="number"
          name="valor"
          placeholder="Valor"
          value={Valor}
          onChange={(e) => setValor(Number(e.target.value))}
          required
        />
        <input
          type="text"
          name="categoria"
          placeholder="Categoria"
          value={Categoria}
          onChange={(e) => setCategoria(e.target.value)}
          required
        />
        <div className="radioBtn">
          <button
            type="button"
            onClick={() => setTipo('receita')}
            className={Tipo === 'receita' ? Tipo : undefined}>
            <img src={circleDownSvg} alt="Receita" /> <span>Receita</span>
          </button>
          <button
            type="button"
            onClick={() => setTipo('despesa')}
            className={Tipo === 'despesa' ? Tipo : undefined}>
            <img src={circleUpSvg} alt="Despesa" />
            <span>Despesa</span>
          </button>
        </div>
        <button type="submit">Cadastrar</button>
      </NewTransactionForm>
    </Modal>
  );
}
