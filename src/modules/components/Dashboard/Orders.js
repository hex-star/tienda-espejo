import * as React from 'react';
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Title from './Title';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    1,
    '16 Mar, 2021',
    'Elvis Presley',
    'Tupelo, MS',
    'VISA ⠀•••• 3719',
    312.44,
  ),
  createData(
    2,
    '16 Mar, 2021',
    'Paul McCartney',
    'London, UK',
    'VISA ⠀•••• 2574',
    866.99,
  ),
  createData(2, '16 Mar, 2021', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(
    3,
    '16 Mar, 2021',
    'Michael Jackson',
    'Gary, IN',
    'AMEX ⠀•••• 2000',
    654.39,
  ),
  createData(
    4,
    '15 Mar, 2021',
    'Bruce Springsteen',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    212.79,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      {/* <Title>Recent Orders</Title> */}
      <Grid container direction="column" spacing={3}>
      <Grid item justify="center" alignItems="center" direction="row">
      <h1>VENTAS</h1>
      </Grid>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>N° Venta</TableCell>
            <TableCell>Fecha</TableCell>
            <TableCell>Cliente</TableCell>
            <TableCell>Enviar a</TableCell>
            <TableCell>Método de Pago</TableCell>
            <TableCell>Total Venta</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell >{`$${row.amount}`}</TableCell>
              <TableCell>
              <Button
                size="small"
                variant="contained"
                color="secondary"
                >
                Detalle
              </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </Grid>
    </React.Fragment>
  );
}
