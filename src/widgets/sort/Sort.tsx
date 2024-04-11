import React, { useEffect, useRef, useState } from 'react';
import { IconWrapper } from '../../shared/ui/pizza-icon/IconWrapper';
import { IconName, icons } from '../../assets/icons';
import { Sort, SortPropertyEnum, setSortType } from '../../entities/filters';
import { useAppDispatch } from '../../shared/model';
import { PopupClick, SortItem } from './types';

interface SortProps {
  sort: Sort;
}

const sortList: SortItem[] = [
  { name: 'popularity ↑', sortProperty: SortPropertyEnum.RATING_DESC },
  { name: 'popularity ↓', sortProperty: SortPropertyEnum.RATING_ASC },
  { name: 'price ↑', sortProperty: SortPropertyEnum.PRICE_DESC },
  { name: 'price ↓', sortProperty: SortPropertyEnum.PRICE_ASC },
  { name: 'alphabet(A - Z)', sortProperty: SortPropertyEnum.TITLE_DESC },
  { name: 'alphabet(Z - A)', sortProperty: SortPropertyEnum.TITLE_ASC },
];

const SortPopup: React.FC<SortProps> = React.memo(({ sort }) => {
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as PopupClick;
      if (sortRef.current && !_event.path.includes(sortRef.current)) {
        setIsVisiblePopup(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const dispatch = useAppDispatch();

  const [isVisiblePopup, setIsVisiblePopup] = useState(false);

  const selectSortHandler = (obj: SortItem) => {
    dispatch(setSortType(obj));
    setIsVisiblePopup(false);
  };

  return (
    <div
      ref={sortRef}
      className="sort"
      onClick={() => setIsVisiblePopup((prevState) => !prevState)}>
      <div className="sort__label">
        <IconWrapper children={icons[IconName.SORTBUTTON]} />
        <b>Sort by:</b>
        <span onClick={() => setIsVisiblePopup((prevState) => !prevState)}>{sort.name}</span>
      </div>
      {isVisiblePopup && (
        <div className="sort__popup">
          <ul>
            {sortList.map((obj, i) => (
              <li
                key={i}
                onClick={() => selectSortHandler(obj)}
                className={obj.sortProperty === sort.sortProperty ? 'active' : ''}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});

export default SortPopup;
