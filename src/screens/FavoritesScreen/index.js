import {useEffect, useState} from 'react';
import {Button, ScrollView, Text, TextInput, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppHeader from '../../components/AppHeader';
import AppButton from '../../components/AppButton';
import {AppIcons} from '../../constants/AppIcons';
import {AppColors} from '../../constants/ColorSkin';
import AppActionSheet, {
  AppActionSheetUtils,
} from '../../components/AppActionSheet';
import AppListTile from '../../components/AppListTile';
import AppRadioButton from '../../components/AppRadioButton';

import {useForm, Controller} from 'react-hook-form';
import AppDivider from '../../components/AppDivider';
import CustomElement from '../../components/CustomElement';
import CustomForm from '../../components/CustomElement/CustomForm';

const FavoritesScreen = () => {
  const data = [
    {
      name: 'cau1',
      title: 'Câu 1: Ông/Bà có hút thuốc lá không?',
      subTitle: [{title: 'Số lượng Thuốc lá hút mỗi ngày'}],
      tab: 1
    },
    {
      name: 'cau2',
      title: 'Câu 2: Ông/Bà có sử dụng rượu, bia không?',
      subTitle: [{title: 'Rượu'}, {title: 'Bia'}],
      tab: 2
    },
    {
      name: 'cau3',
      title: 'Câu 3: Ông/Bà có giảm cân trong 3 tháng qua không?',
      subTitle: [{title: 'Số cân đã giảm (Kg)'}, {title: 'Lý do giảm cân'}],
    },
    // {
    //   name: 'cau4',
    //   title: 'Câu 4: Ông/Bà có giảm cân trong 3 tháng qua không?',
    //   subTitle: [{title: 'Số cân đã giảm (Kg)'}, {title: 'Lý do giảm cân'}],
    // },
    // {
    //   name: 'cau5',
    //   title: 'Câu 5: Ông/Bà có giảm cân trong 3 tháng qua không?',
    //   subTitle: [{title: 'Số cân đã giảm (Kg)'}, {title: 'Lý do giảm cân'}],
    // },
    // {
    //   name: 'cau6',
    //   title: 'Câu 6: Ông/Bà có giảm cân trong 3 tháng qua không?',
    //   subTitle: [{title: 'Số cân đã giảm (Kg)'}, {title: 'Lý do giảm cân'}],
    // },
    // {
    //   name: 'cau7',
    //   title: 'Câu 7: Ông/Bà có giảm cân trong 3 tháng qua không?',
    //   subTitle: [{title: 'Số cân đã giảm (Kg)'}, {title: 'Lý do giảm cân'}],
    // }
  ];

  

  const [show, setShow] = useState(false);
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
            margin: 10,
          }}>
          <AppButton
            onPress={() => {
              setShow(show => !show);
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
            width={108}
          />
        </View>
        {show && (
          <CustomForm data={data}/>
        )}
      </ScrollView>
      {/* <AppActionSheet
        title={'A short description of the actions'}
        data={data}
        onSelected={action => {
          if (typeof action === 'string') {
            console.log(action);
          }
          AppActionSheetUtils.onPress();
        }}
      /> */}
    </SafeAreaProvider>
  );
};

export default FavoritesScreen;
