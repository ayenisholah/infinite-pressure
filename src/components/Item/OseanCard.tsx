import React, { FC } from 'react';
import TraitsCards from './TraitsCards';
import BidsCards from './BidsCards';
import OseanScene from './OseanScene';
import ActiveAuctionCardSection from './ActiveAuctionCardSection';
import SettlingAuctionCardSection from './SettlingAuctionCardSection';
import EndedAuctionCardSection from './EndedAuctionCardSection';
import { AuctionData } from '../../types';
import PendingAuctionCardSection from './PendingAuctionCardSection';
import Skeleton from './Skeleton';
import RainbowHeader from '../common/RainbowHeader';

interface CardProps {
  className: string;
  item: {
    tokenId: string;
    name: string;
    metadata: any;
    endTime: number;
    description?: string;
    auctionData: AuctionData;
    resources: { prodibiInfo: { id: string } };
  };
}

const Card: FC<CardProps> = (props) => {
  const { className = '', item } = props;
  const {
    name,
    metadata,
    description,
    auctionData = {},
    auctionData: { id = '', currentBid = '', endTime = 0, reservePrice = '', bids = [], status = '', winner = '', winningBid = '' } = {},
    resources,
  } = item || {};

  const hasBids = !!bids?.length;
  const hasAuctionData = Object.keys(auctionData).length;

  const notStartedMarkup = hasAuctionData ? null : (
    <span className="pixel-font w-full  bg-gray-400 h-12 flex text-white justify-center items-center text-lg  tracking-wide">Auction starting soon</span>
  );

  return item ? (
    <div className={`w-[960px] mx-auto flex flex-col items-center  mb-36 ${className}`}>
      <div className="text-left w-full mb-2">
        <h1 className="pixel-font bg-clip-text text-transparent ip-gradient text-lg sm:text-2xl">{name}</h1>
      </div>
      <div className="cursor-zoom-in w-full aspect-auto flex justify-end extreme-img relative mt-2">
        <div className="mb-8 w-full aspect-video">
          <OseanScene />
        </div>
      </div>
      <div className="flex w-[960px] flex-col sm:flex-row justify-between">
        <div className="flex-1">
          <ActiveAuctionCardSection className="flex flex-col" show={!!(status === 'active' && hasAuctionData)} endTime={endTime} currentBid={currentBid} auctionId={id} />
          <PendingAuctionCardSection className="flex flex-col mt-2" show={!!(status === 'pending' && hasAuctionData)} reservePrice={reservePrice} auctionId={id} />
          <SettlingAuctionCardSection className="flex flex-col mt-2" show={!!(status === 'settling' && hasAuctionData)} bids={bids} />
          <EndedAuctionCardSection tokenId="40" className="flex flex-col mt-2" show={!!(status === 'settled' && hasAuctionData)} winner={winner} winningBid={winningBid} />
          {notStartedMarkup}
          <TraitsCards className="flex mt-4 flex-wrap text-center text-sm text-white whitespace-nowrap" attributes={metadata?.attributes} />
          <RainbowHeader className="my-4" text="Bid History" />
          <BidsCards className="" bids={bids} />
        </div>
        <div className="flex-1 flex-position-1 sm:order-first sm:mr-12">
          <RainbowHeader text="Description" />
          <div className="space-y-2 mt-4">
            <p>Ⓦⓞⓡⓛⓓ ѻกε🦋🧞🎠🪐✨</p>
            <p>A collabative Pokit world created by Oseanworld and NoPattern</p>
            <p>
              This NFT comes with an interactive app created in unity and usable on your personal computer. This app allows you to navigate through an a 3 dimensional Infinite Pressure landscape using
              a character.
            </p>
            <p className="font-bold">Controls:</p>
            <ul className="pl-10">
              <li className="list-disc">
                <b>Mouse</b> - Control the camera
              </li>
              <li className="list-disc">
                <b>WASD/Arrow Keys</b> - control your character
              </li>
              <li className="list-disc">
                <b>F</b> - toggle fly mode
              </li>
              <li className="list-disc">
                <b>Spacebar</b> - jump
              </li>
              <li className="list-disc">
                <b>Shift</b> - move faster
              </li>
              <li>
                <b>ESC</b> - exit game
              </li>
            </ul>

            <p>
              The NFT also comes with a GLB of the character, which will be usable in upcoming Oseanworld projects (more details to come in mid-2022), as well as the preview video as it appears on the
              Infinite Pressure site and OpenSea.
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Skeleton className={className} />
  );
};

export default Card;
