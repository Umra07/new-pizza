import { useEffect, useState } from 'react';

export const useScrollPosition = (): number => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const newScrollPosition = window.scrollY;
    setScrollPosition(newScrollPosition);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
};
