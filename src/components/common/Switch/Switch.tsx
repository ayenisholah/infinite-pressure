import { Switch } from '@headlessui/react';
import React, { FC, useState } from 'react';

interface SwitchProps {
  enabled: boolean;
  onToggle: () => void;
}

const SwitchComponent: FC<SwitchProps> = (props) => {
  const { enabled, onToggle } = props;

  return (
    <Switch checked={enabled} onChange={onToggle} className={`${enabled ? 'bg-black' : 'bg-gray-200'} relative inline-flex items-center h-6 rounded-full w-11`}>
      <span className="sr-only">Enable notifications</span>
      <span className={`${enabled ? 'translate-x-6' : 'translate-x-1'} inline-block w-4 h-4 transform bg-white rounded-full`} />
    </Switch>
  );
};

export default SwitchComponent;
