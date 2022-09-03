import React, { FC, useEffect, useState } from 'react';
import { useMoralis } from 'react-moralis';
import { useAtom } from 'jotai';
import { shortenAddress } from '@usedapp/core';
import { BellIcon } from '@heroicons/react/solid';
import { Button } from '..';
import { notificationSettingsModalIsOpen, ringBellAtom } from '../../atoms';
import { useAddressOrEns } from '../../hooks/useAddressOrEns';

const WalletButton: FC = () => {
  const { authenticate, isAuthenticated, account, isWeb3Enabled, enableWeb3, logout } = useMoralis();
  const [, setModalIsOpen] = useAtom(notificationSettingsModalIsOpen);
  const addressOrEns = useAddressOrEns(account!);

  const handleWalletConnect = () => {
    if (!isAuthenticated) {
      authenticate({ signingMessage: 'I hereby solemnly swear that I can withstand INFINITE PRESSURE' });
    }
  };

  useEffect(() => {
    if (!isWeb3Enabled) {
      enableWeb3();
    }
  }, [isWeb3Enabled]);

  const handleNotificationOpen = () => {
    setModalIsOpen(true);
    setRingBell(false);
  };

  const [ringBell, setRingBell] = useAtom(ringBellAtom);
  return isAuthenticated ? (
    <div className="flex">
      {addressOrEns}
      <Button onClick={handleNotificationOpen} ghost className="ml-2 relative">
        {ringBell && (
          <>
            <div className="text-xs absolute  h-4 w-4 text-white bg-red-500 -right-3 -top-1 animate-ping" />
            <div className="text-xs absolute  h-4 w-4 text-white bg-red-500 -right-3 -top-1">?</div>
          </>
        )}
        <BellIcon className="h-6 flex hover:fill-ipRed transition" />
      </Button>
    </div>
  ) : (
    <Button className="" onClick={handleWalletConnect}>
      <span className="hover:text-ipRed transition">Wallet</span>
    </Button>
  );
};

export default WalletButton;
