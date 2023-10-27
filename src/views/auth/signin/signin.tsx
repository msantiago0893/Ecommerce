import { Controller } from 'react-hook-form';
import useCustomForm from '../../../api/hooks/useCustomForm.hook';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Signin = () => {
  const { handleSubmit, control, formState } = useCustomForm({
    defaultValues: {
      email: '',
      password: '',
    },
    onSubmit: (data) => {
      console.log(data);
    },
  });

  const validations = {
    email: {
      required: true,
    },
    password: {
      required: true,
      pattern: /^[A-Za-z]+$/i,
    },
  };

  return (
    <form onSubmit={handleSubmit}>
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
              variant="outlined" // Puedes personalizar los atributos de TextField según tus necesidades
              label="Contraseña"
              fullWidth
              type="password"
            />
          )}
        />
        {formState.errors.password && <p>El campo Contraseña es inválido</p>}
      </div>

      <Button
        type="submit"
        variant="contained" // Puedes personalizar el botón según tus necesidades
        color="primary" // Puedes cambiar el color del botón
        disabled={!formState.isValid || !formState.isDirty}
      >
        Enviar
      </Button>
    </form>
  );
};

export default Signin;
