import React, { FC } from 'react';
import { BookmarkProps } from '../../types';

const Bookmark: FC<BookmarkProps> = ({ className, isWatching, onClick, fillColor }) => {
  return (
    <div
      onClick={onClick}
      className={`
        ${className} ${isWatching ? 'opacity-100' : 'opacity-20 hover:opacity-60'}
          hover:scale-105 transition cursor-pointer
      `}
    >
      <svg fill={isWatching ? fillColor : 'black'} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 472.615 472.615" xmlSpace="preserve">
        <g>
          <g>
            <polygon points="236.307,0 96.738,0 96.738,472.615 236.307,365.585 375.877,472.615 375.877,0" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Bookmark;
