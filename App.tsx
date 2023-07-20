/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-native-paper';

import Navigation from './src/navigation/Navigation';

function App(): JSX.Element {
  return (
    <Provider>
      <Navigation />
    </Provider>
  );
}

export default App;
