import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { NumberProvider } from './components/context/numbersContext';

import reducer, { initialState } from './components/context/reducer'
import { StateProvider } from './components/context/StateProvider'
import { VerifyProvider } from './components/context/VerifyResultContext';

ReactDOM.render(
  <>
 
  <StateProvider
    initialState={initialState}
    reducer={reducer}
    >
      <NumberProvider>
      <VerifyProvider>
        <App />

  </VerifyProvider>
    </NumberProvider>
  </StateProvider>
  </>,
  document.getElementById('root')
);

