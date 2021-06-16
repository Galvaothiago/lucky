import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import reducer, { initialState } from './components/context/reducer'
import { StateProvider } from './components/context/StateProvider'

ReactDOM.render(
  <>
  <StateProvider
    initialState={initialState}
    reducer={reducer}
  >
    <App />
  </StateProvider>
  </>,
  document.getElementById('root')
);

