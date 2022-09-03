import { shortenAddress } from '@usedapp/core';
import React, { FC } from 'react';
import { gweiToEth } from '../../helpers';
import { ipfsUrl, openSeaUrl } from '../../helpers/constants';
import { useAddressOrEns } from '../../hooks/useAddressOrEns';
import { OpenseaIcon } from '../../icons';

interface EndedAuctionCardSectionProps {
  className?: string;
  tokenId: string;
  winner: string;
  winningBid: string;
  show: boolean;
}

const EndedAuctionCardSection: FC<EndedAuctionCardSectionProps> = (props) => {
  const { winner, winningBid, className = '', show, tokenId } = props;
  const address = useAddressOrEns(winner);

  return show ? (
    <div className={className}>
      <span className="mt-4 text-sm whitespace-nowrap">
        <a className="hover:text-ipSold" rel="noreferrer" target="_blank" href={`https://opensea.io/${winner}?search[sortBy]=LISTING_DATE&search[query]=infinite%20pressure`}>
          Owned by <span className="font-bold text-xs">{address}</span>
        </a>
      </span>
      <div
        className={`
        pixel-font w-full mt-1 bg-ipSold h-12 px-4 flex justify-between items-center text-lg text-white tracking-wide`}
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
