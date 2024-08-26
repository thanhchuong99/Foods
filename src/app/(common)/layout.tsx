import AppLayout from '@/components/AppLayout';

export default async function Layout({ children }: { children: React.ReactNode }) {
  return <AppLayout>{children}</AppLayout>;
}
