import React, { FC } from 'react';
import { useAtom } from 'jotai';
import sample from 'lodash/sample';
import { useRouter } from 'next/router';
import { find } from 'lodash';
import { Select, SelectOption, Button } from '..';
import { traits, sortFilters, borderColor, collabColor } from '../../helpers/constants';
import { collectionSortbyAtom, filterSettingsModalIsOpen, auctionFilterAtom, collectionLayoutAtom, collectionFilterAtom } from '../../atoms';
import FilterTag from '../common/Traits/Tag';
import ClientOnly from '../common/ClientOnly/ClientOnly';
import { useCollection } from '../../state/hooks';
import CondensedIconControl from '../common/IconControl.tsx/CondensedIconControl';
import ControlIconControl from '../common/IconControl.tsx/ControlconControl';
import HairlineDivider from '../common/HairlineDivider';
import { Trait } from '../../types';

interface AuctionControlsProps {
  className?: string;
}

const FilterTags = ({ className }: { className?: string }) => {
  const [filters] = useAtom(collectionFilterAtom);
  return (
    <div className={className}>
      {filters.map((filter: string) => {
        const trait: Trait = find(traits, (trait) => trait.value === filter) || ({} as Trait);
        if (filter === 'Border') {
          return <FilterTag key={filter} color={borderColor} trait="Border" />;
        }
        if (filter === 'Collaboration') {
          return <FilterTag key={filter} color={collabColor} trait="Collaboration" />;
        }
        return <FilterTag gradient={trait.gradient} key={filter} color={trait.color!} trait={filter} />;
      })}
    </div>
  );
};

const AuctionControls: FC<AuctionControlsProps> = (props) => {
  const [, setModalIsOpen] = useAtom(filterSettingsModalIsOpen);
  const { className = '' } = props;
  const [sortBy, setSortby] = useAtom(collectionSortbyAtom);
  const [layout, setLayout] = useAtom(collectionLayoutAtom);

  const [auctionFilter, setAuctionFilter] = useAtom(auctionFilterAtom);
  const router = useRouter();
  const { data: collection } = useCollection();

  const toggleLayout = () => {
    setLayout(layout === 'standard' ? 'condensed' : 'standard');
  };

  const handleFeelingLucky = (e: MouseEvent) => {
    e.preventDefault();
    const luckyItem = sample(collection);
    const href = `item/${luckyItem.name}`;
    router.push(href);
  };

  const handleChange = (value: string) => {
    setSortby(value);
  };

  return (
    <ClientOnly>
      <HairlineDivider />
      <div id="auction-controls" className={className}>
        <div className="flex items-center">
          <Button className={`text-xs ${auctionFilter === 'all' ? 'font-bold' : ''}`} onClick={() => setAuctionFilter('all')}>
            All
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
          <Button className={`text-xs ${auctionFilter === 'sold' ? 'font-bold' : ''}`} onClick={() => setAuctionFilter('sold')}>
            Sold
          </Button>
          <span className="mx-2 text-xs">|</span>
          <Button className={`text-xs ${auctionFilter === 'watching' ? 'font-bold' : ''}`} onClick={() => setAuctionFilter('watching')}>
            Bookmarks
          </Button>
        </div>
        <div className="w-96 flex items-center space-x-2">
          <Select className="flex-1" onSelect={handleChange} items={sortFilters} labelTitle={sortBy}>
            {sortFilters.map((filter) => (
              <SelectOption key={filter} optionClassName="text-xs hover:font-bold" isActive={filter === sortBy} value={filter} />
            ))}
          </Select>
          <CondensedIconControl
            toolTip="Condensed View"
            onClick={() => toggleLayout()}
            svgClassName={`
              transition               
              ${layout === 'condensed' ? 'fill-ipRed' : 'fill-[lightgray] hover:fill-[darkgray]'}
            `}
          />
          <ControlIconControl
            toolTip="Filters"
            onClick={() => setModalIsOpen(true)}
            svgClassName={`
              transition w-9
              fill-[lightgray]
              hover:fill-[darkgray]              
            `}
          />
        </div>
      </div>
      <HairlineDivider />
      <FilterTags className="mt-4 flex-wrap flex flex-row container  mx-auto justify-start px-2 md:px-0" />
    </ClientOnly>
  );
};

export default AuctionControls;
