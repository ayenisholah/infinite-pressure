import { shortenAddress } from '@usedapp/core';
import React, { FC } from 'react';
import { gweiToEth } from '../../helpers';

interface SettledAuctionCardSectionProps {
  className?: string;
  winner: string;
  winningBid: string;
  show: boolean;
}

const SettledAuctionCardSection: FC<SettledAuctionCardSectionProps> = (props) => {
  const { winner, winningBid, className = '', show } = props;

  return show ? (
    <div className={className}>
      <span className="mt-1 text-sm whitespace-nowrap">
        Owned by <span className="font-bold text-xs">{shortenAddress(winner)}</span>
      </span>
      <span className="mt-1 text-sm">
        View{' '}
        <a target="_window" className="font-bold cursor-pointer">
          IPFS
        </a>
      </span>
      <div className="w-full flex mt-6 py-2 items-center justify-center border border-black rounded text-sm">{`Sold for ${gweiToEth(winningBid)} ETH`}</div>
    </div>
  ) : null;
};

export default SettledAuctionCardSection;
