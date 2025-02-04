import { TextField } from '@mui/material';

interface InputFieldProps {
  label: string;
  placeholder: string;
  register: any;
  error?: boolean;
  helperText?: string;
}
const InputField = ({ label, placeholder, register, error, helperText }: InputFieldProps) => {
  return (
    <TextField
      {...register}
      label={label}
      variant="outlined"
      fullWidth
      placeholder={placeholder}
      sx={{
        marginBottom: 2,
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#40E0D0',
          },
          '&:hover fieldset': {
            borderColor: '#40E0D0',
          },
          '& input': {
            color: '#fff',
          },
        },
        '& input::placeholder': {
          color: '#40E0D0',
        },
      }}
      error={error}
      helperText={helperText}
    />
  );
};

export default InputField;
