import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { products } from '../constants/productsList';
import { TablePagination } from '@mui/material';


function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function TableData() {
  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>In Stock</TableCell>
            <TableCell>Qunatity Left</TableCell>
            <TableCell>Qunatity Used</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.inStock ? <span>True</span> : <span>False</span>}</TableCell>
              <TableCell>{row.qtyLeft}</TableCell>
              <TableCell>{row.qtyUsed}</TableCell>
              <TableCell align="right">{`$${row.price}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={5}
          rowsPerPage={5}
          page={4}
          onPageChange={() =>{}}
          onRowsPerPageChange={() =>{}}
        />
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}