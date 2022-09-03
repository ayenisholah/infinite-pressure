import { atomWithStorage } from 'jotai/utils';
import { atom } from 'jotai';

export const selectedTraitTypeAtom = atom<string>('');
export const traitSelectIsOpenAtom = atom<boolean>(false);
export const notificationSettingsModalIsOpen = atom<boolean>(false);
export const filterSettingsModalIsOpen = atom<boolean>(false);
export const collectionSortbyAtom = atomWithStorage<string>('collectionSortBy', 'Title');
export const collectionFilterAtom = atomWithStorage<any>('collectionFilter', []);
export const auctionFilterAtom = atomWithStorage('auctionFilter', 'all');
export const watchListAtom = atomWithStorage<any>('watchList', []);
export const collectionLayoutAtom = atomWithStorage('collectionLayout', 'standard');
export const ringBellAtom = atomWithStorage('ringBell', true);
