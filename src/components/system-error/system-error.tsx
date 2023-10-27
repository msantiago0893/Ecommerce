import { Button } from '@mui/material';
import styles from './index.module.sass';
import { useDispatch } from 'react-redux';
import { setError } from '../../redux/slices/app.slice';

const SystemError = () => {
  const dispatch = useDispatch();

  const handleHideError = () => {
    dispatch(setError(false));
  };

  return (
    <div className={styles.wrapper}>
      <h1> Error!!</h1>
      <img src="https://img.freepik.com/vector-premium/error-sistema-operativo-personas-cerca-vector-plano-computadora-aislado_181313-3047.jpg" alt="error" />
      <p> Se ha producido un error al realizar su solicitud. Intente más tarde!</p>
      <Button variant="contained" onClick={handleHideError}> Volver </Button>
    </div>
  );
};

export default SystemError;
