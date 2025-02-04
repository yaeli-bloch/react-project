import { Button } from '@mui/material';

interface SubmitButtonProps {
  type: 'submit' | 'button';
  onClick?: () => void;
}
const SubmitButton = ({ type, onClick }: SubmitButtonProps) => {
  return (
    <Button
      type={type}
      variant="contained"
      color="success"
      fullWidth
      sx={{
        padding: '10px',
        backgroundColor: '#40E0D0',
        '&:hover': { backgroundColor: '#00b5b5' },
      }}
      onClick={onClick}
    >
      Submit
    </Button>
  );
};
export default SubmitButton;
