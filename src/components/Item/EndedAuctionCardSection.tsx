import { shortenAddress } from '@usedapp/core';
import React, { FC } from 'react';
import { gweiToEth } from '../../helpers';
import { ipfsUrl, openSeaUrl } from '../../helpers/constants';
import { useAddressOrEns } from '../../hooks/useAddressOrEns';
import { OpenseaIcon } from '../../icons';

interface EndedAuctionCardSectionProps {
  className?: string;
  winner: string;
  winningBid: string;
  show: boolean;
  tokenId: string;
}

const EndedAuctionCardSection: FC<EndedAuctionCardSectionProps> = (props) => {
  const { winner, winningBid, className = '', show, tokenId } = props;
  const address = useAddressOrEns(winner);
  return show ? (
    <div className={className}>
      <div className="flex justify-between">
        <span className="mt-1 text-sm whitespace-nowrap">
          <a className="hover:text-ipSold" rel="noreferrer" target="_blank" href={`https://opensea.io/${winner}?search[sortBy]=LISTING_DATE&search[query]=infinite%20pressure`}>
            Owned by <span className="font-bold text-xs">{address}</span>
          </a>
        </span>
      </div>
      <div
        className={`
          w-full 
          text-lg 
          pixel-font
          h-12 flex 
          bg-ipSold
          mt-2 
          text-white
          py-2 
          items-center 
          justify-between
          tracking-widest
          px-4
        `}
      >
        <div>{`Sold for ${gweiToEth(winningBid)} ETH`}</div>
        <div className="space-x-2 flex">
          <div className="bg-white text-ipSold px-2 Sold hover:scale-110 cursor-pointer">
            <a target="_blank" href={`${ipfsUrl}/${tokenId}.json`} rel="noreferrer">
              IPFS
            </a>
          </div>
          <a className="hover:scale-110" target="_blank" rel="noreferrer" href={`${openSeaUrl}/${tokenId}`}>
            <OpenseaIcon className="fill-white h-7 w-7" />
          </a>
        </div>
      </div>
    </div>
  ) : null;
};

export default EndedAuctionCardSection;
