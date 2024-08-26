'use client';
import AuthenticateLayout from '@/components/AuthenticateLayout';
import { PublicRoute } from '@/components/Route';
import { Router } from '@/util/Router';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PublicRoute
      shouldShowConfirmLogout={[
        Router.VerifyRegister,
        Router.ResetPassword,
        Router.CheckYourEmail,
        Router.ResetPassword,
      ]}
    >
      <AuthenticateLayout>{children}</AuthenticateLayout>
    </PublicRoute>
  );
}
