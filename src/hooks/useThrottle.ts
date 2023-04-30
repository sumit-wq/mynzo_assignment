import { useState, useCallback } from "react";

const useThrottle = (callback: Function, delay: number) => {
  const [lastCalled, setLastCalled] = useState(0);

  const throttledCallback = useCallback(
    (...args: any[]) => {
      const now = Date.now();
      if (now - lastCalled >= delay) {
        setLastCalled(now);
        callback(...args);
      }
    },
    [callback, delay, lastCalled]
  );

  return throttledCallback;
};

export default useThrottle;
