import React from 'react';
import {ScrollView, Switch, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppHeader from '../../components/AppHeader';
import Rating from '../../components/Rating';
import AppButton from '../../components/AppButton';
import {AppIcons} from '../../constants/AppIcons';
import AppTag from '../../components/AppTag';
import AppNumberPicker from '../../components/AppNumberPicker';
import { AppColors } from '../../constants/ColorSkin';

const FavoritesScreen = () => {
  return (
    <SafeAreaProvider>
      <AppHeader title={'Longnp Test'}>
        <>
          <Text>Test</Text>
        </>
      </AppHeader>
      <ScrollView>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-start',

          }}>
          <Rating />
          <AppButton
            onPress={() => {
              console.log('Click');
            }}
            icon={AppIcons.chrome}
            iconSize={16}
            isReverse
            title={'Button'}
            textStyle={{
              color: 'white',
              fontSize: 14,
              paddingRight: 4,
            }}
          />
          <AppTag title={'Tag'} icon={AppIcons.tag} isReverse />
          <AppNumberPicker
            onChange={(number) => {
              console.log(number)
            }}
            backgroundColor= 'transparent'
            height={40}
            color= 'black'
          />
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default FavoritesScreen;
