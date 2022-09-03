/* eslint-disable no-unsafe-optional-chaining */
import find from 'lodash/find';
import { utils, BigNumber } from 'ethers';
import { Bid, BidRecordProps, Collection, FilterSettings, NFT, Trait } from '../types';
import { traits } from './constants';

export const gweiToEth = (gwei: string) => utils.formatEther(BigNumber.from(gwei));
export const ethToGwei = (eth: string) => utils.parseEther(eth);

export const getStartTime = (bids: any) => {
  if (!bids.length) return null;

  return bids[0]?.bidTime;
};

export const getEndTime = (startTime: string, duration: string) => {
  if (!startTime || !duration) return null;

  return parseInt(startTime) + parseInt(duration);
};

export const getLatestBid = (bids: any) => bids[bids.length - 1]?.amount;

const containsTrait = (attributes: any, trait: Trait): boolean => find(attributes, (a) => a.trait_type === trait.traitType && a.value === trait.value);

const filterByAuctionSetting = (userAddress: string, collection: Collection, filterSettings: FilterSettings): Collection => {
  if (collection.length) {
    switch (filterSettings.auctionSetting) {
      case 'active':
        return collection.filter((nft: NFT) => {
          if (Object.keys(nft.auctionData).length === 0) return false;
          return nft.auctionData.status === 'active';
        });
      case 'no-bids':
        return collection.filter((nft: NFT) => {
          if (Object.keys(nft.auctionData).length === 0) return false;
          return !nft.auctionData.bids.length;
        });
      case 'my-bids':
        return collection.filter((nft: NFT) => {
          if (Object.keys(nft.auctionData).length === 0) return false;
          return find(nft.auctionData.bids, (bid: BidRecordProps) => bid.bidder === userAddress);
        });
      case 'watching':
        return collection.filter((nft: NFT) => filterSettings.watchList.includes(nft.tokenId));
      default:
        return collection;
    }
  }
  return collection;
};

export const sortCollection = (collection: Collection, sortBy: string) => {
  let sortedCollection;
  if (sortBy === 'Title') {
    sortedCollection = collection?.sort((a: any, b: any) => a.auctionData?.token?.id - b.auctionData?.token?.id);
  }
  if (sortBy === 'Least Time Left') {
    sortedCollection = collection
      ?.sort((a: any, b: any) => b.auctionData?.token?.id - a.auctionData?.token?.id)
      .sort((a: any, b: any) => b.auctionData?.endTime - a.auctionData?.endTime)
      .sort((a: any) => (a.auctionData.status === 'settling' ? -1 : 1))
      .sort((a: any) => (a.auctionData.status === 'settled' ? -1 : 1))
      .sort((a: any) => (a.auctionData.status === 'active' ? -1 : 1));
  }

  if (sortBy === 'Most Time Left') {
    sortedCollection = collection
      ?.sort((a: any, b: any) => b.auctionData?.token?.id - a.auctionData?.token?.id)
      .sort((a: any, b: any) => a.auctionData?.endTime - b.auctionData?.endTime)
      .sort((a: any) => (a.auctionData.status === 'settling' ? -1 : 1))
      .sort((a: any) => (a.auctionData.status === 'settled' ? -1 : 1))
      .sort((a: any) => (a.auctionData.status === 'active' ? -1 : 1));
  }

  if (sortBy === 'Lowest Price') {
    sortedCollection = collection
      ?.sort((a: any, b: any) => b.auctionData?.token?.id - a.auctionData?.token?.id)
      .sort((a: any, b: any) => b.auctionData?.currBid - a.auctionData?.currBid)
      .sort((a: any) => (a.auctionData.status === 'settling' ? -1 : 1))
      .sort((a: any) => (a.auctionData.status === 'settled' ? -1 : 1))
      .sort((a: any) => (a.auctionData.status === 'active' ? -1 : 1));
  }

  if (sortBy === 'Highest Price') {
    sortedCollection = collection
      ?.sort((a: any, b: any) => b.auctionData?.token?.id - a.auctionData?.token?.id)
      .sort((a: any, b: any) => a.auctionData?.currBid - b.auctionData?.currBid)
      .sort((a: any) => (a.auctionData.status === 'settling' ? -1 : 1))
      .sort((a: any) => (a.auctionData.status === 'settled' ? -1 : 1))
      .sort((a: any) => (a.auctionData.status === 'active' ? -1 : 1));
  }

  return sortedCollection;
};

export const filterCollection = (userAddress: string, collection: Collection, filterSettings: FilterSettings): Collection => {
  if (collection && collection.length) {
    const filteredCollection = collection.filter((nft: any) => {
      for (let i = 0; i < filterSettings.traits.length; i + 1) {
        if (!containsTrait(nft.metadata.attributes, filterSettings.traits[i])) {
          return false;
        }
      }
      return true;
    });

    return filterByAuctionSetting(userAddress, filteredCollection, filterSettings);
  }
  return collection;
};

export const getTraitFromAttribute = (attribute: { trait_type: string; value: string }) => {
  if (['Border', 'Collaboration'].includes(attribute.trait_type)) {
    const trait = traits.find((t) => t.traitType === attribute.trait_type);
    return { traitType: trait?.traitType, value: trait?.traitType, color: trait?.color, gradient: trait?.gradient };
  }
  return traits.find((t) => t.traitType === attribute.trait_type && t.value === attribute.value);
};

export const filterBids = (tokenId: string, bids: any) => {
  if (!bids) return [];
  if (tokenId === '90') {
    const minBid = utils.parseEther('100');
    return bids.filter((bid: any) => {
      const bidAmount = utils.parseUnits(bid.amount, 'wei');
      return bidAmount.gte(minBid);
    });
  }
  return bids;
};
