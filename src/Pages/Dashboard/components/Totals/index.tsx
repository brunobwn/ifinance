import { ReactHTML } from 'react';
import { TotalsContainer } from './style';
import circleDownSvg from '../../../../assets/circle-down-regular.svg';
import circleUpSvg from '../../../../assets/circle-up-regular.svg';
import sackDollarSvg from '../../../../assets/sack-dollar-solid.svg';
import { Transaction } from '../..';

interface TotalsProps {
  children?: ReactHTML[];
  Transactions: Transaction[];
}

export function Totals({ Transactions }: TotalsProps) {
  const total = { receita: 0, despesa: 0, geral: 0 };
  Transactions.forEach((transaction) => {
    if (transaction.tipo === 'receita') {
      total.receita += transaction.valor;
    } else {
      total.despesa += transaction.valor;
    }
    total.geral += transaction.valor;
  }, 0);

  return (
    <TotalsContainer>
      <div className="card">
        <p>
          Receitas <img src={circleDownSvg} alt="Receitas" />
        </p>
        <p className="receita">
          {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
            total.receita
          )}
        </p>
      </div>
      <div className="card">
        <p>
          Despesas <img src={circleUpSvg} alt="Despesas" />
        </p>
        <p className="despesa">
          -
          {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
            total.despesa
          )}
        </p>
      </div>
      <div className="card">
        <p>
          Total <img src={sackDollarSvg} alt="Total" />
        </p>
        <p>
          {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
            total.geral
          )}
        </p>
      </div>
    </TotalsContainer>
  );
}
