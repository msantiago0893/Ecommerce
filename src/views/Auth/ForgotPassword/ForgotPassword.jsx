import { Header } from '../../../components/Header/Header';
import { Footer } from '../../../components/Footer/Footer';
import styles from './ForgotPassword.module.sass';

import TextField from '@mui/material/TextField';

export const ForgotPassword = () => {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.form}>
          <h2>Recupera tu cuenta</h2>
          <p>Ingresa tu correo electrónico o número de celular para buscar tu cuenta.</p>
          <TextField
            required
            id="standard-required"
            label="Required"
            defaultValue="Hello World"
            variant="standard"
          />
        </div>
        <Footer />
      </div>

    </div>
  )
}
