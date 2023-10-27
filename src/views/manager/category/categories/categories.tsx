import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button, ButtonGroup, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { categories, deleteCategory } from '../../../../redux/asyncThunk/category.thunk';

const columns = [
  { id: 'id', label: 'ID', minWidth: 50 },
  { id: 'name', label: 'Nombre', minWidth: 170 },
  { id: 'creationAt', label: 'Fecha de Creación', minWidth: 170 },
  { id: 'actions', label: 'Operaciones', minWidth: 170 }
];

const Categories = () => {
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const dispatch = useAppDispatch();
  const listCategories = useAppSelector((state) => state.category.data);

  useEffect(() => {
    dispatch(categories());
  }, []);

  const handleChangePage = (newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDelete = (categoryId: string) => {
    dispatch(deleteCategory(Number(categoryId)));
  }

  return (
    <Paper sx={{ width: '100%' }}>
      <TextField
        label="Filtrar por Nombre"
        value={filter}
        onChange={(e:any) => setFilter(e.target.value)}
      />
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align="center" style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {listCategories
              .filter((row:any) => row.name.toLowerCase().includes(filter.toLowerCase()))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: any) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id.toString()}>
                  {columns.map((column) => (
                    <TableCell key={column.id} align="center">
                      {column.id === 'actions' ? (
                        <ButtonGroup variant="text" aria-label="text button group">
                          <Link to={`/manager/category/${row.id}`}>
                            <Button>Actualizar</Button>
                          </Link>
                          <Button onClick={() => handleDelete(row.id)}>Eliminar</Button>
                          <Link to={`/manager/detail-category/${row.id}`}>
                            <Button>Detalle</Button>
                          </Link>
                        </ButtonGroup>

                      ) : (
                        row[column.id]
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={categories.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default Categories;
