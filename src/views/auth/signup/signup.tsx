import { Controller } from 'react-hook-form';
import useCustomForm from '../../../api/hooks/useCustomForm.hook';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import styles from './signup.module.sass';
import Header from '../../../components/header/header';

const Signup = () => {
  const { handleSubmit, control, formState } = useCustomForm({
    defaultValues: {
      nombre: '',
      email: '',
      password: '',
      rol: '',
      imagen: '',
    },
    onSubmit: (data) => {
      console.log(data);
    },
  });

  const validations = {
    nombre: {
      required: true,
    },
    email: {
      required: true,
    },
    password: {
      required: true,
      pattern: /^[A-Za-z]+$/i,
    },
    rol: {
      required: true,
    },
    imagen: {
      required: true,
    },
  };

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div>
            <label>Nombre</label>
            <Controller
              name="nombre"
              control={control}
              rules={validations.nombre}
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="outlined"
                  label="Nombre"
                  fullWidth
                />
              )}
            />
            {formState.errors.nombre && <p>El campo Nombre es inválido</p>}
          </div>

          <div>
            <label>Correo electrónico</label>
            <Controller
              name="email"
              control={control}
              rules={validations.email}
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="outlined"
                  label="Correo electrónico"
                  fullWidth
                />
              )}
            />
            {formState.errors.email && <p>El campo email es inválido</p>}
          </div>

          <div>
            <label>Contraseña</label>
            <Controller
              name="password"
              control={control}
              rules={validations.password}
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="outlined"
                  label="Contraseña"
                  fullWidth
                  type="password"
                />
              )}
            />
            {formState.errors.password && <p>El campo Contraseña es inválido</p>}
          </div>

          <div>
            <FormControl fullWidth>
              <InputLabel>Rol</InputLabel>
              <Controller
                name="rol"
                control={control}
                rules={validations.rol}
                render={({ field }) => (
                  <Select {...field} variant="outlined">
                    <MenuItem value="usuario">Usuario</MenuItem>
                    <MenuItem value="admin">Administrador</MenuItem>
                  </Select>
                )}
              />
            </FormControl>
            {formState.errors.rol && <p>Debe seleccionar un Rol</p>}
          </div>

          <div>
            <label>Imagen</label>
            <Controller
              name="imagen"
              control={control}
              rules={validations.imagen}
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="outlined"
                  label="Contraseña"
                  fullWidth
                  type="text"
                />
              )}
            />
            {formState.errors.imagen && <p>Debe adjuntar una Imagen</p>}
          </div>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!formState.isValid || !formState.isDirty}
          >
            Enviar
          </Button>
        </form>
      </div>
    </>
  );
};

export default Signup;
