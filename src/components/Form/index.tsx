import { withProperties } from '@/util/types';
import React from 'react';
import TextField from './TextField';
import SubmitButton from './SubmitButton';

interface AppFormProps extends React.HTMLProps<HTMLFormElement> {
  children: React.ReactNode;
}

const AppForm: React.FC<AppFormProps> = React.memo(props => {
  const { children, ...formProps } = props;

  return (
    <form noValidate {...formProps}>
      {children}
    </form>
  );
});

export default withProperties(AppForm, { TextField, SubmitButton });
