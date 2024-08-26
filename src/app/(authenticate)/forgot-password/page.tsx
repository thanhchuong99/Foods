import ForgotPassword from '@/sections/forgot-password';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Forgot password',
};

const Login = () => {
  return <ForgotPassword />;
};

export default Login;
