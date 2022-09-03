import React, { FC, ReactNode } from 'react';
import { IconControlProps } from '../../../types';

const IconControl: FC<IconControlProps> = ({ className, onClick, children, toolTip = '' }) => {
  return (
    <div className={`cursor-pointer relative group ${className}`} onClick={onClick}>
      {toolTip && (
        <div className="z-10 opacity-0 translate-y-5 -translate-x-5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition">
          <div className="absolute w-28 text-center p-1 -top-8 left-6 text-[8pt] text-white bg-black">{toolTip}</div>
        </div>
      )}
      {children}
    </div>
  );
};

export default IconControl;
