import React, { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Carousel } from 'react-responsive-carousel';
import { useAtom } from 'jotai';
import arrows from '../../../public/images/arrows.svg';
import titleBanner from '../../../public/images/banners/title_banner.jpg';
import bookBanner from '../../../public/images/banners/book_banner.jpg';
import collabBanner from '../../../public/images/banners/collab_banner.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { collectionFilterAtom } from '../../atoms';
import ClientOnly from '../common/ClientOnly/ClientOnly';

interface CarouselProps {
  className?: string;
}

const HeroCarousel: FC<CarouselProps> = (props) => {
  const { className = '' } = props;
  const router = useRouter();
  const [, setFilters] = useAtom(collectionFilterAtom);

  const slidesInfo = [titleBanner, bookBanner, collabBanner];

  const handleCollabClick = () => {
    setFilters(['Collaboration']);
    const controls = document.getElementById('auction-controls');
    controls?.scrollIntoView({ behavior: 'smooth' });
  };

  interface IndicatorProps {
    clickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void;
    isSelected: boolean;
    index: number;
    label: string;
  }

  return (
    <div className={className}>
      <div className="cursor-pointer aspect-w-10 aspect-h-4 overflow-hidden group">
        <ClientOnly>
          <Carousel interval={5000} transitionTime={600} infiniteLoop showArrows stopOnHover autoPlay showStatus={false} showIndicators={false} showThumbs={false}>
            <div className="relative" onClick={() => router.push('/about')}>
              <Image src={slidesInfo[0]} placeholder="blur" />
              <div className="h-[14%] w-[12%] z-10 absolute group-hover:scale-110 transition  bottom-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image src={arrows} />
              </div>
            </div>
            <div onClick={() => window.open('https://shop.nopattern.com', '_blank')}>
              <Image src={slidesInfo[1]} placeholder="blur" />
            </div>
            <div onClick={handleCollabClick}>
              <Image src={slidesInfo[2]} placeholder="blur" />
            </div>
          </Carousel>
        </ClientOnly>
      </div>
    </div>
  );
};

export default HeroCarousel;
