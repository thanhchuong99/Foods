'use client';

import { useNetworkMonitor } from '@/hooks/useNetwork';

const ConfigProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  useNetworkMonitor();

  return <>{children}</>;
};

export default ConfigProvider;
