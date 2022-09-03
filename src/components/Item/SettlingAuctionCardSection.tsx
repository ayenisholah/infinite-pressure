import { shortenAddress } from '@usedapp/core';
import React, { FC } from 'react';
import { gweiToEth } from '../../helpers';
import { Bids } from '../../types';
import ChonkySpinner from '../common/ChonkySpinner';

interface SettingCardSectionnProps {
  className?: string;
  bids: Bids;
  show: boolean;
}

const SettingCardSection: FC<SettingCardSectionnProps> = (props) => {
  const { className = '', bids, show } = props;

  const { bidder: winner = '', amount: winningAmount = '' } = bids?.length ? bids[0] : {};

  return show ? (
    <div className={className}>
      <div className="flex justify-between">
        <span className="mt-1 text-sm whitespace-nowrap">
          Won by <span className="font-bold text-xs">{shortenAddress(winner)}</span>
        </span>
        <span className="mt-1 text-sm">Finalizing Auction</span>
      </div>
      <div
        className={`
        w-full 
        text-lg 
        pixel-font
        h-12 flex 
        bg-ipSold
        mt-2 
        text-white
        py-2 
        items-center 
        justify-center
        tracking-widest
      `}
      >
        Finalizing Auction
        <span className="ml-4">
          <ChonkySpinner pixelSize={6} pixelColor="white" />
        </span>
      </div>
    </div>
  ) : null;
};

export default SettingCardSection;
