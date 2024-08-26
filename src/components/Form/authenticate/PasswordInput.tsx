import { InputAdornment, IconButton } from '@mui/material';
import TextField, { TextFieldProps } from '../TextField';
import Image from 'next/image';
import { MouseEvent, useState } from 'react';
import PasswordSvg from 'public/assets/svg/password.svg';

const PasswordInput = (props: TextFieldProps) => {
  const { control, name, ...restProps } = props;
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <TextField
      placeholder="Password"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <PasswordSvg />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              aria-label="toggle password visibility"
            >
              <Image
                src={showPassword ? 'assets/svg/eye-open.svg' : 'assets/svg/eye-close.svg'}
                width={20}
                height={16}
                alt=""
              />
            </IconButton>
          </InputAdornment>
        ),
      }}
      name={name}
      control={control}
      type={showPassword ? 'text' : 'password'}
      {...restProps}
    />
  );
};

export default PasswordInput;
