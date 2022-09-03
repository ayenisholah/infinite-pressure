import React, { FC } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import HeaderBar from '../components/HeaderBar/HeaderBar';
import FooterBar from '../components/FooterBar/FooterBar';
import Providers from '../Providers';
import AlertsModal from '../components/Modals/AlertsModal';
import FiltersModal from '../components/Modals/FiltersModal';

const title = 'INFINITE PRESSURE - NoPattern Studio x Chain/Saw';
const url = 'https://www.infinitepressure.fun/';
const description = 'INFINITE PRESSURE: AN NFT EXHIBITION OF 99 NEW DIGITAL ARTWORKS BY CHUCK ANDERSON. 90 SOLO WORKS + 9 COLLABORATIONS';

const author = 'NoPattern Studio x Chain/Saw';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <Providers>
    <Head>
      <title>{title}</title>
      <meta name="description" content="INFINITE PRESSURE" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <meta charSet="utf-8" />
      <meta name="language" content="english" />
      <meta httpEquiv="content-type" content="text/html" />
      <meta name="author" content={author} />
      <meta name="designer" content={author} />
      <meta name="publisher" content={author} />
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />
      <meta name="distribution" content="web" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@chainsawnft" />
      <meta name="twitter:title" content="INFINITE PRESSURE - NoPattern Studio x Chain/Saw" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content="@chainsawnft" />
      <meta name="twitter:image" content="/images/IP.jpg" />
      <meta name="og:title" content={title} />
      <meta name="og:type" content="site" />
      <meta name="og:url" content={url} />
      <meta name="og:image" content="/images/IP.jpg" />
      <meta name="og:site_name" content={title} />
      <meta name="og:description" content={description} />
    </Head>
    <div className="min-h-screen relative">
      <div className="pb-10">
        <HeaderBar />
        <AlertsModal />
        <FiltersModal />
        <Component {...pageProps} />
      </div>
      <FooterBar />
    </div>
  </Providers>
);

export default App;
