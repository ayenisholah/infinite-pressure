/* eslint-disable react/no-array-index-key */
import React, { FC } from 'react';

interface SkeletonProps {
  className?: string;
}

const SkeletonComponent: FC<SkeletonProps> = (props) => {
  const { className = '' } = props;
  return (
    <div className={className}>
      <div className="relative py-4 w-full overflow-hidden mb-36">
        <div className="animate-pulse flex flex-col lg:flex-row lg:space-x-10">
          <div className="flex w-full lg:w-[55%] justify-center lg:justify-end">
            <div className="mr-4 w-10/12 lg:w-full aspect-w-7 aspect-h-9 lg:aspect-h-10 bg-gray-200 rounded-md" />
          </div>
          <div className="flex-1 mt-4 lg:mt-0">
            <div className="mt-2 w-full h-6 bg-gray-200 rounded-md" />
            <div className="flex justify-between mt-4">
              <div className="w-4/12 h-4 bg-gray-200 rounded-md" />
              <div className="w-4/12 h-4 bg-gray-200 rounded-md" />
            </div>
            <div className="mt-2 w-full h-8 bg-gray-200 rounded-md" />
            <div className="mt-6 w-full h-6 bg-gray-200 rounded-md" />
            <div className="mt-4 w-full h-6 bg-gray-200 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonComponent;
