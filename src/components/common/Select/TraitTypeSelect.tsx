import React, { FC } from 'react';
import { useAtom } from 'jotai';
import Select from './Select';
import SelectOption from './SelectOption';
import { traitTypes } from '../../../helpers/constants';
import { selectedTraitTypeAtom } from '../../../atoms';

const FilterCategorySelect: FC = () => {
  const [, setTraitType] = useAtom(selectedTraitTypeAtom);

  const handleChange = (traitType: string) => {
    setTraitType(traitType);
  };

  return (
    <Select className="col-span-1" onSelect={handleChange} items={traitTypes} labelTitle="Select Trait Type">
      {traitTypes.map((traitType) => (
        <SelectOption key={traitType} optionClassName="text-xs hover:font-bold" value={traitType} />
      ))}
    </Select>
  );
};

export default FilterCategorySelect;
