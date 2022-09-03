import { gweiToEth } from '../../helpers';

export const fetchItemAsync = async ({
  appId,
  tokenContract,
  serverUrl,
  tokenId,
  projectId,
}: {
  appId: string;
  tokenContract: string;
  serverUrl: string;
  tokenId: string | string[];
  projectId: string;
}) => {
  const endpoint = `${serverUrl}/functions/getItem?_ApplicationId=${appId}&tokenContract=${tokenContract}&tokenId=${tokenId}&projectId=${projectId}`;

  const response = await fetch(endpoint);
  const { result: item } = (await response.json()) || {};

  const result = {
    ...item,
    ...((item && { currBid: gweiToEth(item.currBid || 0) }) || {}),
  };

  return result;
};
