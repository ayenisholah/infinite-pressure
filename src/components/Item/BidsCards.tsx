import React, { FC } from 'react';
import { shortenAddress } from '@usedapp/core';
import moment from 'moment';
import { Bids } from '../../types';
import { gweiToEth } from '../../helpers';
import { useAddressOrEns } from '../../hooks/useAddressOrEns';

interface BidsCardsProps {
  className: string;
  bids: Bids;
}

const BidderAddress = ({ bidder }: { bidder: string }) => {
  const address = useAddressOrEns(bidder);
  return <span className="flex mr-8">{address}</span>;
};

const getDateTime = (bidTime: string, type?: string) => {
  const date = moment.unix(parseInt(bidTime));
  return type === 'date' ? date.format('DD.MM.YY') : date.format('hh:mm A');
};

const BidsCards: FC<BidsCardsProps> = (props) => {
  const { className = '', bids = [] } = props;

  return bids.length ? (
    <div className={className}>
      {bids.reverse().map(({ amount, bidder, auctionId, bidTime }) => (
        <div key={auctionId} className="flex items-center justify-between odd:bg-gray-400 bg-gray-300 py-4 px-4 text-white text-xs">
          <div className="">
            <span className="mr-4">{getDateTime(bidTime, 'date')}</span>
            <span>{getDateTime(bidTime)}</span>
          </div>
          <div className="flex">
            <BidderAddress bidder={bidder} />
            {/* @ts-ignore */}
            <span className="font-bold">{`${gweiToEth(amount)} ETH`}</span>
          </div>
        </div>
      ))}
    </div>
  ) : null;
};

export default BidsCards;
