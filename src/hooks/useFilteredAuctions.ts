import { useEffect, useState } from 'react';
import { find } from 'lodash';
import { useMoralis } from 'react-moralis';
import { useAtom } from 'jotai';
import { auctionFilterAtom, collectionSortbyAtom, watchListAtom } from '../atoms';
import { AuctionStatus, BidRecordProps, Collection } from '../types';

const getNow = () => Math.ceil(Date.now() / 1000);

const useFilterAuction = (collection: Collection) => {
  const [filteredCollection, setFilteredCollection] = useState<Collection>(collection);
  const [filter] = useAtom(auctionFilterAtom);
  const [sortBy] = useAtom(collectionSortbyAtom);
  const [watchList] = useAtom(watchListAtom);
  const hasLoaded = collection?.length;

  const { user } = useMoralis();
  const userAddress = user ? user.attributes.ethAddress : '';

  useEffect(() => {
    if (hasLoaded && filter === 'all') {
      setFilteredCollection(collection);
    }
    if (hasLoaded && filter === 'active') {
      setFilteredCollection(collection.filter((item) => item?.auctionData?.status === 'active'));
    }
    if (hasLoaded && filter === 'no-bids') {
      setFilteredCollection(collection.filter((item) => !item?.auctionData?.bids?.length));
    }
    if (hasLoaded && filter === 'my-bids') {
      setFilteredCollection(collection.filter((item) => find(item?.auctionData?.bids, (bid: BidRecordProps) => bid?.bidder === userAddress)));
    }
    if (hasLoaded && filter === 'watching') {
      setFilteredCollection(collection.filter((item) => watchList.includes(item?.tokenId)));
    }
    if (hasLoaded && filter === 'sold') {
      setFilteredCollection(collection.filter((item) => item?.auctionData.status === 'settling' || item?.auctionData.status === 'settled'));
    }
  }, [filter, setFilteredCollection, hasLoaded, watchList, sortBy, collection]);

  return filteredCollection;
};

export default useFilterAuction;
