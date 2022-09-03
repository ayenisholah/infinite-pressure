import React, { FC } from 'react';
import { utils } from 'ethers';
import TraitsCards from './TraitsCards';
import BidsCards from './BidsCards';
import { Accordion } from '..';
import ExtremeImage from './ExtremeImage';
import ActiveAuctionCardSection from './ActiveAuctionCardSection';
import SettlingAuctionCardSection from './SettlingAuctionCardSection';
import EndedAuctionCardSection from './EndedAuctionCardSection';
import { AuctionData } from '../../types';
import Skeleton from './Skeleton';
import { jDavisUrl } from '../../helpers/constants';
import RainbowHeader from '../common/RainbowHeader';
import { filterBids } from '../../helpers';
import IxPendingAuctionCardSection from './IxPendingAuctionCardSection';

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

const IxItemCard: FC<CardProps> = (props) => {
  const { className = '', tokenId, item } = props;
  const { name, metadata, description, auctionData = {}, auctionData: { id = '', currentBid = '', endTime = 0, bids = [], status = '', winner = '', winningBid = '' } = {}, resources } = item || {};

  const filteredBids = filterBids(tokenId, bids);
  const reservePrice = utils.parseEther('100').toString();
  const hasBids = !!filteredBids?.length;

  const width = resources?.prodibiInfo.width ? parseInt(resources.prodibiInfo.width) : 10667;
  const height = resources?.prodibiInfo.height ? parseInt(resources.prodibiInfo.height) : 15000;

  const hasAuctionData = Object.keys(auctionData).length;
  const auctionIsActive = status === 'active' && hasBids;
  const auctionIsReady = status === 'active' && !hasBids;

  return item ? (
    <div className={`w-full flex flex-col lg:flex-row lg:space-x-10 mb-36 ${className}`}>
      <div className="lg:w-[55%] relative">
        <div className="cursor-zoom-in aspect-auto flex justify-center lg:justify-end extreme-img relative mt-0">
          <ExtremeImage className="extreme-img object-cover cursor-zoom-in" id={resources?.prodibiInfo.id} height={height} width={width} />
        </div>
      </div>
      <div className="w-full lg:w-[45%] mt-6 lg:mt-0">
        <RainbowHeader text={name} className="mt-0 pixel-font text-lg" />
        <ActiveAuctionCardSection className="flex flex-col" show={auctionIsActive} endTime={endTime} currentBid={currentBid} auctionId={id} />
        <IxPendingAuctionCardSection className="flex flex-col mt-2" show={auctionIsReady} reservePrice={reservePrice} auctionId={id} />
        <SettlingAuctionCardSection className="flex flex-col mt-2" show={!!(status === 'settling' && hasAuctionData)} bids={filteredBids} />
        <EndedAuctionCardSection tokenId={tokenId} className="flex flex-col mt-2" show={!!(status === 'settled' && hasAuctionData)} winner={winner} winningBid={winningBid} />
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
            <BidsCards className=" lg:max-h-[626px] noscroll lg:overflow-scroll" bids={filteredBids} />
          </div>
        )}
      </div>
    </div>
  ) : (
    <Skeleton className={className} />
  );
};

export default IxItemCard;
