import { useEffect, useState } from 'react';
import { useScrollPosition } from './useScrollPosition';

export const useFixedBlock = (blockPosition: number | undefined) => {
  const [isFixed, setIsFixed] = useState(false);

  const scrollPosition = useScrollPosition();

  useEffect(() => {
    if (blockPosition && scrollPosition > blockPosition) {
      setIsFixed(true);
    }

    if (blockPosition && scrollPosition < blockPosition) {
      setIsFixed(false);
    }
  }, [scrollPosition, blockPosition]);

  return isFixed;
};
