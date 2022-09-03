/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable prefer-template */
import React, { useEffect, useState } from 'react';
import Head from 'next/head';

const OseanScene = () => {
  const buildUrl = 'https://chainsaw.mypinata.cloud/ipfs/Qme6jRECdg49xppZ4818oChQDMg6qDhojHfCGSNhwaxC5v';
  const [, setIsMobile] = useState(true);
  useEffect(() => {
    const loaderUrl = buildUrl + '/5329f1dc29c43251af29e0e95a19bcdb.js';
    const config = {
      dataUrl: buildUrl + '/0c1c6ac2502b7333fe55d7263247d3d2.data',
      frameworkUrl: buildUrl + '/a8a66ccc894260e61e090d182741e1ac.js',
      codeUrl: buildUrl + '/0df3164c9ee77ff093755806af7b1769.wasm',
      symbolsUrl: buildUrl + '/7a1d376f88982f6f04064ac2cb452bc7.json',
      streamingAssetsUrl: 'StreamingAssets',
      companyName: 'Chain/Saw',
      productName: 'INFINITE PRESSURE / POCKET WORLD : NOPATTERN + OSEAN',
      productVersion: '0.1',
    };

    const fullscreenButton = document.querySelector('#unity-fullscreen-button');
    const container = document.querySelector('#unity-container');
    const canvas = document.querySelector('#unity-canvas');
    const loadingBar = document.querySelector('#unity-loading-bar');
    // const progressBarFull = document.querySelector('#unity-progress-bar-full');

    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      setIsMobile(true);
    } else {
      canvas.style.width = '960px';
      canvas.style.height = '600px';

      loadingBar.style.display = 'block';

      const script = document.createElement('script');
      script.src = loaderUrl;
      script.onload = () => {
        createUnityInstance(canvas, config, (progress) => {
          // progressBarFull.style.width = 100 * progress + '%';
        })
          .then((unityInstance) => {
            fullscreenButton.onclick = () => {
              unityInstance.SetFullscreen(1);
            };
            loadingBar.style.display = 'none';
          })
          .catch((message) => {
            console.log(message);
          });
      };
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div id="unity-container" className="w-full  flex  justify-center relative">
      <canvas id="unity-canvas" className="w-full" />
      <div id="unity-loading-bar">
        <div id="unity-logo" />
        {/* <div id="unity-progress-bar-empty">
          <div id="unity-progress-bar-full" />
        </div> */}
      </div>
      <button
        type="button"
        className={`
              absolute bottom-0 -left-3 -bottom-3
              pixel-font bg-[#e73650] px-4 py-4
              hover:shadow-lg hover:scale-110 transition duration-100
            `}
        id="unity-fullscreen-button"
      >
        Fullscreen
      </button>
    </div>
  );
};

export default OseanScene;
