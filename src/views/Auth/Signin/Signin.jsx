import { useNavigate, Link } from 'react-router-dom';

import { Header } from '../../../components/Header/Header';
import styles from './Signin.module.sass';

import { Button, TextField } from '@mui/material';

export const Signin = () => {

  const navigate = useNavigate();

  const authentication = () => {
    localStorage.setItem('isAuth', true);
    localStorage.setItem('role', 'MANAGER');

    navigate("/", { replace: true });
  };

  return (
    <div className={styles.main}>
      <Header />

      <div className={styles.wrapper}>

        <form className={styles.form} action="">

          <img className={styles['form__icon']} src="../assets/images/login.png" alt="login" />

          <div className={styles['form__row']}>
            <TextField
              required
              id="standard-required"
              label="Email"
              defaultValue="msantiago@linko.mx"
              variant="standard"
            />
          </div>
          <div className={styles['form__row']}>
            <TextField
              required
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
            />
          </div>

          <Button className={styles['form__submit']} variant="contained" onClick={() => authentication()}>Entrar</Button>

          <div className={styles['form__links']}>
            <Link className={styles['menu__item']} to="gallery"> ¿Olvidaste la contraseña? </Link>
            <Link className={styles['menu__item']} to="signup"> ¿No tienes una cuenta?, Registrate </Link>
          </div>
        </form>
      </div>

    </div >
  )
}
