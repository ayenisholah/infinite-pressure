import React from 'react';
import HairlineDivider from './HairlineDivider';

const RainbowHeader = ({ text, className }: { text: string; className?: string }) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <HairlineDivider />
      <h2 className="bg-clip-text text-transparent font-bold ip-gradient">{text}</h2>
      <HairlineDivider />
    </div>
  );
};

export default RainbowHeader;
