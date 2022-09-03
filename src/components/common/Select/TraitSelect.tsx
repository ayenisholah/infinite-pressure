/* eslint-disable no-console */
import React, { FC, useEffect, useState, Fragment } from 'react';
import { useAtom } from 'jotai';
import { Listbox, Transition } from '@headlessui/react';
import styled from 'styled-components';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { CaretDownIcon } from '../../../icons';
import { selectedTraitTypeAtom, traitSelectIsOpenAtom, collectionFilterAtom } from '../../../atoms';
import { traits } from '../../../helpers/constants';

interface SelectProps {
  labelTitle?: string;
  selectedClassName?: string;
  className?: string;
  children: React.ReactNode;
  // eslint-disable-next-line no-unused-vars
  onSelect: (selected: any) => void;
  items: any;
}

const MultiSelect: FC<SelectProps> = (props) => {
  const { className, labelTitle, selectedClassName, children, items, onSelect } = props;
  const [, setSelected] = useState();
  const [isOpen, setIsOpen] = useAtom(traitSelectIsOpenAtom);

  const onChange = (isSelected: any) => {
    setSelected(isSelected);
    onSelect(isSelected);
  };

  const ref = useDetectClickOutside({
    onTriggered: () => {
      setIsOpen(false);
    },
  });

  return items?.length ? (
    <Wrap ref={ref} className={className}>
      <Listbox value={traits} onChange={onChange}>
        <div className="relative">
          <div onClick={() => setIsOpen(!isOpen)}>
            <Listbox.Button className="list-box-button relative w-full border border-black rounded pl-6 pr-2 py-2 text-left focus:outline-none text-xs cursor-pointer">
              <span className={`${selectedClassName || 'block text-xs font-medium'}`}>{labelTitle}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <CaretDownIcon className="h-3.5 w-3.5" />
              </span>
            </Listbox.Button>
          </div>
          {isOpen && (
            <div>
              <Transition show as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                <Listbox.Options
                  static
                  className="list-box-option z-10 mt-4 w-full shadow-lg max-h-60 rounded py-1 text-base overflow-auto focus:outline-none sm:text-sm absolute border border-black bg-white"
                >
                  {children}
                </Listbox.Options>
              </Transition>
            </div>
          )}
        </div>
      </Listbox>
    </Wrap>
  ) : null;
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

interface MultiSelectOptionProps {
  value: string;
  disabled?: boolean;
  disabledMessage?: string;
  optionClassName?: string;
}

const MultiSelectOption: FC<MultiSelectOptionProps> = (props) => {
  const { value, disabled = false, disabledMessage = '', optionClassName = '' } = props;
  const [filters] = useAtom(collectionFilterAtom);
  const selected = filters.includes(value);

  return (
    <Listbox.Option
      className={({ active }: { active: boolean }) => classNames(active ? 'option-active' : 'option', disabled ? 'opacity-40' : '', 'cursor-pointer select-none relative py-2 pl-3 pr-9')}
      disabled={disabled}
      value={value}
    >
      {() => (
        <span className={classNames(selected && !disabled ? 'font-semibold' : 'font-normal', 'flex justify-between truncate', optionClassName)}>
          {value}
          {disabled && <span className="font-normal text-sm">{disabledMessage}</span>}
        </span>
      )}
    </Listbox.Option>
  );
};

const FilterSelect: FC = () => {
  const [traitType] = useAtom(selectedTraitTypeAtom);
  const [, setFilters] = useAtom(collectionFilterAtom);
  const [options, setOptions] = useState<Array<string>>([]);

  useEffect(() => {
    const newOptions = traits.filter((trait) => trait.traitType === traitType).map((trait) => trait.value);
    setOptions(newOptions);
  }, [traitType]);

  const updateTraits = (trait: string) => {
    setFilters((filters: any) => {
      if (filters.includes(trait)) {
        return filters.filter((item: string) => item !== trait);
      }
      return [...filters, trait];
    });
  };

  return (
    <MultiSelect className="col-span-1" onSelect={updateTraits} items={options} labelTitle="Select Trait Value">
      {options.map((trait) => (
        <MultiSelectOption key={trait} optionClassName="text-xs hover:font-bold" value={trait} />
      ))}
    </MultiSelect>
  );
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

export default FilterSelect;
