import { useAtom } from 'jotai';
import React, { FC } from 'react';
import { useRouter } from 'next/router';
import sample from 'lodash/sample';
import { Button } from '..';
import { auctionFilterAtom, collectionFilterAtom, collectionLayoutAtom } from '../../atoms';
import { CloseIcon } from '../../icons';
import ClientOnly from '../common/ClientOnly/ClientOnly';
import { useCollection } from '../../state/hooks';
import { traits } from '../../helpers/constants';
import FilterTag from '../common/Traits/Tag';

interface MenuBarProps {
  className?: string;
}

const FilterTags = ({ className }: { className?: string }) => {
  const [filters] = useAtom(collectionFilterAtom);
  return (
    <div className={className}>
      {filters.map((filter: string) => {
        const traitType = traits.filter((trait) => trait.value === filter) || {};
        return <FilterTag key={filter} color={traitType[0].traitType === 'Composition' ? '#d0ff00' : '#df5f52'} trait={filter} />;
      })}
    </div>
  );
};

const AuctionsMenuBar: FC<MenuBarProps> = (props) => {
  const { className = '' } = props;
  const [layout, setLayout] = useAtom(collectionLayoutAtom);
  const [auctionFilter, setAuctionFilter] = useAtom(auctionFilterAtom);
  const router = useRouter();
  const { data: collection } = useCollection();

  const handleFeelingLucky = (e: MouseEvent) => {
    e.preventDefault();
    const luckyItem = sample(collection);
    const href = `item/${luckyItem.name}`;
    router.push(href);
  };

  return (
    <ClientOnly>
      <div className={className}>
        <div>
          <Button className={`text-xs ${auctionFilter === 'all' ? 'font-bold' : ''}`} onClick={() => setAuctionFilter('all')}>
            All NFTs
          </Button>
          <span className="mx-2 text-xs">|</span>
          <Button className={`text-xs ${auctionFilter === 'active' ? 'font-bold' : ''}`} onClick={() => setAuctionFilter('active')}>
            Active Auctions
          </Button>
          <span className="mx-2 text-xs">|</span>
          <Button className={`text-xs ${auctionFilter === 'no-bids' ? 'font-bold' : ''}`} onClick={() => setAuctionFilter('no-bids')}>
            No Bids
          </Button>
          <span className="mx-2 text-xs">|</span>
          <Button className={`text-xs ${auctionFilter === 'my-bids' ? 'font-bold' : ''}`} onClick={() => setAuctionFilter('my-bids')}>
            My Bids
          </Button>
          <span className="mx-2 text-xs">|</span>
          <Button className={`text-xs ${auctionFilter === 'watching' ? 'font-bold' : ''}`} onClick={() => setAuctionFilter('watching')}>
            Watching
          </Button>
        </div>
        <div className="my-2 md:mt-0 flex justify-center items-center">
          {/* <Button className="pixel-font text-[#d0ff00] bg-[#e72a42] px-2 py-2" onClick={handleFeelingLucky}>
            Feeling Lucky
          </Button>
          <span className="mx-2 text-xs">|</span> */}
          <Button className={`text-xs ${layout === 'standard' ? 'font-bold' : ''}`} onClick={() => setLayout('standard')}>
            Standard Layout
          </Button>
          <span className="mx-2 text-xs">|</span>
          <Button className={`text-xs ${layout === 'condensed' ? 'font-bold' : ''}`} onClick={() => setLayout('condensed')}>
            Condensed
          </Button>
        </div>
      </div>
      <FilterTags className="mb-4 md:mt-2 flex-wrap flex flex-row container  mx-auto justify-start px-2 md:px-0" />
    </ClientOnly>
  );
};

export default AuctionsMenuBar;
