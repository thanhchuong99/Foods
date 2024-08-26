'use client';
import Form from '@/components/Form';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, MenuItem } from '@mui/material';
import { useEffect } from 'react';
import { useToast } from '@/hooks/useToast';
import { useLoading } from '@/queries/useLoading';
import api from '@/configs/api';

type FormValues = {
  firstName: string;
  gender: string;
};

const gender = [
  {
    name: 'Male',
    value: 'male',
  },
  {
    name: 'Female',
    value: 'female',
  },
  {
    name: 'Other',
    value: 'other',
  },
];
const schema: yup.ObjectSchema<FormValues> = yup.object().shape({
  firstName: yup.string().required('Required field.'),
  gender: yup.string().required('Required field.'),
});
const Example = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: 'aaa',
      gender: 'female',
    },
  });
  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  const { error, success } = useToast();
  useEffect(() => {
    error(new Error('test'));
    success('Success');
    const app = async () => {
      await api.user.me();
    };
    app();
  }, []);
  const { showLoading, hideLoading } = useLoading();
  const handleShowLoading = () => {
    showLoading();
    setTimeout(() => {
      hideLoading();
    }, 2000);
  };

  return (
    <>
      {/* // Use cx to organize className */}
      <Form onSubmit={handleSubmit(onSubmit)} className="flex !flex-col gap-2">
        <Form.TextField name="firstName" control={control} label="First Name" />
        <Form.TextField name="gender" control={control} select label="gender">
          {gender.map(item => (
            <MenuItem key={item.value} value={item.value}>
              {item.name}
            </MenuItem>
          ))}
        </Form.TextField>
        <Form.SubmitButton control={control}>Submit</Form.SubmitButton>
      </Form>
      <Button onClick={handleShowLoading}>ShowLoading</Button>
    </>
  );
};

export default Example;
