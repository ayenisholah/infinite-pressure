/* eslint-disable no-nested-ternary */
import React, { FC, useEffect, useState, MouseEvent } from 'react';
import { utils } from 'ethers';
import isFloat from 'validator/lib/isFloat';
import Image from 'next/image';
import { useQueryClient } from 'react-query';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { useContractFunction } from '../../../hooks';
import { getBidderMessage } from '../../../helpers/constants';
import { gweiToEth } from '../../../helpers';
import errorImg from '../../../../public/images/error.svg';
import ChonkySpinner from '../ChonkySpinner';

interface BidderProps {
  className?: string;
  auctionId: string;
  placeholder?: string;
  minimumBid: string;
}

const Bidder: FC<BidderProps> = (props) => {
  const { className, auctionId, placeholder, minimumBid } = props;
  const [bidAmount, setBidAmount] = useState('');
  const [bidderMessage, setBidderMessage] = useState('');
  const queryClient = useQueryClient();
  const { send, status, resetStatus } = useContractFunction({
    functionName: 'createBid',
  });

  useEffect(() => {
    if (status === 'Fail') {
      setBidderMessage('fail');
      setTimeout(() => setBidderMessage(''), 4000);
    }
    if (status === 'Mining') {
      setBidderMessage('mining');
    }

    if (status === 'PendingSignature') {
      setBidderMessage('signing');
    }

    if (status === 'Success') {
      setBidderMessage('success');
      queryClient.invalidateQueries('collection');
      setTimeout(() => {
        resetStatus();
        setBidderMessage('');
      }, 4000);
    }
  }, [status, resetStatus, queryClient]);

  const handlePlaceBid = async () => {
    if (bidAmount && bidAmount < gweiToEth(minimumBid)) {
      setBidderMessage('minimum bid');
      setTimeout(() => setBidderMessage(''), 2000);
      return;
    }
    if (bidAmount) {
      const amount = utils.parseEther(bidAmount.toString()).toString();
      send({ params: { auctionId, amount }, msgValue: amount });
    } else {
      setBidderMessage('empty');
      setTimeout(() => setBidderMessage(''), 2000);
    }
  };

  const handleInputClick = (e: MouseEvent<HTMLInputElement>) => {
    if (!(e.target as HTMLInputElement).value) {
      setBidAmount(gweiToEth(minimumBid));
    }
  };

  const isError = (bidderMessage: string) => {
    return ['minimum bid', 'empty', 'fail'].includes(bidderMessage);
  };

  const buttonMarkup =
    status === 'None' && !bidderMessage ? (
      <div className="flex w-full h-12">
        <Input
          onChange={(value: any) => setBidAmount(value)}
          onClick={handleInputClick}
          value={bidAmount}
          validate={(value: string) => isFloat(value) || value === ''}
          className={`
            no-border
            outline-none
            w-full h-full
            md:w-10/12 text-lg
            text-right
            tracking-widest            
            pixel-font          
           bg-gray-200 px-4 placeholder-gray-300 
           focus:outline-none`}
          placeholder={placeholder}
        />
        <Button
          onClick={() => handlePlaceBid()}
          className={`
            bg-red-500 pixel-font 
            text-lg            
            h-full w-full md:w-5/12 
            md:max-w-xs py-2 text-white
            hover:shadow-md hover:scale-105 transition
          `}
        >
          Submit
        </Button>
      </div>
    ) : null;

  const messageMarkup = bidderMessage ? (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          backgroundColor: isError(bidderMessage) ? 'red' : status === 'Mining' ? '#54daff' : 'ipGreen',
        }}
        className={`
          w-full h-12
          text-lg
          flex items-center justify-center
          tracking-widest      
          pixel-font text-center         
          text-white px-4      
      `}
      >
        {['empty', 'fail'].includes(bidderMessage) && (
          <AnimatePresence>
            <motion.div className="animate-blink h-6 w-6 mr-3 mb-1" initial={{ scale: 1.5 }} animate={{ scale: 1 }}>
              <Image src={errorImg} />
            </motion.div>
          </AnimatePresence>
        )}
        {getBidderMessage(bidderMessage, gweiToEth(minimumBid))}
        {status === 'Mining' && (
          <span className="ml-4">
            <ChonkySpinner pixelSize={6} pixelColor="white" />
          </span>
        )}
      </motion.div>
    </AnimatePresence>
  ) : null;

  return (
    <div className={className}>
      {buttonMarkup}
      {messageMarkup}
    </div>
  );
};

export default Bidder;
