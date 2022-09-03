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
      <span className="mt-4 text-sm">
        Current Bid <span className="font-bold">{`${gweiToEth(currentBid)} ETH`}</span>
      </span>
      <span className="mt-1 text-sm flex items-center">
        Auction Ends in
        <span className="ml-2 font-bold">
          <CountDownTimer className="flex flex-col items-center" seperatorClassName="mx-1" seperator="|" endTime={endTime} />
        </span>
      </span>
      {/* <div className="w-full relative">
        <div className="h-4 w-[30%] bg-ipGreen mt-6 z-20 relative" />
        <div className="h-4 w-full  mt-6 absolute top-0 bg-gradient-to-r from-gray-300 to-transparent" />
      </div> */}
      <Bidder className="w-full flex flex-col" auctionId={auctionId} minimumBid={minimumBidAmount} placeholder={`Min Bid ${gweiToEth(minimumBidAmount)} ETH`} />
    </div>
  ) : null;
};

export default ActiveAuctionCardSection;
