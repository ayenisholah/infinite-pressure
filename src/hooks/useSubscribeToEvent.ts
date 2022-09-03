import { moralisConfig } from '../helpers/constants';

const useSubscribeToEvent = async ({ Moralis, chainEvent, queryClient, subscribeEvent = 'update' }: { chainEvent: string; Moralis: any; queryClient: any; subscribeEvent?: string }) => {
  Moralis.start({ appId: moralisConfig.appId, serverUrl: moralisConfig.serverUrl });
  const query = new Moralis.Query(chainEvent);
  const subscription = await query.subscribe();
  const invalidateQueries = () => queryClient.invalidateQueries();
  subscription.on(subscribeEvent, () => {
    invalidateQueries();
  });
};

export default useSubscribeToEvent;
