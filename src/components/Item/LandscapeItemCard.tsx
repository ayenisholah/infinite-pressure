import React, { FC } from 'react';
import TraitsCards from './TraitsCards';
import BidsCards from './BidsCards';
import ExtremeImage from './ExtremeImage';
import ActiveAuctionCardSection from './ActiveAuctionCardSection';
import SettlingAuctionCardSection from './SettlingAuctionCardSection';
import EndedAuctionCardSection from './EndedAuctionCardSection';
import { AuctionData } from '../../types';
import PendingAuctionCardSection from './PendingAuctionCardSection';
import Skeleton from './LandscapeItemCardSkeleton';
import RainbowHeader from '../common/RainbowHeader';

interface CardProps {
  className: string;
  tokenId: string;
  item: {
    tokenId: string;
    name: string;
    metadata: any;
    endTime: number;
    description?: string;
    auctionData: AuctionData;
    resources: {
      prodibiInfo: {
        id: string;
        width?: string;
        height?: string;
      };
    };
  };
}

const Card: FC<CardProps> = (props) => {
  const { className = '', tokenId, item } = props;
  const {
    name,
    metadata,
    description,
    auctionData = {},
    auctionData: { id = '', currentBid = '', endTime = 0, reservePrice = '', bids = [], status = '', winner = '', winningBid = '' } = {},
    resources,
  } = item || {};

  const width = resources?.prodibiInfo.width ? parseInt(resources.prodibiInfo.width) : 10667;
  const height = resources?.prodibiInfo.height ? parseInt(resources.prodibiInfo.height) : 15000;

  const hasAuctionData = Object.keys(auctionData).length;

  return item ? (
    <div className={`w-full flex flex-col items-center mb-36 ${className}`}>
      <div className="text-left w-full mb-2">
        <h1 className="pixel-font bg-clip-text text-transparent ip-gradient text-lg sm:text-2xl">{name}</h1>
      </div>
      <div className="cursor-zoom-in w-full aspect-auto flex justify-end extreme-img relative mt-2">
        <ExtremeImage className=" object-cover cursor-zoom-in" id={resources?.prodibiInfo.id} height={height} width={width} />
      </div>
      <div className="flex w-full flex-col sm:flex-row justify-between">
        <div className="flex-1">
          <ActiveAuctionCardSection className="flex flex-col" show={!!(status === 'active' && hasAuctionData)} endTime={endTime} currentBid={currentBid} auctionId={id} />
          <PendingAuctionCardSection className="flex flex-col mt-2" show={!!(status === 'pending' && hasAuctionData)} reservePrice={reservePrice} auctionId={id} />
          <SettlingAuctionCardSection className="flex flex-col mt-2" show={!!(status === 'settling' && hasAuctionData)} bids={bids} />
          <EndedAuctionCardSection tokenId={tokenId} className="flex flex-col mt-2" show={!!(status === 'settled' && hasAuctionData)} winner={winner} winningBid={winningBid} />
          <TraitsCards className="mt-4 flex flex-wrap text-center text-sm text-white whitespace-nowrap" attributes={metadata?.attributes} />
        </div>
        <div className="flex-1 flex-position-1 sm:order-first sm:mr-12 mt-6">
          <RainbowHeader text="Description" />
          <pre className="text-sm font-base font-thin whitespace-pre-wrap">{description}</pre>
          <RainbowHeader className="my-4" text="Bid History" />
          <BidsCards className="" bids={bids} />
        </div>
      </div>
    </div>
  ) : (
    <Skeleton className={className} />
  );
};

export default Card;
