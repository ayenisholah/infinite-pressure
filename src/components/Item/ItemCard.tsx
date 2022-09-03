import React, { FC } from 'react';
import TraitsCards from './TraitsCards';
import BidsCards from './BidsCards';
import { Accordion } from '..';
import ExtremeImage from './ExtremeImage';
import ActiveAuctionCardSection from './ActiveAuctionCardSection';
import SettlingAuctionCardSection from './SettlingAuctionCardSection';
import EndedAuctionCardSection from './EndedAuctionCardSection';
import { AuctionData } from '../../types';
import PendingAuctionCardSection from './PendingAuctionCardSection';
import Skeleton from './Skeleton';
import { jDavisUrl } from '../../helpers/constants';
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

  const hasBids = !!bids?.length;

  const width = resources?.prodibiInfo.width ? parseInt(resources.prodibiInfo.width) : 10667;
  const height = resources?.prodibiInfo.height ? parseInt(resources.prodibiInfo.height) : 15000;

  const hasAuctionData = Object.keys(auctionData).length;

  return item ? (
    <div className={`w-full flex flex-col lg:flex-row lg:space-x-10 mb-36 ${className}`}>
      <div className="lg:w-[55%] relative">
        {tokenId === '80' && (
          <div className="h-full aspect-auto flex justify-end">
            <video src={jDavisUrl} muted autoPlay controls playsInline loop crossOrigin="anonymous" />
          </div>
        )}
        {!['40', '80'].includes(tokenId) && (
          <div className="cursor-zoom-in aspect-auto flex justify-center lg:justify-end extreme-img relative mt-0">
            <ExtremeImage className="extreme-img object-cover cursor-zoom-in" id={resources?.prodibiInfo.id} height={height} width={width} />
          </div>
        )}
      </div>
      <div className="w-full lg:w-[45%] mt-6 lg:mt-0">
        <RainbowHeader text={name} className="mt-0 pixel-font text-lg" />
        <ActiveAuctionCardSection className="flex flex-col" show={!!(status === 'active' && hasAuctionData)} endTime={endTime} currentBid={currentBid} auctionId={id} />
        <PendingAuctionCardSection className="flex flex-col mt-2" show={!!(status === 'pending' && hasAuctionData)} reservePrice={reservePrice} auctionId={id} />
        <SettlingAuctionCardSection className="flex flex-col mt-2" show={!!(status === 'settling' && hasAuctionData)} bids={bids} />
        <EndedAuctionCardSection className="flex flex-col mt-2" show={!!(status === 'settled' && hasAuctionData)} winner={winner} winningBid={winningBid} tokenId={tokenId} />
        <TraitsCards className="mt-4 flex flex-wrap text-center text-sm text-white whitespace-nowrap" attributes={metadata?.attributes} />
        {description && (
          <div className="mt-4 space-y-2">
            <RainbowHeader className="pixel-font text-lg tracking-wide" text="Description" />
            <pre className="text-sm font-thin whitespace-pre-wrap">{description.replaceAll('\\', '')}</pre>
          </div>
        )}
        {hasBids && (
          <div className="mt-4 space-y-4 max-w-100%">
            <RainbowHeader text="Bid History" className="pixel-font text-lg tracking-wide" />
            <BidsCards className=" lg:max-h-[626px] noscroll lg:overflow-scroll" bids={bids} />
          </div>
        )}
      </div>
    </div>
  ) : (
    <Skeleton className={className} />
  );
};

export default Card;
