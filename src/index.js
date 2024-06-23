import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import data from './assets/data.json';
import { replaceMissingValues } from './utils/replaceMissingValues';
import { ProcessedDataProvider } from './contexts/ProcessedDataContext';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
const processedData = replaceMissingValues(data);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProcessedDataProvider initialData={processedData}>
      <MantineProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MantineProvider>
    </ProcessedDataProvider>
  </React.StrictMode>
);
