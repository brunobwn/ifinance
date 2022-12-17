import { Container, TableTransactions } from './style';

export function Table() {
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
          <tr>
            <td>Aluguel</td>
            <td className="despesa">- R$ 1250.00</td>
            <td>Casa</td>
            <td>7/12/2022</td>
          </tr>
          <tr>
            <td>Salario dezembro</td>
            <td className="receita">R$ 8750.00</td>
            <td>Trabalho</td>
            <td>12/12/2022</td>
          </tr>
          <tr>
            <td>Compras no supermercado</td>
            <td className="despesa">- R$ 250.00</td>
            <td>Comida</td>
            <td>16/12/2022</td>
          </tr>
        </tbody>
      </TableTransactions>
    </Container>
  );
}
