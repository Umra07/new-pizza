import { Dispatch, useEffect, useState } from 'react';
import { useWindowDimensions } from '../../../shared/lib/useWindowDimensions';

export const useActiveNavigationButton = (): [string, Dispatch<React.SetStateAction<string>>] => {
  const [activeId, setActiveId] = useState('');
  const dimensions = useWindowDimensions();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.products') as NodeListOf<HTMLElement>;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.clientHeight;

        if (window.scrollY + 10 >= top && window.scrollY < top + height) {
          const id = section.getAttribute('id');
          if (id) {
            setActiveId(id);
          }
        }
      });

      if (window.scrollY < sections[0].offsetTop) {
        setActiveId('');
      }
    };

    if (dimensions.width > 570) {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [dimensions.width]);

  return [activeId, setActiveId];
};
