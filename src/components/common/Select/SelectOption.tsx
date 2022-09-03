/* eslint-disable react/no-unused-prop-types */
import React, { FC } from 'react';
import { Listbox } from '@headlessui/react';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

interface SelectOptionProps {
  value: string;
  disabled?: boolean;
  disabledMessage?: string;
  optionClassName?: string;
  isActive?: boolean;
}

const SelectOption: FC<SelectOptionProps> = (props) => {
  const { value, disabled = false, disabledMessage = '', optionClassName = '', isActive = false } = props;

  return (
    <Listbox.Option
      className={({ active }: { active: boolean }) => classNames(active ? 'option-active' : 'option', disabled ? 'opacity-40' : '', 'cursor-pointer select-none relative py-2 pl-3 pr-9')}
      disabled={disabled}
      value={value}
    >
      {({ selected }: { selected: boolean }) => (
        <span className={classNames(selected && !disabled ? 'font-semibold' : '', 'flex justify-between truncate', isActive ? 'font-bold' : '', optionClassName)}>
          {value}
          {disabled && <span className="font-normal text-sm">{disabledMessage}</span>}
        </span>
      )}
    </Listbox.Option>
  );
};

export default SelectOption;
