/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import MainNavigation from './src/navigation/MainNavigation';
import {Provider} from 'react-redux';
import store from './src/redux/store';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    </SafeAreaView>
  );
}

export default App;
