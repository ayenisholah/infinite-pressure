import React, { ReactNode } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { shortenAddress } from '@usedapp/core';
import { Disclosure, Transition } from '@headlessui/react';
import { CaretDownIcon } from '../icons';

const Item = ({ question, children }: { question: ReactNode; children: ReactNode }) => (
  <Disclosure>
    {({ open }) => (
      <div className="flex flex-col items-start px-3 w-full">
        <Disclosure.Button className="py-2">
          <div className="flex text-left items-center">
            <CaretDownIcon className={`h-3.5 w-3.5 transform ${open ? '' : '-rotate-90'} mr-2`} /> {question}
          </div>
        </Disclosure.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Disclosure.Panel static className="text-gray-600 text-lg ml-5">
            {children}
          </Disclosure.Panel>
        </Transition>
      </div>
    )}
  </Disclosure>
);

const Topic = ({ title, children }: { title: string; children: ReactNode }) => (
  <Disclosure>
    {() => (
      <div className="flex flex-col items-center md:items-start border-b border-opacity-10 pb-4">
        <Disclosure.Button className="py-4">
          <div className="flex items-center justify-start pixel-font text-xl"> {title}</div>
        </Disclosure.Button>
        <Disclosure.Panel static>{children}</Disclosure.Panel>
      </div>
    )}
  </Disclosure>
);

