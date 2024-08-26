import { InputAdornment } from '@mui/material';
import TextField, { TextFieldProps } from '../TextField';
import MailSvg from 'public/assets/svg/mail.svg';

const EmailInput = (props: TextFieldProps) => {
  return (
    <TextField
      {...props}
      placeholder="Email address"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <MailSvg />
          </InputAdornment>
        ),
      }}
      name="email"
      control={props.control}
    />
  );
};

export default EmailInput;
