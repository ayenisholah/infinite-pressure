import React, { FC } from 'react';
import { gweiToEth } from '../../helpers';
import Bidder from '../common/Bidder/Bidder';

interface PendingAuctionCardSectionProps {
  className?: string;
  reservePrice: string;
  auctionId: string;
  show: boolean;
}

const PendingAuctionCardSection: FC<PendingAuctionCardSectionProps> = (props) => {
  const { reservePrice, className = '', show, auctionId = '' } = props;

  return show ? (
    <div className={className}>
      <span className="text-sm">
        Reserve Price: <span className="font-bold">{`${gweiToEth(reservePrice)} ETH`}</span>
      </span>
      <Bidder className="w-full flex mt-2" minimumBid={reservePrice} auctionId={auctionId} placeholder="Start Auction" />
    </div>
  ) : null;
};

export default PendingAuctionCardSection;
