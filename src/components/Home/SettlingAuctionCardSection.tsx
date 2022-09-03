import { shortenAddress } from '@usedapp/core';
import React, { FC, useEffect, useState } from 'react';
import { gweiToEth } from '../../helpers';
import ChonkySpinner from '../common/ChonkySpinner';

interface SettingCardSectionnProps {
  className?: string;
  bids: {
    bidder: string;
    amount: string;
  }[];
  show: boolean;
}

const SettingCardSection: FC<SettingCardSectionnProps> = (props) => {
  const { className = '', bids, show } = props;
  const { bidder: winner = '', amount: winningAmount = '' } = bids?.length ? bids[0] : {};
  const [showFinalizing, setShowFinalizing] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowFinalizing(!showFinalizing), 5000);

    return function cleanUp() {
      clearTimeout(timeout);
    };
  }, [showFinalizing]);

  return show ? (
    <div className={className}>
      <div className="flex justify-between items-end">
        <span className="mt-1 mb-1 text-sm whitespace-nowrap">
          Won by <span className="font-bold text-xs">{shortenAddress(winner)}</span>
        </span>
      </div>
      <div
        className={`
        pixel-font w-full  
        bg-ipSold h-12 
        flex 
        justify-center 
        items-center 
        text-lg 
        text-white 
        tracking-wide
      `}
      >
        {!showFinalizing ? (
          `Sold for ${gweiToEth(winningAmount)} ETH`
        ) : (
          <>
            <span className="mr-4">Finalizing Auction</span>
            <ChonkySpinner pixelSize={4} pixelColor="white" />
          </>
        )}
      </div>
    </div>
  ) : null;
};

export default SettingCardSection;
