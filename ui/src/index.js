import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
import { AuthContextProvider } from './Firebase/context';
import './styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import AnimationProvider from './assets/animationContext';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const container = document.getElementById('app');
const root = createRoot(container);

const client = new ApolloClient({
  uri: process.env.UI_API_ENDPOINT || 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});

root.render(
  <AuthContextProvider>
    <ApolloProvider client={client}>
      <AnimationProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AnimationProvider>
    </ApolloProvider>
  </AuthContextProvider>
);
// used to make component hot reload
if (module.hot) {
  module.hot.accept();
}
