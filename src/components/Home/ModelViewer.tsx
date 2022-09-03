import '@google/model-viewer';
import React from 'react';

const url = 'https://d41sjyubgour.usemoralis.com:2053/server/files/UoVmXy7v9OFuOOoLhBjROitJn7Jk132eHbfU11N2/6b96665cb18248ee0e6a29b768c8f979_cyberkid.glb';
const ModelViewer = () => {
  return (
    // @ts-ignore
    <model-viewer style={{ height: '100%', width: '100%' }} bounds="tight" src={url} camera-controls environment-image="neutral" poster="/images/cyberkid.png" shadow-intensity="1" autoplay />
  );
};

export default ModelViewer;
