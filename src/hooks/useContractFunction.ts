import { useCallback, useState } from 'react';
import { useWeb3ExecuteFunction } from 'react-moralis';
import { auctionHouseContract, contractAbi } from '../helpers/constants';

const useContractFunction = ({ functionName }: { functionName: string }) => {
  const [status, setStatus] = useState('None');
  const { data, error, fetch, isFetching, isLoading } = useWeb3ExecuteFunction({
    abi: contractAbi,
    contractAddress: auctionHouseContract,
    functionName,
  });

  const send = async (params: any) => {
    try {
      const response: any = await fetch({ params });
      if (response) {
        setStatus('Mining');
      }

      const receipt = await response?.wait(1);

      if (receipt?.status === 0) {
        setStatus('Fail');
      }
      if (receipt?.status === 1) {
        setStatus('Success');
      }
    } catch (sendError) {
      setStatus('Fail');
    }
  };

  const resetStatus = useCallback(() => {
    setStatus('None');
  }, [setStatus]);

  return { send, status, resetStatus, isFetching, isLoading, data, error };
};

export default useContractFunction;
