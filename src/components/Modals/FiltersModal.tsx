import React, { FC, useEffect, useState } from 'react';
import { XIcon } from '@heroicons/react/solid';
import { useAtom } from 'jotai';
import * as _ from 'lodash';
import Modal from '../common/Modal/Modal';
import { filterSettingsModalIsOpen, collectionFilterAtom } from '../../atoms';
import { borderColor, collabColor, traits } from '../../helpers/constants';

interface AlertsModalProps {
  className?: string;
}

const staggers = ['-rotate-1', 'rotate-0 translate-x-2', 'rotate-0', 'rotate-0 -translate-x-2', 'rotate-2', 'rotate-1', '-rotate-2 z-20'];

const renderTraits = (traitType: string) => {
  return traits
    .filter((t) => t.traitType === traitType)
    .map((t) => {
      if (traitType === 'Border') {
        return <Trait key={t.value} traitValue="Border" color={borderColor} traitDisplay="Border" />;
      }
      if (traitType === 'Collaboration') {
        return <Trait key={t.value} traitValue="Collaboration" color={collabColor} traitDisplay="Collaboration" />;
      }
      return <Trait key={t.value} traitValue={t.value} gradient={t.gradient} color={t.color} traitDisplay={t.value} />;
    });
};

const renderTraitType = (traitType: string, mh: string = '') => {
  return (
    <div className="text-left">
      <h3 className="apple text-lg tracking-wide">{traitType.toUpperCase()}</h3>
      <div className="font-thin rounded bg-white p-5 shadow-md overflow-scroll" style={{ maxHeight: mh || '' }}>
        {renderTraits(traitType)}
      </div>
    </div>
  );
};

// TRAIT HERE //
const Trait: FC<{ traitValue: string; traitDisplay?: string; gradient?: string; color?: string }> = ({ traitValue, traitDisplay = '', gradient = '', color = '' }) => {
  const [filters, setFilters] = useAtom(collectionFilterAtom);
  const [isHovered, setIsHovered] = useState(false);
  const updateTraits = (trait: string) => {
    setFilters((filters: any) => {
      if (filters.includes(trait)) {
        return filters.filter((item: string) => item !== trait);
      }
      return [...filters, trait];
    });
  };

  const isSelected = filters.includes(traitValue);

  const gradientStyle = {
    backgroundImage: `url(${gradient})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    border: 0,
    fontWeight: 'bold',
    color: 'white',
    margin: 2,
    opacity: isSelected || isHovered ? 1 : 0.25,
  };

  const colorStyle = {
    border: isSelected ? '1px solid #00000025' : '1px solid #0000000d',
    color: isSelected ? 'white' : 'black',
    fontWeight: isSelected ? 'bold' : '',
    backgroundColor: isSelected ? color : 'white',
    zIndex: isSelected ? 20 : 10,
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={gradient ? gradientStyle : colorStyle}
      className={`
        hover:scale-105 transition duration-75
        select-none p-1 shadow-sm cursor-pointer relative
        ${_.sample(staggers)}        
      `}
      onClick={() => updateTraits(traitValue)}
    >
      {traitDisplay || traitValue}
    </div>
  );
};

const FiltersModal: FC<AlertsModalProps> = (props) => {
  const { className } = props;
  const [modalIsOpen, setModalIsOpen] = useAtom(filterSettingsModalIsOpen);
  const [filters, setFilters] = useAtom(collectionFilterAtom);

  return (
    <div id="goddamn-modal" className={`${className}`}>
      <Modal
        open={modalIsOpen}
        onClose={() => {
          setModalIsOpen(false);
        }}
      >
        <div
          className={`
          apple-form
          inline-block align-bottom 
          overflow-hidden 
          transform transition-all 
          sm:my-8 sm:align-middle
        `}
        >
          <div
            className={`
            border-b border-black border-opacity-20 h-12 items
            flex justify-between items-center px-4
           `}
          >
            <div
              onClick={() => setModalIsOpen(false)}
              className={`
                cursor-pointer absolute
                bg-ipRed border-black border border-opacity-20 h-5 w-5 rounded-full flex justify-center items-center
              `}
            >
              <XIcon className="h-4 opacity-0 hover:opacity-60" />
            </div>
            <div className="text-center w-full">
              <h2 className="apple  text-xl">Filter Settings</h2>
            </div>
          </div>
          <div className="p-10 ">
            <div className="flex flex-col md:grid md:grid-cols-3 md:gap-4">
              <div className="bg-ip-red space-y-4 col-span-1 row-span-2 flex-1">
                {renderTraitType('Color Base')}
                {renderTraitType('Color Advanced', '500px')}
              </div>
              <div className="bg-ip-red col-span-1 row-span-2 space-y-4">
                {renderTraitType('Composition')}
                {renderTraitType('Elements')}
              </div>
              <div className="bg-ip-red space-y-4 col-span-1 row-span-2">
                {renderTraitType('Border')}
                {renderTraitType('Collaboration')}
                {renderTraitType('Collaborator')}
                <div
                  onClick={() => {
                    if (filters.length) setFilters([]);
                    else setModalIsOpen(false);
                  }}
                  className={`
                    bg-ipRed apple text-xl           
                    p-10 text-white hover:scale-105 
                    shadow transition cursor-pointer
                  `}
                >
                  {filters.length ? 'Clear All' : 'Close'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default FiltersModal;
