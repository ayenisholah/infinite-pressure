import React, { FC } from 'react';

const SpinningPixel = ({ pixelSize = 2, pixelColor = 'black' }: { pixelSize?: number; pixelColor?: string }) => {
  return <div style={{ height: pixelSize, width: pixelSize, backgroundColor: pixelColor }} className="animate-spin" />;
};

const ChonkySpinner = ({ pixelSize = 4, pixelColor = 'black' }: { pixelSize?: number; pixelColor?: string }) => {
  return (
    <div className="flex space-x-2">
      <SpinningPixel pixelSize={pixelSize} pixelColor={pixelColor} />
      <SpinningPixel pixelSize={pixelSize} pixelColor={pixelColor} />
      <SpinningPixel pixelSize={pixelSize} pixelColor={pixelColor} />
      <SpinningPixel pixelSize={pixelSize} pixelColor={pixelColor} />
    </div>
  );
};

export default ChonkySpinner;
