import React, { FC } from 'react';
import IconControl from './IconControl';
import { IconControlProps } from '../../../types';

interface CondensedIconControlProps extends IconControlProps {
  svgClassName?: string;
}

const CondensedIconControl: FC<CondensedIconControlProps> = (props) => {
  return (
    <IconControl {...props}>
      <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={props.svgClassName}>
        <path d="M4 4H8V8H4V4Z" />
        <path d="M4 10H8V14H4V10Z" />
        <path d="M8 16H4V20H8V16Z" />
        <path d="M10 4H14V8H10V4Z" />
        <path d="M14 10H10V14H14V10Z" />
        <path d="M10 16H14V20H10V16Z" />
        <path d="M20 4H16V8H20V4Z" />
        <path d="M16 10H20V14H16V10Z" />
        <path d="M20 16H16V20H20V16Z" />
      </svg>
    </IconControl>
  );
};

export default CondensedIconControl;
