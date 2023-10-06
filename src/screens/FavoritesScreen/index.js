import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppHeader from '../../components/AppHeader';
import AppRating from '../../components/AppRating';
import AppButton from '../../components/AppButton';
import {AppIcons} from '../../constants/AppIcons';
import AppTag from '../../components/AppTag';
import AppNumberPicker from '../../components/AppNumberPicker';
import {AppColors} from '../../constants/ColorSkin';
import AppPaginationItem from '../../components/AppPaginationItem';
import AppSwitch from '../../components/AppSwitch';

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
          <AppRating />
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
            onChange={number => {
              console.log(number);
            }}
            backgroundColor="transparent"
            height={40}
            color="black"
          />
          <AppSwitch
            hasLabel
            // isReverse
            onChange={value => {
              console.log(value);
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default FavoritesScreen;
