import React, { FC, useEffect, useState } from 'react';
import { XIcon } from '@heroicons/react/solid';
import isEmail from 'validator/lib/isEmail';
import { useMoralis } from 'react-moralis';
import { useAtom } from 'jotai';
import Input from '../common/Input/Input';
import Switch from '../common/Switch/Switch';
import Modal from '../common/Modal/Modal';
import { Button } from '..';
import { notificationSettingsModalIsOpen } from '../../atoms';

interface AlertsModalProps {
  className?: string;
}

const AlertsModal: FC<AlertsModalProps> = (props) => {
  const { className } = props;
  const { user } = useMoralis();
  const [modalIsOpen, setModalIsOpen] = useAtom(notificationSettingsModalIsOpen);
  const { email: userEmail, notificationsEnabled: userNotificationsEnabled } = user?.attributes || {};
  const [email, setEmail] = useState(userEmail);
  const [isSaving, setIsSaving] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [, setNotificationEnabled] = useState(userNotificationsEnabled);

  useEffect(() => {
    if (userEmail) {
      setEmail(userEmail);
    }
    if (!modalIsOpen) {
      setTimeout(() => {
        clearState();
      }, 1000);
    }
  }, [userEmail, modalIsOpen]);

  const handleAlertToggle = async () => {
    user?.set('notificationsEnabled', !userNotificationsEnabled);
    setNotificationEnabled(!userNotificationsEnabled);
    await user?.save();
  };

  const clearState = () => {
    setModalIsOpen(false);
    setIsError(false);
    setIsSuccess(false);
    setIsSaving(false);
  };

  const handleClose = () => {
    setModalIsOpen(false);
  };

  const handleSave = async () => {
    if (email === '' || (email !== userEmail && isEmail(email || ''))) {
      setIsSaving(true);
      user?.set('email', email);
      try {
        await user?.save();
        setIsSaving(false);
        setIsSuccess(true);
      } catch (e) {
        setIsError(true);
        setIsSaving(false);
      }
    } else {
      setIsError(true);
      setIsSaving(false);
    }
  };

  const canSave = email !== userEmail;

  return (
    <div className={className}>
      <Modal
        open={modalIsOpen}
        onClose={() => {
          setModalIsOpen(false);
        }}
      >
        <div className="inline-block overflow-hidden  transform transition-all  sm:align-middle max-w-sm md:max-w-xl  w-full apple-form">
          <div
            className={`
              border-b border-black border-opacity-20 h-12 items
              flex justify-between items-center px-4
           `}
          >
            <div
              onClick={handleClose}
              className={`
                cursor-pointer absolute
                bg-ipRed border-black border 
                border-opacity-20 h-5 w-5 
                rounded-full flex 
                justify-center 
                items-center
              `}
            >
              <XIcon className="h-4 opacity-0 hover:opacity-60" />
            </div>
            <div className="text-center w-full">
              <h2 className="apple  text-xl">Notification Settings</h2>
            </div>
          </div>
          <div className="p-8">
            <div className="flex space-x-10 ">
              <div className="text-left font-bold text-xl">Do you want to receive email notifications when you are outbid in an auction?</div>
              <div className="flex grow space-x-4 items-center h-5 mt-5">
                <div>Yes!</div>
                <input
                  name="comments"
                  type="checkbox"
                  checked={userNotificationsEnabled}
                  onChange={() => handleAlertToggle()}
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
              </div>
            </div>
            {userNotificationsEnabled && !isSuccess && (
              <>
                <div className="mt-6">
                  <label htmlFor="email" className="text-left block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      onChange={(e) => {
                        setEmail(e.currentTarget.value);
                        setIsError(false);
                      }}
                      value={email}
                      type="email"
                      className={`
                        shadow-sm focus:ring-blue-500 focus:border-blue-500 
                        block w-full sm:text-sm border-gray-300 
                        rounded-md
                        ${isError ? 'border-red-400  placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500' : ''}
                      `}
                      placeholder="you@example.com"
                    />
                    {isError && <div className="text-red-500 text-sm mt-2 text-left">Invalid email or already exists in our system, please try again.</div>}
                  </div>
                </div>
                <div className="flex space-x-5 justify-end">
                  <Button
                    disabled={isSaving}
                    onClick={handleClose}
                    className={`
                      cursor-pointer
                      bg-white bg-opacity-30 hover:bg-opacity-70 transition
                      border border-black border-opacity-10
                      my-4 px-10 py-2 bg-gradient-to-t  text-sm rounded 
                      shadow-md
                    `}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => handleSave()}
                    animateScale={0.98}
                    animate
                    disabled={isSaving}
                    className={`
                      transition
                      ${canSave ? 'opacity-100 cursor-pointer' : 'opacity-80 cursor-not-allowed'} 
                      ${isSuccess ? '' : 'from-blue-700 to-blue-500'}
                      my-4 px-10 py-2 relative group bg-gradient-to-t  text-white text-sm rounded 
                      shadow-lg
                    `}
                  >
                    <div className="absolute top-0 left-0 rounded opacity-0 group-hover:opacity-10 bg-white w-full h-full" />
                    {isSaving ? 'Saving' : 'Save'}
                  </Button>
                </div>
              </>
            )}
            {isSuccess && (
              <div className="mt-6">
                <div className="text-lg">Success! We&apos;ll be in touch!</div>
                <Button
                  disabled={isSaving}
                  onClick={handleClose}
                  className={`
                    cursor-pointer
                    bg-white bg-opacity-30 hover:bg-opacity-70 transition
                    border border-black border-opacity-10
                    my-4 px-10 py-2 bg-gradient-to-t  text-sm rounded 
                    shadow-md w-full
                  `}
                >
                  Back to the Art
                </Button>
              </div>
            )}

            {!isSuccess && <div className="flex mt-4 text-sm font-light text-left">We take your privacy seriously and will not not share, rent nor sell your email address.</div>}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AlertsModal;
