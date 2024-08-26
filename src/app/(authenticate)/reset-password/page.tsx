import ResetPassword from '@/sections/reset-password';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reset Password',
};

const Login = () => {
  return <ResetPassword />;
};

export default Login;
