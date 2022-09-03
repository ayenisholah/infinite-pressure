import { useQuery } from 'react-query';
import { fetchItemAsync } from './item';
import { fetchCollectionAsync } from './collection';
import { moralisConfig, tokenContract, projectId, reactQueryStaleTime as staleTime } from '../helpers/constants';

const fetchData = {
  appId: moralisConfig.appId,
  tokenContract,
  serverUrl: moralisConfig.serverUrl,
};

export const useCollection = () => {
  const response = useQuery('collection', async () => fetchCollectionAsync({ ...fetchData, projectId }), {
    staleTime,
    refetchOnWindowFocus: false,
  });

  return response;
};

export const useItem = (tokenId: string | string[]) => {
  const response = useQuery(`item:${tokenId}`, async () => fetchItemAsync({ ...fetchData, projectId, tokenId }), {
    staleTime,
    refetchOnWindowFocus: false,
  });
  return response;
};
