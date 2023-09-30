import React from 'react';
import {Button, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppHeader from '../../components/AppHeader';
import AppSvg from '../../components/AppSvg';

const HomeScreen = () => {
  return (
    <SafeAreaProvider>
      <AppHeader title={'New Project'}>
        <></>
        <></>
      </AppHeader>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
