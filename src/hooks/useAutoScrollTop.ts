import { useEffect } from 'react';

const useAutoScrollTop = (...dependencies: any[]) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [...dependencies]);
};

export default useAutoScrollTop;
