import { ToastContent, ToastOptions, toast } from 'react-toastify';

export const useToast = () => {
  const error = <T = unknown>(error: T, options?: ToastOptions<T> | undefined) => {
    toast.error(error instanceof Error ? error.message : String(error), {
      hideProgressBar: true,
      ...options,
    });
  };

  const success = (message: ToastContent<unknown>, options?: ToastOptions<unknown> | undefined) => {
    toast.success(message, {
      hideProgressBar: true,
      ...options,
    });
  };

  return { error, success };
};
