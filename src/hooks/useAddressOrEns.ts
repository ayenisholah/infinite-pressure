import { useEnsAddress } from 'react-moralis';
import { shortenAddress } from '@usedapp/core';

export const useAddressOrEns = (address: string) => {
  const { name, isLoading, error } = useEnsAddress(address);
  if (!address) return '';
  if (name && !isLoading && !error) return name;
  return shortenAddress(address);
};
