import React, { ReactNode, FC, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface ModalProps {
  className?: string;
  open: boolean;
  children?: ReactNode;
  showOverlay?: boolean;
  overlayClassName?: string;
  // eslint-disable-next-line no-unused-vars
  onClose: (selected: any) => void;
}

const Modal: FC<ModalProps> = (props) => {
  const { className, children, open, onClose, showOverlay = true, overlayClassName = 'fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' } = props;
  return (
    <div className={className}>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={onClose}>
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {showOverlay && (
              <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                <Dialog.Overlay className={overlayClassName} />
              </Transition.Child>
            )}
            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              {children}
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default Modal;
