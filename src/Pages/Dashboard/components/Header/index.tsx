import { Container } from './style';
import logoSvg from '../../../../assets/scale-unbalanced-flip-solid.svg';
import { Transaction } from '../..';

interface HeaderProps {
  openNewTransactionModal: () => void;
}

export function Header({ openNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <div className="content">
        <p>
          <span>
            <img src={logoSvg} alt="iFinance" />
          </span>
          iFinance
        </p>
        <button type="button" onClick={() => openNewTransactionModal()}>
          Nova transação
        </button>
      </div>
    </Container>
  );
}
