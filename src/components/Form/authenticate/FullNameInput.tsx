import { InputAdornment } from '@mui/material';
import TextField, { TextFieldProps } from '../TextField';
import UserSvg from 'public/assets/svg/user.svg';

const FullNameInput = (props: TextFieldProps) => {
  return (
    <TextField
      {...props}
      placeholder="Full Name"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <UserSvg />
          </InputAdornment>
        ),
      }}
      name={props.name}
      control={props.control}
    />
  );
};

export default FullNameInput;
