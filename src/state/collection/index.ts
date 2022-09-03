export const fetchCollectionAsync = async ({ appId, tokenContract, serverUrl, projectId }: { appId: string; tokenContract: string; serverUrl: string; projectId: string }) => {
  const endpoint = `${serverUrl}/functions/getCollection?_ApplicationId=${appId}&tokenContract=${tokenContract}&projectId=${projectId}`;

  const response = await fetch(endpoint);
  const { result: collection } = (await response.json()) || {};

  return collection;
};
