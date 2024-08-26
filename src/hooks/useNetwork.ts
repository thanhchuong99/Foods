import { useEffect, useRef } from 'react';
import { Id, toast } from 'react-toastify';

export const useNetworkMonitor = () => {
  const ref = useRef(true);
  const toastId = useRef<Id | null>(null);

  const handleStatusChange = () => {
    const onLine = window?.navigator?.onLine;

    if (toastId.current) toast.dismiss(toastId.current);

    if (onLine !== ref.current) {
      if (onLine) {
        toastId.current = toast.success('Network is connected.', {
          autoClose: 3000,
          position: 'top-center',
          hideProgressBar: true,
        });
      } else {
        toastId.current = toast.error('Network is disconnected.', {
          autoClose: 3000,
          position: 'top-center',
          hideProgressBar: true,
        });
      }
    }
    ref.current = onLine;
  };

  useEffect(() => {
    window.addEventListener('online', handleStatusChange);
    window.addEventListener('offline', handleStatusChange);

    return () => {
      window.removeEventListener('online', handleStatusChange);
      window.removeEventListener('offline', handleStatusChange);
    };
  }, []);
};
