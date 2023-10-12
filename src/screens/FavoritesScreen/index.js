import {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppHeader from '../../components/AppHeader';
import AppRating from '../../components/AppRating';
import AppButton from '../../components/AppButton';
import {AppIcons} from '../../constants/AppIcons';
import AppTag from '../../components/AppTag';
import AppNumberPicker from '../../components/AppNumberPicker';
import {AppColors} from '../../constants/ColorSkin';
import AppSwitch from '../../components/AppSwitch';
import AppActionSheet, {
  AppActionSheetUtils,
} from '../../components/AppActionSheet';
import AppListTile from '../../components/AppListTile';
import AppExpansionItem from '../../components/AppExpansionItem';
import AppCollapseItem from '../../components/AppCollapseItem';

const FavoritesScreen = () => {
  const data = [
    {
      title: 'Action1',
      color: AppColors.infoActive,
      action: 'GET',
    },
    {
      title: 'Action2',
      color: AppColors.infoActive,
      action: 'POST',
    },
    {
      title: 'Action3',
      color: AppColors.infoActive,
      action: 'PUT',
    },
    {
      title: 'Action4',
      color: AppColors.infoActive,
      action: 'PATCH',
    },
  ];
  return (
    <SafeAreaProvider>
      <AppHeader title={'Longnp Test'}>
        <></>
        <></>
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
              AppActionSheetUtils.onPress();
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
            // isReverse4
            onChange={value => {
              console.log(value);
            }}
          />
        </View>
        <AppCollapseItem title={'csdc'} />
        <AppExpansionItem data={[{icon:"1",title:"1"}, {icon:"2",title:"2"}]}/>
      </ScrollView>
      <AppActionSheet
        title={'A short description of the actions'}
        data={data}
        onSelected={action => {
          if (typeof action === 'string') {
            console.log(action);
          }
          AppActionSheetUtils.onPress();
        }}
      />
    </SafeAreaProvider>
  );
};

export default FavoritesScreen;
