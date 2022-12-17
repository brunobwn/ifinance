import { ReactHTML } from 'react';
import { TotalsContainer } from './style';
import circleDownSvg from '../../../../assets/circle-down-regular.svg';
import circleUpSvg from '../../../../assets/circle-up-regular.svg';
import sackDollarSvg from '../../../../assets/sack-dollar-solid.svg';

interface TotalsProps {
  children?: ReactHTML[];
}

export function Totals(props: TotalsProps) {
  return (
    <TotalsContainer>
      <div className="card">
        <p>
          Receitas <img src={circleDownSvg} alt="Receitas" />
        </p>
        <p className="receita">R$ 1000.00</p>
      </div>
      <div className="card">
        <p>
          Despesas <img src={circleUpSvg} alt="Despesas" />
        </p>
        <p className="despesa">R$ 500.00</p>
      </div>
      <div className="card">
        <p>
          Total <img src={sackDollarSvg} alt="Total" />
        </p>
        <p>R$ 500.00</p>
      </div>
    </TotalsContainer>
  );
}
