import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { NumberProvider } from './components/context/numbersContext';

import reducer, { initialState } from './components/context/reducer'
import { StateProvider } from './components/context/StateProvider'
import { VerifyProvider } from './components/context/VerifyResultContext';
import { RandomNumbersProvider } from './components/context/GenerateRandomNumbersContext'

ReactDOM.render(
  <>
  <StateProvider
    initialState={initialState}
    reducer={reducer}
    >
      <NumberProvider>
        <RandomNumbersProvider>
          <VerifyProvider>
            <App />
          </VerifyProvider>
        </RandomNumbersProvider>
      </NumberProvider>
  </StateProvider>
  </>,
  document.getElementById('root')
);

