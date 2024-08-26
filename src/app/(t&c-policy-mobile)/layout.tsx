'use client';

import { MasterLayout } from '@/components/AppLayout';
import MasterHeader from '@/components/AppLayout/master/MasterHeader/MasterHeader';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <MasterLayout container={children} header={<MasterHeader isHideActionButtons isHideMenu />} footer={null} />;
}
