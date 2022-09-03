import React, { useEffect, FC } from 'react';

const PRODIBI_ACCOUNT = process.env.NEXT_PUBLIC_PRODIBI_ACCOUNT;

interface ExtremeImageProps {
  id: string;
  height: number;
  width: number;
  className?: string;
}

const ExtremeImage: FC<ExtremeImageProps> = ({ id, height, width, className }) => {
  const prodibiData = {
    id,
    width,
    height,
    branding: false,
    widthMode: 'aspectRatio',
    heightMode: '100vh',
    account: PRODIBI_ACCOUNT,
    smartX: '0.48',
    smartY: '0.67',
  };

  useEffect(() => {
    // @ts-ignore
    const script = document.createElement('script');
    script.async = true;
    script.src = '../../../prodibi.js';
    document.body.appendChild(script);

    // @ts-ignore
    window.prodibiAsync = window.prodibiAsync || [];
    // @ts-ignore
    window.prodibiAsync.push({ type: 'settings', settings: { account: PRODIBI_ACCOUNT } });

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <canvas className={className} data-prodibi={JSON.stringify(prodibiData)} />;
};

export default ExtremeImage;
