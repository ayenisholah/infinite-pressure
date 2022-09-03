import { ReactNode } from 'react';
import StaticImageData from 'next/image';

/* eslint-disable no-unused-vars */
export type Bid = {
  auctionId: number;
  bidTime: number;
  bidder: string;
  amount: number;
  isExtended: boolean;
  isFirst: boolean;
  isWinner: boolean;
};

export type IObjectKeys = {
  [key: string]: string | number;
};

// eslint-disable-next-line no-shadow
export enum AuctionStatus {
  Pending,
  Active,
  Ended,
}

export type BidRecordProps = {
  timestamp: number;
  seller?: string;
  bidder: string;
  amount: string;
  didWin?: boolean;
  denomination?: string;
  classList?: string;
};

export type Bids = {
  amount: string;
  auctionId: string;
  bidTime: string;
  bidder: string;
  isExtended: boolean;
  isFirst: boolean;
}[];

export type AuctionData = {
  id: string;
  status: AuctionStatus | string;
  tokenId: number;
  reservePrice: string;
  startTime: Date | null;
  endTime: number;
  currentBid: string;
  winner?: string;
  winningBid?: string;
  currBidder: string;
  bids: Bids;
};

export interface Trait {
  traitType: string;
  value: string;
  gradient?: string;
  color?: string;
}

export interface NFTImage {
  __type: string;
  name: string;
  url: string;
}

export interface NFT {
  tokenId: string;
  objectId: string;
  name: string;
  description: string;
  thumbNail: NFTImage;
  image: NFTImage;
  isActive: boolean;
  metadata: {
    attributes: {
      value: string;
      trait_type: string;
    }[];
  };
  auctionData: AuctionData;
}

export interface FilterSettings {
  traits: Array<Trait>;
  auctionSetting: string;
  watchList: Array<string>;
  sortBy: string;
}

export type Collection = Array<NFT>;

export type BookmarkProps = {
  className: string;
  isWatching: boolean;
  onClick: () => void;
  fillColor: string;
};

export interface IconControlProps {
  className?: string;
  onClick: () => void;
  children?: ReactNode;
  toolTip?: string;
}
