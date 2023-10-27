import { useForm } from 'react-hook-form';

type UseCustomFormProps = {
  defaultValues?: Record<string, any>;
  onSubmit: (data: Record<string, any>) => void;
};

const useCustomForm = ({ defaultValues = {}, onSubmit }: UseCustomFormProps) => {

  const { handleSubmit, control, formState, reset, setValue } = useForm({
    defaultValues,
  });

  const onSubmitHandler = (data: any) => {
    onSubmit(data);
    reset();
  };

  const updateDefaultValues = (newValues: Record<string, any>) => {
    for (const key in newValues) {
      setValue(key, newValues[key]);
    }
  };

  return {
    handleSubmit: handleSubmit(onSubmitHandler),
    control,
    formState,
    reset,
    updateDefaultValues,
  };
};

export default useCustomForm;
