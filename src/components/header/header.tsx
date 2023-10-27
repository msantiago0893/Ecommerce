import { Button, Stack } from '@mui/material'; // Importa el componente Button de Material-UI
import { Link } from 'react-router-dom'; // Importa Link de React Router
import styles from './header.module.sass';

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>SmartShop</h1>

      <Stack direction="row" spacing={1}>
        <Button component={Link} to="/signin" color="inherit"> Acceso </Button>
        <Button component={Link} to="/signup" color="inherit"> Registro </Button>
      </Stack>

    </div>
  );
};

export default Header;
