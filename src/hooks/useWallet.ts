import { useEthers, shortenAddress, useEtherBalance } from '@usedapp/core';
import { formatEther } from '@ethersproject/units';

const useWallet = () => {
  const { account, activateBrowserWallet } = useEthers();

  const shortenedAddress = account ? shortenAddress(account) : null;

  const balance = useEtherBalance(account);

  const ethBalance = balance ? formatEther(balance) : null;

  return {
    account,
    activateBrowserWallet,
    shortenedAddress,
    ethBalance,
    balance,
  };
};

export default useWallet;
