import React, { memo } from 'react';
import MuiTextField from '@mui/material/TextField';
import { Control, useController } from 'react-hook-form';

export interface TextFieldProps extends React.ComponentProps<typeof MuiTextField> {
  name: string;
  control: Control<any, any, any>;
}

const TextField = <T extends TextFieldProps>(props: T) => {
  const { control, name } = props;
  const {
    field: { ref, ...restField },
    fieldState: { error },
  } = useController({
    control,
    name,
  });

  return (
    <MuiTextField
      inputRef={ref} // send input ref, so we can focus on input when error appear
      {...restField}
      {...props}
      error={!!error}
      helperText={error?.message}
    />
  );
};

export default memo(TextField);
