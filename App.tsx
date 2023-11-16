/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Platform, SafeAreaView, Text, UIManager} from 'react-native';
import MainNavigation from './src/navigation/MainNavigation';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AppLoadingPopup from './src/components/AppLoadingPopup';
import AppSnackBar from './src/components/AppSnackBar';
import SnackBarManager from './src/components/SnackBarManager';

// if (Platform.OS === 'android') {
//   if (UIManager.setLayoutAnimationEnabledExperimental) {
//     UIManager.setLayoutAnimationEnabledExperimental(true);
//   }
// }
function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <Provider store={store}>
          <MainNavigation />
          <AppLoadingPopup />
          {/* <AppSnackBar /> */}
          <SnackBarManager />
        </Provider>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default App;
