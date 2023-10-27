import { Controller } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../../redux/hooks';

import useCustomForm from '../../../../api/hooks/useCustomForm.hook';
import { categoryById, createCategory, updateCategory } from '../../../../redux/asyncThunk/category.thunk';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddCategory = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [formDefaultValues] = useState({
    name: '',
    image: '',
  });

  const { handleSubmit, control, formState, updateDefaultValues } = useCustomForm({
    defaultValues: formDefaultValues,
    onSubmit: (data) => {
      console.log(data);

      if (id) {
        dispatch(updateCategory({id, ...data}));
      } else {
        dispatch(createCategory(data));
      }

      navigate('/manager/categories');
    },
  });

  useEffect(() => {

    if (id) {
      dispatch(categoryById(id))
        .then((response: any) => {
          updateDefaultValues(response.payload);
        });
    }
  }, [id]);

  const validations = {
    name: {
      required: 'Nombre es obligatorio',
    },
    image: {
      required: 'Imagen es obligatoria',
      pattern: {
        value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif))$/,
        message: 'URL de imagen no válida',
      },
    },
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1> {id ? 'Actualizar categoría' : 'Agregar categoría'} </h1>
      <div>
        <Controller
          name="name"
          control={control}
          rules={validations.name}
          render={({ field }) => (
            <TextField
              {...field}
              variant="outlined"
              label="Nombre"
              fullWidth
            />
          )}
        />
        {formState.errors.name && <p> El nombre es inválido </p>}
      </div>

      <div>
        <Controller
          name="image"
          control={control}
          rules={validations.image}
          render={({ field }) => (
            <TextField
              {...field}
              variant="outlined"
              label="URL de la Imagen"
              fullWidth
            />
          )}
        />
        {formState.errors.image && <p> La imagen es inválida </p>}
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
  );
};

export default AddCategory;
