import Link from 'next/link';
import React, { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useMoralis } from 'react-moralis';
import WalletButton from './WalletButton';
import { Button } from '..';
import logo from '../../../public/images/logos/ip_rainbow.svg';
import HairlineDivider from '../common/HairlineDivider';
import ClientOnly from '../common/ClientOnly/ClientOnly';

const HeaderBar: FC = () => {
  const router = useRouter();
  const { tokenId = '' } = router.query;
  const { isAuthenticated, logout } = useMoralis();
  return (
    <ClientOnly>
      <div className="container mx-auto mb-6 lg:mb-10">
        <div className="flex flex-col lg:flex-row justify-between  items-center py-10">
          <Link href={tokenId ? `/#token-${tokenId}` : '/'} scroll>
            <div className="w-full lg:w-1/2 cursor-pointer">
              <Image src={logo} />
            </div>
          </Link>
          <div className="mt-6 lg:mt-0 flex text-lg sm:text-xl md:text-2xl pixel-font space-x-8">
            <WalletButton />
            <Link href="/about">
              <a className="hover:text-ipRed transition">About</a>
            </Link>
            <Link href="https://shop.nopattern.com">
              <a className="hover:text-ipRed transition">Book</a>
            </Link>
            <Link href="/faq">
              <a className="hover:text-ipRed transition">FAQ</a>
            </Link>
            {isAuthenticated && (
              <Button className="hover:text-ipRed transition" onClick={logout}>
                Logout
              </Button>
            )}
          </div>
        </div>
        <HairlineDivider />
      </div>
    </ClientOnly>
  );
};

export default HeaderBar;
