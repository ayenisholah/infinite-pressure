/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { collectionSortbyAtom } from '../atoms';
import { Collection } from '../types';
import { sortCollection } from '../helpers';

const useSortCollection = (collection: Collection) => {
  const [sortedCollection, setSortedCollection] = useState<Collection>(collection);
  const [sortBy] = useAtom(collectionSortbyAtom);

  useEffect(() => {
    const newCollection = sortCollection(collection?.slice(), sortBy) || [];
    setSortedCollection(newCollection);
  }, [sortCollection, setSortedCollection, sortBy, collection]);

  return sortedCollection;
};

export default useSortCollection;
