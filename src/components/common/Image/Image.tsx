/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface ImageProps {
  src: string;
  lazy?: boolean;
  alt?: string;
  animate?: boolean;
  width?: number | string;
  height?: number | string;
  className?: string;
  // eslint-disable-next-line no-unused-vars
  onClick?: (values: any) => void;
  onLoad?: () => void;
}

const ImageComponent: React.FC<ImageProps> = ({ src, lazy, alt, animate, className, width, height, onLoad, ...rest }) => {
  const classNames = [className];
  const [imageLoaded, setImageLoaded] = useState(false);
  const handleImgLoad = () => {
    if (onLoad) {
      onLoad();
    }
    setImageLoaded(true);
  };

  if (animate) {
    classNames.push('animate');
  }

  return lazy ? (
    <LazyImage
      alt={alt}
      src={src}
      width={width || '100%'}
      height={height || '100%'}
      className={`${classNames.join(' ')} ${imageLoaded ? 'img-loaded' : ''}`}
      threshold={350}
      onLoad={handleImgLoad}
      {...rest}
    />
  ) : (
    <NormalImage src={src} alt={alt} className={`${imageLoaded ? 'img-loaded' : ''} ${classNames.join(' ')}`} onLoad={handleImgLoad} {...rest} />
  );
};

ImageComponent.defaultProps = {
  alt: '',
  lazy: false,
  animate: false,
  className: '',
  width: 'auto',
  height: 'auto',
};

const LazyImage = styled(LazyLoadImage)`
  &.animate {
    opacity: 0;
    transition: 1s opacity ease;
  }

  &.animate.img-loaded {
    opacity: 1;
  }
`;

const NormalImage = styled.img`
  &.animate {
    opacity: 0;
    transition: 1s opacity ease;
  }

  &.animate.img-loaded {
    opacity: 1;
  }
`;

export default ImageComponent;
