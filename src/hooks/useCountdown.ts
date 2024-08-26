import { useEffect, useRef, useState } from 'react';

const useCountdown = (initialCountdown: number) => {
  const [time, setTime] = useState(initialCountdown);
  const [isCounting, setIsCounting] = useState(false);
  const ref = useRef<NodeJS.Timeout>();

  const start = () => {
    setIsCounting(true);
    ref.current = setInterval(() => {
      setTime(prev => {
        if (prev === 0) {
          clearInterval(ref.current!);

          return 0;
        }

        return prev - 1;
      });
    }, 1000);
  };

  const stop = () => {
    clearInterval(ref.current!);
    setIsCounting(false);
  };

  const clear = () => {
    clearInterval(ref.current!);
    setTime(initialCountdown);
    setIsCounting(false);
  };

  useEffect(() => {
    if (time === 0) {
      clear();
    }
  }, [time]);

  return {
    time,
    isCounting,
    start,
    stop,
    clear,
  };
};

export default useCountdown;
