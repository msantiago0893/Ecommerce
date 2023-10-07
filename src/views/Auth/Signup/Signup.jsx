import { Header } from '../../../components/Header/Header';
import styles from './Signup.module.sass';

import { useNavigate } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Radio from '@mui/material/Radio';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';


export const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.main}>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles['wrapper__content']}>
          <h2 className={styles['wrapper__title']}>Datos personales</h2>
          <div className={styles['wrapper__content-own']}>
            <TextField
              id="name"
              label="Nombre"
              defaultValue="Santiago"
              helperText="Message error"
              variant="standard"
            />
            <TextField
              id="firstName"
              label="Apellido paterno"
              defaultValue="Santiago"
              helperText="Message error"
              variant="standard"
            />
            <TextField
              id="secondName"
              label="Apellido materno"
              defaultValue="Santiago"
              helperText="Message error"
              variant="standard"
            />

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120, marginTop: 0 }}>
              <InputLabel id="demo-simple-select-standard-label">Sexo</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                // value={age}
                // onChange={handleChange}
                label="Sexo"
              >
                <MenuItem value="">
                  <em>Seleccione</em>
                </MenuItem>
                <MenuItem value={1}>Masculino</MenuItem>
                <MenuItem value={2}>Femenino</MenuItem>
              </Select>
            </FormControl>

            <TextField
              id="email"
              label="Email"
              defaultValue="dummy@gmail.com"
              helperText="Message error"
              variant="standard"
            />
            <TextField
              id="ConfEmail"
              label="Confirmar email"
              defaultValue="dummy@gmail.com"
              helperText="Message error"
              variant="standard"
            />
            <TextField
              id="tel"
              label="Teléfono"
              defaultValue="5555555555"
              helperText="Message error"
              variant="standard"
            />
          </div>
          <h2 className={styles['wrapper__title']}>Dirección</h2>
          <div className={styles['wrapper__content-own']}>
            <TextField
              id="street"
              label="Calle"
              defaultValue="street"
              helperText="Message error"
              variant="standard"
            />
            <TextField
              id="numInt"
              label="Número interior"
              defaultValue="17"
              helperText="Message error"
              variant="standard"
            />
            <TextField
              id="numExt"
              label="Número exterior"
              defaultValue="21"
              helperText="Message error"
              variant="standard"
            />
            <TextField
              id="codPostal"
              label="Código postal"
              defaultValue="01857"
              helperText="Message error"
              variant="standard"
            />
            <TextField
              id="colony"
              label="Colonia"
              defaultValue="México"
              helperText="Message error"
              variant="standard"
            />
            <TextField
              id="municipy"
              label="Delegación"
              defaultValue="Álvaro Obregón"
              helperText="Message error"
              variant="standard"
            />
            <TextField
              id="country"
              label="País"
              defaultValue="México"
              helperText="Message error"
              variant="standard"
            />
          </div>

          <div className={styles['wrapper__terms']}>
            <Radio
              // checked={selectedValue === 'a'}
              // onChange={handleChange}
              value="a"
              name="radio-buttons"
              inputProps={{ 'aria-label': 'A' }}
            />

            <p> He leído y aceptado los </p>
            <Link
              component="button"
              variant="body2"
              href="www.google.com"
            > Términos y condiciones </Link>
            <p> y </p>
            <Link
              component="button"
              variant="body2"
              href="www.google.com"
            > Aviso de privacidad </Link>
          </div>

          <div className={styles['content-save']}>
            <Button variant="contained" disableElevation>
              Guardar
            </Button>

            <Link
              component="button"
              variant="body2"
              onClick={() => navigate("signin", { replace: true })}>
                ¿Ya tienes cuenta?
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}
