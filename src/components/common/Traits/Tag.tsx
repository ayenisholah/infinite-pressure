import { useAtom } from 'jotai';
import router from 'next/router';
import React, { FC } from 'react';
import { collectionFilterAtom } from '../../../atoms';
import { CloseIcon } from '../../../icons';

interface TagProps {
  trait: any;
  color: string;
  isLink?: boolean;
  className?: string;
  gradient?: string;
}

const FilterTag: FC<TagProps> = ({ trait, color, isLink, className = '', gradient = '' }) => {
  const [, setFilters] = useAtom(collectionFilterAtom);

  const removeTrait = () => {
    if (trait === 'Border') {
      setFilters((filters: string[]) => filters.filter((item) => item !== 'border'));
    }
    if (trait === 'Collaboration') {
      setFilters((filters: string[]) => filters.filter((item) => item !== 'collab'));
    }
    setFilters((filters: string[]) => filters.filter((item) => item !== trait));
  };

  const showCollectionWithTrait = () => {
    setFilters([trait]);
    router.push('/');
  };

  const gradientStyle = {
    backgroundImage: `url(${gradient})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    border: 0,
  };

  const solidColorStyle = { backgroundColor: color };

  return (
    <div
      onClick={isLink ? showCollectionWithTrait : removeTrait}
      style={gradient ? gradientStyle : solidColorStyle}
      className={`
        ${className} 
        border border-black border-opacity-5
        transform-all duration-100 pixel-font p-2 sm:p-3 
        text-white text-sm sm:text-sm 
        cursor-pointer hover:scale-105 hover:shadow-md  
        relative
      `}
    >
      <div className="">
        {trait}
        {!isLink && <CloseIcon className="inline h-5 w-5 fill-white" />}
      </div>
    </div>
  );
};

export default FilterTag;
