import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { kebabCase } from 'lodash';
import { collectionFilterAtom, collectionSortbyAtom } from '../atoms';
import { Collection } from '../types';

const filter = ({ collection, filters }: { collection: Collection; filters: any }) => {
  if (!filters.length) return collection;

  if (!collection) return [];

  return collection?.filter((item) => {
    const kebabFilters = filters.map((v: string) => kebabCase(v));
    const attribtues = item.metadata.attributes.map((attribute: any) => {
      if (['Collaboration', 'Border'].includes(attribute?.trait_type)) {
        return kebabCase(attribute?.trait_type);
      }
      return kebabCase(attribute?.value);
    });
    return attribtues.some((val: string) => kebabFilters.includes(kebabCase(val)));
  });
};

const useFilterCollection = (collection: Collection) => {
  const [filteredCollection, setFilteredCollection] = useState<Collection>(collection);
  const [filters] = useAtom(collectionFilterAtom);
  const [sortBy] = useAtom(collectionSortbyAtom);
  const hasLoaded = collection?.length;

  useEffect(() => {
    const newCollection = filter({ collection, filters });
    if (newCollection?.length) {
      setFilteredCollection(newCollection);
    }
  }, [filters, setFilteredCollection, hasLoaded, sortBy, collection]);

  return filteredCollection;
};

export default useFilterCollection;
