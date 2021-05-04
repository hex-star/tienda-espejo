import * as React from 'react';
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import CreateIcon from '@material-ui/icons/Create';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '1',
    'Cartera Prueba',
    '100',
    'VISA ⠀•••• 3719',
    312.44,
  ),
  createData(
    1,
    '2',
    'Bolso Milán',
    '5',
    'VISA ⠀•••• 2574',
    866.99,
  ),
  createData(2, '3', 'Billetera Sevilla', '40', 'MC ⠀•••• 1253', 100.81),
  createData(
    3,
    '4',
    'Cartera Oslo',
    '50',
    'AMEX ⠀•••• 2000',
    654.39,
  ),
  createData(
    4,
    '5',
    'Bolso de mano Paris',
    '10',
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
      {/* <Title>Productos</Title> */}
    <Grid container direction="column" spacing={3}>
    <Grid item justify="center" alignItems="center" direction="row">
      <h1>ABM PRODUCTOS</h1>
    </Grid>
    <Grid item direction="column">
        <Button variant="contained" color="primary">Agregar Producto</Button>
    </Grid>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Producto</TableCell>
            <TableCell>Cantidad</TableCell>
            <TableCell >Precio</TableCell>
            <TableCell>Editar</TableCell>
            <TableCell>Eliminar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              {/* <TableCell>{row.paymentMethod}</TableCell> */}
              <TableCell>{`$${row.amount}`}</TableCell>
              <TableCell>
                <IconButton>
                  <CreateIcon color="primary" />
                </IconButton>
              </TableCell>
              <TableCell>
                <IconButton>
                    <DeleteIcon color="secondary"></DeleteIcon>
                </IconButton>

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        
      </Table>
      </Grid>

    </React.Fragment>
  );
}
