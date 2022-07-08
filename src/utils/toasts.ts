import toast from 'react-hot-toast';

export const success = (msg: string) =>
  toast.success(msg, {
    position: 'bottom-center',
  });

export const error = (msg: string) =>
  toast.error(msg, {
    position: 'bottom-center',
  });
