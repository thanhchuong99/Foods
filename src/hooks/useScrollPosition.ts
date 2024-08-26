import { useEffect } from 'react';

function useScrollPosition(callback: (isScrolled: boolean) => void) {
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      callback(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [callback]);
}

export default useScrollPosition;
