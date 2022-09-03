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
        <div className="animate-pulse flex flex-col">
          <div className="mt-2 mb-4 w-6/12 h-8 bg-gray-200 rounded-md" />
          <div className="w-full aspect-w-10 aspect-h-6 bg-gray-200 rounded-md" />
          <div className="flex flex-col md:flex-row mt-6">
            <div className="w-full md:w-1/2 flex flex-col">
              <div className="w-full h-8 bg-gray-200 rounded-md" />
              <div className="w-full h-4 bg-gray-200 rounded-md mt-2" />
              <div className="w-full h-8 bg-gray-200 rounded-md mt-10" />
              <div className="w-full h-4 bg-gray-200 rounded-md mt-2" />
              <div className="w-full h-8 bg-gray-200 rounded-md mt-10" />
            </div>
            <div className="w-full mt-4 md:mt-0 md:w-1/2 flex flex-col md:ml-10">
              <div className="w-full h-4 bg-gray-200 rounded-md" />
              <div className="w-full h-10 bg-gray-200 rounded-md mt-2" />
              <div className="flex">
                <div className="w-3/12 h-4 bg-gray-200 rounded-md mt-8 mr-4" />
                <div className="w-3/12 h-4 bg-gray-200 rounded-md mt-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonComponent;
