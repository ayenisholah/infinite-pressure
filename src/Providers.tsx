import React from 'react';
import { MoralisProvider } from 'react-moralis';
import { QueryClient, QueryClientProvider } from 'react-query';
import { moralisConfig } from './helpers/constants';

const queryClient = new QueryClient();

const Providers: React.FC = ({ children }) => (
  <MoralisProvider appId={moralisConfig.appId} serverUrl={moralisConfig.serverUrl}>
    <QueryClientProvider client={queryClient} contextSharing>
      {children}
    </QueryClientProvider>
  </MoralisProvider>
);

export default Providers;
