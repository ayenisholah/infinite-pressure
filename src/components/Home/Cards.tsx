import React, { FC, useEffect } from 'react';
import { useAtom } from 'jotai';
import { useQueryClient } from 'react-query';
import { useMoralis } from 'react-moralis';
import Image from 'next/image';
import { collectionLayoutAtom } from '../../atoms';
import { useCollection } from '../../state/hooks';
import useFilterCollection from '../../hooks/useFilteredCollection';
import Card from './Card';
import Skeleton from './Skeleton';
import useFilterAuction from '../../hooks/useFilteredAuctions';
import useSortCollection from '../../hooks/useSortCollection';
import useSubscribeToEvent from '../../hooks/useSubscribeToEvent';
import noResults from '../../../public/images/banners/no-results.jpeg';

const NoResults = ({ show }: { show: boolean }) => {
  if (!show) return null;
  return (
    <div className="container mx-auto mt-4 ">
      <div className="w-full shadow-lg bg-ipGreen  p-10 100%">
        <div className="w-full p-10 shadow-lg  bg-black">
          <Image src={noResults} layout="responsive" placeholder="blur" />
        </div>
      </div>
    </div>
  );
};

const standardStyles = 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-2 md:px-0';
const condensedStyles = 'grid-cols-3 md:grid-cols-9 gap-x-2 gap-y-4 md:gap-x-4 md:gap-y-2';

const Cards: FC = () => {
  const queryClient = useQueryClient();
  const { Moralis } = useMoralis();
  const [layout] = useAtom(collectionLayoutAtom);
  const { data, isLoading } = useCollection();
  const collection = useFilterCollection(data);
  const filteredCollection = useFilterAuction(collection);
  const sortedCollection = useSortCollection(filteredCollection);

  useEffect(() => {
    useSubscribeToEvent({ chainEvent: 'AuctionBid', queryClient, Moralis });
    useSubscribeToEvent({ chainEvent: 'AuctionCreated', queryClient, Moralis });
  }, []);

  return !isLoading ? (
    <div className="min-h-screen">
      {!isLoading && sortedCollection?.length ? (
        <div className={`grid ${layout === 'condensed' ? condensedStyles : standardStyles} container mx-auto mt-8 mb-32`}>
          {sortedCollection?.length &&
            sortedCollection?.map((item: any) => {
              return <Card key={item.name} className="w-full" item={item} />;
            })}
        </div>
      ) : null}
      <NoResults show={!isLoading && !filteredCollection?.length} />
    </div>
  ) : (
    <Skeleton className={`w-full grid ${layout === 'condensed' ? condensedStyles : standardStyles} container mx-auto mt-8`} />
  );
};

export default Cards;
