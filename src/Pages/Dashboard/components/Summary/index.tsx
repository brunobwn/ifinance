import { ReactHTML } from 'react';
import { TotalsContainer } from './style';
import circleDownSvg from '../../../../assets/circle-down-regular.svg';
import circleUpSvg from '../../../../assets/circle-up-regular.svg';
import sackDollarSvg from '../../../../assets/sack-dollar-solid.svg';
import { Transaction } from '../..';

interface SummaryProps {
  children?: ReactHTML[];
  Transactions: Transaction[];
}

export function Summary({ Transactions }: SummaryProps) {
  const summary = Transactions.reduce(
    (acc, transaction) => {
      if (transaction.tipo === 'receita') {
        acc.receita += transaction.valor;
        acc.geral += transaction.valor;
      } else {
        acc.despesa += transaction.valor;
        acc.geral -= transaction.valor;
      }

      return acc;
    },
    { receita: 0, despesa: 0, geral: 0 }
  );

  return (
    <TotalsContainer>
      <div className="card">
        <p>
          Receitas <img src={circleDownSvg} alt="Receitas" />
        </p>
        <p className="receita">
          {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
            summary.receita
          )}
        </p>
      </div>
      <div className="card">
        <p>
          Despesas <img src={circleUpSvg} alt="Despesas" />
        </p>
        <p className="despesa">
          {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
            summary.despesa * -1
          )}
        </p>
      </div>
      <div className="card">
        <p>
          Total <img src={sackDollarSvg} alt="Total" />
        </p>
        <p className={summary.geral < 0 ? 'despesa' : undefined}>
          {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
            summary.geral
          )}
        </p>
      </div>
    </TotalsContainer>
  );
}
