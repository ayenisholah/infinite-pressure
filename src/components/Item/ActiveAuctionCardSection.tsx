import React, { FC } from 'react';
import { gweiToEth } from '../../helpers';
import { minimumBidPercentage } from '../../helpers/constants';
import CountDownTimer from '../common/CountdownTimer/CountDownTimer';
import Bidder from '../common/Bidder/Bidder';
import ChonkySpinner from '../common/ChonkySpinner';

interface ActiveAuctionCardSectionProps {
  className?: string;
  currentBid: string;
  endTime: number;
  show: boolean;
  auctionId: string;
}

const ActiveAuctionCardSection: FC<ActiveAuctionCardSectionProps> = (props) => {
  const { currentBid, endTime, className = '', auctionId, show } = props;

  const minimumBidAmount = (parseInt(currentBid) * minimumBidPercentage).toString();

  return show ? (
    <div className={className}>
      <div className="flex justify-between items-center mt-4">
        <CountDownTimer className="flex flex-col items-center text-lg" seperatorClassName="text-lg" seperator=":" endTime={endTime} />
        <span className="font-bold text-lg">{`${gweiToEth(currentBid)} ETH`}</span>
      </div>
      <Bidder className="w-full flex flex-col mt-4" auctionId={auctionId} minimumBid={minimumBidAmount} placeholder={`Minimum Bid ${gweiToEth(minimumBidAmount)} ETH`} />
    </div>
  ) : null;
};

export default ActiveAuctionCardSection;
