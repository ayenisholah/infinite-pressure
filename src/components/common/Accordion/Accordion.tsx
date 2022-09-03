import React, { FC, ReactNode } from 'react';
import { Disclosure } from '@headlessui/react';
import { CaretDownIcon } from '../../../icons';

interface AccordionProps {
  className?: string;
  title: string;
  content: string | ReactNode;
  buttonClassName?: string;
  panelClassName?: string;
  isOpen?: boolean;
}

const Accordion: FC<AccordionProps> = (props) => {
  const { className, title = '', content, buttonClassName = '', panelClassName = '', isOpen = false } = props;
  return (
    <div className={className}>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className={`${buttonClassName || 'flex justify-between items-center w-full py-2 text-sm font-bold  border-b-2 border-black'}`}>
              <span>{title}</span>
              <CaretDownIcon className={`h-3 w-3 transition duration-100 ease-out ${open || isOpen ? 'rotate-90' : ''}`} />
            </Disclosure.Button>
            <Disclosure.Panel static={isOpen} className={`${panelClassName || 'mt-2 text-sm font-medium'}`}>
              {content}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Accordion;