const Faq: NextPage = () => (
  <>
    <Head>
      <title>Infinite Pressure - Faq</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="" />
    </Head>
    <div className="container mx-auto mt-12 text-lg mb-32">
      <div className="space-y-10 mx-2">
        <Topic title="Browsing the Collection">
          <Item question="First of all, where does this collection live?">
            <div>
              <p className="mb-2">
                Infinite Pressure lives on the Ethereum blockchain where it will remain for the duration of human civilization. You can find its minimalist ERC-721 contract on etherscan at&nbsp;
                <a target="_blank" rel="noreferrer" className="bg-[#d0ff00] text-black" href="https://etherscan.io/address/0x489e76bb343ee99fa370d2f14f02d44968b57ca6#code">
                  {shortenAddress('0x489e76bb343ee99fa370d2f14f02d44968b57ca6')}
                </a>{' '}
                and browse the collection on OpenSea&nbsp;
                <a target="_blank" rel="noreferrer" className="bg-[#d0ff00] text-black" href="https://opensea.io/collection/infinite-pressure-by-chuck-anderson">
                  HERE
                </a>
                .
              </p>
            </div>
          </Item>
          <Item question="What's the best way to explore the collection?">
            <div>
              <p className="mb-2">Infinite Pressure has a beautifully crafted trait system that categorizes each artwork by visual characteristics like color scheme and composition.</p>
              <p className="mb-2">
                You can filter the collection by these traits by clicking on the &apos;Filters&apos; icon on the far right of the controls above the grid of artworks. From there, you can click on any
                number of traits to filter the collection. Filters work in an additive way meaning that the collection will be filtered in such a way that any artwork matching any one of the traits
                you&apos;ve selected will be included.
              </p>
            </div>
          </Item>
          <Item question="How can I keep track of the status of these auctions?">
            <div>
              <p className="mb-2">
                On the far left of the control bar above the collection, there are a number of filters that are based on auction status. With options like &apos;Active Auctions&apos;, &apos;No
                Bids&apos;, and &apos;Sold&apos; you can target auctions in different states. Additionally, you can sort collection results based on which auctions are ending sooner or later using the
                &apos;Sort Order&apos; dropdown on the right.
              </p>
              <p className="mb-2">
                You can filter the collection by these traits by clicking on the &apos;Filters&apos; icon on the far right of the controls above the grid of artworks. From there, you can click on any
                number of traits to filter the collection. Filters work in an additive way meaning that the collection will be filtered in such a way that any artwork matching any one of the traits
                you&apos;ve selected will be included.
              </p>
            </div>
          </Item>
          <Item question="What are Bookmarks?">
            <div>
              <p className="mb-2">Bookmarks allow you to keep a short-list of works that you are interested in tracking regardless of whether you are actively involved in the bidding.</p>

              <p className="mb-2">
                Each work displayed in the collection has a bookmark icon, simply clicking this icon will add it to your bookmarks and show up when you select the &apos;Bookmarks&apos; filter.
              </p>
            </div>
          </Item>
          <Item question="What is 'Condensed View'">
            <div>
              <p className="mb-2">
                The Condensed View is a way to browse the collection from a birds-eye view. You can toggle this on and off by clicking the icon (it looks like a grid of squares) on the right-hand side
                of the control bar above the collection. When toggled on, artworks will be displayed smaller and in tighter grid.
              </p>

              <p className="mb-2">
                Each work displayed in the collection has a bookmark icon, simply clicking this icon will add it to your bookmarks and show up when you select the &apos;Bookmarks&apos; filter.
              </p>
            </div>
          </Item>
        </Topic>
        <Topic title="Auctions">
          <Item question="What platform are these auctions running on?">
            <div>
              <p className="mb-2">
                Chain/Saw runs all of its auctions using the ChainSaw AuctionHouse (
                <a target="_blank" rel="noreferrer" className="bg-[#d0ff00] text-black" href="https://etherscan.io/address/0x25d1EBa8180982bB9b4F59108F11A777F728fb5f">
                  view on etherscan
                </a>
                ). This contract is a fork of an earlier version of the Zora Auction House. Zora is a permissionless protocol (meaning everyone can use it to create auctions), so we&apos;ve made a few
                tweaks to implement access controls.
              </p>
            </div>
          </Item>
          <Item question="How do auctions work?">
            <p className="mb-2">Here is a rundown of how auctions work:</p>
            <ul className="ml-5 space-y-3 mb-2">
              <li className="list-disc">Items are listed with a reserve price of 0.99 ETH.</li>
              <li className="list-disc">Once the initial 0.99 ETH bid is met, a 24 hour auction begins.</li>
              <li className="list-disc">Each bid must exceed the previous by a minimum of 5%. Bids that do not meet this minimum increment will be rejected.</li>
              <li className="list-disc">A bid placed within the final 15 minutes of an auction will extend the auction by 15 minutes.</li>
              <li className="list-disc">When you place a bid, the associated funds are transferred to the Auction House and held in escrow until either:</li>
              <ul className="ml-5">
                <li className="list-disc">You are outbid, in which case your funds are automatically returned</li>
                <li className="list-disc">
                  The auction ends, in which case the item on auction will be transferred to your wallet. Note: the process of finalizing an auction (distributing the NFT to the winner) can take some
                  time, but usually occurs within 10 minutes of auction end.
                </li>
              </ul>
              <li className="list-disc">In the interest of fairness, once a bid has been placed it cannot be canceled</li>
            </ul>
          </Item>
          <Item question="How do I place a bid?">
            <ol className="space-y-3 ml-5 mb-2">
              <li className="list-decimal">Make sure your wallet is funded and connected to Ethereum Mainnet</li>
              <li className="list-decimal">Enter your bid into the input field beneath the artwork that you want to bid on and hit submit.</li>
            </ol>
            <p className="mb-4">Upon hitting submit, you will be prompted to sign the transaction that will make your bid official.</p>
          </Item>
        </Topic>
        <Topic title="Chain/Saw">
          <Item question="What is Chain/Saw?">
            <p className="mb-4">
              Chain/Saw is an artist-first NFT platform working closely with artists to create awesome, bespoke NFT projects in the form of one-off microsites like this one. To learn more about what
              do and get some alpha on upcoming projects, come hang out with us on{' '}
              <a target="_blank" rel="noreferrer" className="bg-[#d0ff00] text-black" href="https://discord.gg/gZa222uXsp">
                DISCORD
              </a>
              .
            </p>
          </Item>
        </Topic>
      </div>
    </div>
  </>
);

export default Faq;
