/* eslint-disable react/no-array-index-key */
import React, { FC } from 'react';

interface SkeletonProps {
  className?: string;
  count?: number;
}

const Card: FC = () => (
  <div className="flex flex-col">
    <div className="animate-pulse mr-4 mt-4 w-full aspect-w-7 aspect-h-10 bg-gray-200 rounded-md" />
    <div className="animate-pulse mr-4 mt-4 w-full h-4 bg-gray-200 rounded-md" />
    <div className="animate-pulse mr-4 mt-4 w-full h-4 bg-gray-200 rounded-md" />
  </div>
);

const SkeletonComponent: FC<SkeletonProps> = (props) => {
  const { className = '', count = 9 } = props;
  return (
    <div className={className}>
      {[...Array(count)].map((elem, i) => (
        <Card key={i} />
      ))}
    </div>
  );
};

export default SkeletonComponent;
