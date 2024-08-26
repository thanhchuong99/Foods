import { dark } from '@/theme/colors';
import { Checkbox, FormControl, FormControlLabel, FormHelperText } from '@mui/material';
import CheckBoxSvg from 'public/assets/svg/checkbox.svg';
import CheckedCheckBoxSvg from 'public/assets/svg/checked-checkbox.svg';
import React from 'react';
import { Control, useController } from 'react-hook-form';

interface CheckboxInputProps extends Omit<React.ComponentProps<typeof FormControlLabel>, 'control'> {
  shouldShowError?: boolean;
  formControl: Control<any, any, any>;
  helperText?: string;
  name: string;
}

const CheckboxInput = ({ formControl, label, name, shouldShowError = true, ...restProps }: CheckboxInputProps) => {
  const {
    field: { ref, ...restField },
    fieldState: { error },
  } = useController({
    control: formControl,
    name,
  });

  return (
    <FormControl error={!!error}>
      <FormControlLabel
        {...restProps}
        sx={{
          marginLeft: '0',

          '.MuiFormControlLabel-label': {
            color: dark[40],
          },

          '.MuiCheckbox-root': {
            padding: '0 8px 0 0',
          },
        }}
        control={
          <Checkbox
            checked={restField.value}
            ref={ref}
            icon={<CheckBoxSvg />}
            checkedIcon={<CheckedCheckBoxSvg />}
            {...restField}
          />
        }
        label={label}
      />
      {shouldShowError && <FormHelperText>{error?.message}</FormHelperText>}
    </FormControl>
  );
};

export default CheckboxInput;
