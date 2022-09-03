import React, { FC } from 'react';
import Link from 'next/link';
import { useAtom } from 'jotai';
import dynamic from 'next/dynamic';
import { truncate } from 'lodash';
import Image from '../common/Image/Image';
import Bookmark from './Bookmark';
import { collectionLayoutAtom, watchListAtom } from '../../atoms';
import EndedAuctionCardSection from './EndedAuctionCardSection';
import SettlingAuctionCardSection from './SettlingAuctionCardSection';
import PendingAuctionCardSection from './PendingAuctionCardSection';
import ActiveAuctionCardSection from './ActiveAuctionCardSection';
import { jDavisUrl, oseanUrl } from '../../helpers/constants';

interface BidData {
  auctionId: number;
  bidTime: number; // timestamp
  bidder: string;
  amount: string;
  isExtended: boolean; // true if this bid resulted in `duration` extension
  isFirst: boolean; // true if this is first bid
  isWinner: boolean; // true if winning bid
}

interface CardProps {
  className?: string;
  item: {
    tokenId: string;
    auctionData: {
      id: string;
      status: string;
      startTime: number;
      endTime: number;
      reservePrice: string;
      duration: number;
      currBid?: string;
      bids: BidData[];
      winner: string;
      winningBid: string;
    };
    name: string;
    image?: {
      url: string;
    };
    thumbnail?: {
      url: string;
    };
    metadata?: {};
    resources?: {};
  };
}

const Card: FC<CardProps> = (props) => {
  const { item, className = '' } = props;
  const {
    tokenId,
    auctionData: { id, currBid = '', reservePrice, status, endTime, winner, winningBid, bids },
    auctionData,
    name,
    thumbnail,
  } = item || {};
  const [collectionLayout] = useAtom(collectionLayoutAtom);
  const [watchList, setWatchList] = useAtom(watchListAtom);

  const condensedLayout = collectionLayout === 'condensed';
  const hasAuctionData = Object.keys(auctionData).length;

  const notStartedMarkup =
    hasAuctionData || condensedLayout ? null : <span className="pixel-font w-full  bg-gray-400 h-12 flex text-white justify-center items-center text-lg  tracking-wide">Auction starting soon</span>;

  const isWatching = watchList?.includes(tokenId);

  const updateWatchlist = () => {
    setWatchList((prev: string[]) => {
      if (isWatching) {
        return watchList.filter((watchItem: string) => watchItem !== tokenId);
      }
      return [...prev, tokenId];
    });
  };

  return (
    <div className={className}>
      <div className="relative flex flex-col">
        <div
          id={`token-${tokenId}`}
          className={`          
            relative w-full 
            aspect-h-10 
            aspect-w-7 
            shadow-md 
            hover:scale-105 
            transition 
            duration-200 
            overflow-hidden
            bg-gray-200
          `}
        >
          {['40', '80'].includes(tokenId) ? (
            <Link href={`/item/${tokenId}`}>
              <div className={`aspect-auto cursor-pointer ${!condensedLayout ? '-mt-4' : ''}`}>
                <video src={tokenId === '40' ? oseanUrl : jDavisUrl} autoPlay muted playsInline loop crossOrigin="anonymous" />
              </div>
            </Link>
          ) : (
            <Link href={`/item/${tokenId}`}>
              <a className="w-full h-full">
                <Image animate lazy className="w-full h-full object-cover absolute" alt={`image ${id}`} src={thumbnail?.url || ''} />
              </a>
            </Link>
          )}
        </div>
        <div className={`flex justify-between text-base ${condensedLayout ? 'mt-2' : 'mt-4'}`}>
          <Link href={`/item/${tokenId}`}>
            <a className={`${condensedLayout ? 'text-center' : ''}`}>{condensedLayout ? name.substring(0, 3) : truncate(name, { length: 38 })}</a>
          </Link>
          <Bookmark fillColor="#ef3343" onClick={updateWatchlist} className={`${condensedLayout ? 'w-4 right-0' : 'w-10 -right-2'} absolute `} isWatching={isWatching} />
        </div>
        <div className={`${!condensedLayout && 'h-28 flex flex-col justify-end'}`}>
          <ActiveAuctionCardSection className="flex flex-col" show={!!(status === 'active' && hasAuctionData && !condensedLayout)} endTime={endTime} currentBid={currBid} auctionId={id} />
          <PendingAuctionCardSection className="flex flex-col" show={!!(status === 'pending' && hasAuctionData && !condensedLayout)} reservePrice={reservePrice} auctionId={id} />
          <SettlingAuctionCardSection className="flex flex-col" show={!!(status === 'settling' && hasAuctionData && !condensedLayout)} bids={bids} />
          <EndedAuctionCardSection tokenId={tokenId} className="flex flex-col" show={!!(status === 'settled' && hasAuctionData && !condensedLayout)} winner={winner} winningBid={winningBid} />
          {notStartedMarkup}
        </div>
      </div>
    </div>
  );
};

export default Card;
