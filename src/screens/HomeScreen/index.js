import React from 'react';
import {Button, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppHeader from '../../components/AppHeader';
import AppSvg from '../../components/AppSvg';
import {AppIcons} from '../../constants/AppIcons';
import Rating from '../../components/Rating';

const HomeScreen = () => {
  return (
    <SafeAreaProvider>
      <AppHeader title={'New Project'}>
        <>
          <Button title="sdasd" />
        </>
        <></>
      </AppHeader>
      <View style={{flex: 1}}>
        <Rating />
        <AppSvg svgSrc={AppIcons.setting.active} />
      </View>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
