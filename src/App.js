import React from 'react';
import { Provider } from 'react-redux';

import Search from './components/Search/Search';
import Results from './components/Results';
import store from './store/createStore';

function App() {
  return (
    <Provider store={store}>
      <Search />
      <Results />
    </Provider>
  );
}

export default App;
