import RegisterPage from '@/sections/register';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register',
};

const Register = () => {
  return <RegisterPage />;
};

export default Register;
