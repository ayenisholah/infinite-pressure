import React, { Fragment, useState, FC } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import styled from 'styled-components';
import { CaretDownIcon } from '../../../icons';

interface SelectProps {
  labelTitle?: string;
  selectedClassName?: string;
  className?: string;
  children: React.ReactNode;
  onSelect: (selected: any) => void;
  items: any;
}

const Select: FC<SelectProps> = (props) => {
  const { className, labelTitle, selectedClassName, children, items, onSelect } = props;
  const [selected, setSelected] = useState();

  const onChange = (isSelected: any) => {
    setSelected(isSelected);
    onSelect(isSelected);
  };

  return items?.length ? (
    <Wrap className={className}>
      <Listbox value={selected} onChange={onChange}>
        <div className="relative">
          <Listbox.Button
            className={`
              list-box-button relative w-full border border-[lightgray]  
              pr-2 h-10 text-left 
              focus:outline-none text-xs cursor-pointer
            `}
          >
            <div
              className="text-xs font-medium
                bg-gray-100  h-full flex justify-center items-center  text-center
                border-r border-gray-300 w-24
              "
            >
              Sort Order
            </div>
            <span
              className={`
                absolute inset-y-0 right-0 
                flex items-center pr-2 
                pointer-events-none
              `}
            >
              {labelTitle}
              <CaretDownIcon className="ml-4 h-3.5 w-3.5" />
            </span>
          </Listbox.Button>
          <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
            <Listbox.Options className="list-box-option z-10 mt-4 w-full shadow-lg max-h-60 rounded py-1 text-base overflow-auto focus:outline-none sm:text-sm absolute border border-black bg-white">
              {children}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </Wrap>
  ) : null;
};

const Wrap = styled.div`
  .list-box-button {
    background: #ffffff;
  }

  .list-box-option {
    background: #ffffff;
  }

  .option-active {
    background: #0000;
  }

  .option {
    background: #fff;
  }
`;

export default Select;
