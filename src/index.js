import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
const endpointUrl = "https://api.taddy.org/";

const headers = {
  'Content-Type': 'application/json',
  'User-Agent': 'Good Listens',
  'X-USER-ID': process.env.REACT_APP_TADDY_USER_ID,
  'X-API-KEY': process.env.REACT_APP_TADDY_API_KEY,
}

const client = new ApolloClient({
  uri: endpointUrl,
  cache: new InMemoryCache(),
  headers: headers,
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
