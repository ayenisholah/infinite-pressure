import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import { useMoralis } from 'react-moralis';
import { useQueryClient } from 'react-query';
import { useRouter } from 'next/router';
import Card from '../../components/Item/ItemCard';
import LandscapeCard from '../../components/Item/LandscapeItemCard';
import { useItem } from '../../state/hooks';
import OseanCard from '../../components/Item/OseanCard';
import useSubscribeToEvent from '../../hooks/useSubscribeToEvent';

const AuctionItem: NextPage = () => {
  const router = useRouter();
  const { tokenId = '' } = router.query;
  const { data: item } = useItem(tokenId);
  const queryClient = useQueryClient();
  const { Moralis } = useMoralis();

  useEffect(() => {
    useSubscribeToEvent({ chainEvent: 'AuctionBid', Moralis, queryClient });
    useSubscribeToEvent({ chainEvent: 'AuctionCreated', Moralis, queryClient });
  }, []);

  if (!tokenId) return null; // We need this check to prevent flash of itemCard skeleton when viewing Landscape card

  if (tokenId === '40') {
    return (
      <div className="container mx-auto mb-12">
        <OseanCard className="mb-24" item={item} />
      </div>
    );
  }

  if (tokenId === '50' || tokenId === '20' || tokenId === '60') {
    return (
      <div className="container mx-auto mb-12">
        <LandscapeCard className="" tokenId={tokenId as string} item={item} />
      </div>
    );
  }

  return (
    <div className="container mx-auto mb-12">
      <Card className="" tokenId={tokenId as string} item={item} />
    </div>
  );
};

export default AuctionItem;
