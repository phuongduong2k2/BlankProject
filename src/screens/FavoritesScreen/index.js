import {useEffect, useState} from 'react';
import {Button, ScrollView, Text, TextInput, View} from 'react-native';
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
import AppRadioButton from '../../components/AppRadioButton';

import {useForm, Controller} from 'react-hook-form';
import AppTextInput from '../../components/AppTextInput';

const FavoritesScreen = () => {
  const item1 = {
    name: 'q1',
    title: 'Câu 1: Ông/Bà có hút thuốc lá không?',
    subTitle: [{name: 'q1.1',title: 'Số lượng Thuốc lá hút mỗi ngày'}],
  };
  const item2 = {
    name: 'q2',
    title: 'Câu 2: Ông/Bà có sử dụng rượu, bia không?',
    subTitle: [{name: 'q2.1', title: 'Rượu'}, {name: 'q2.2', title: 'Bia'}],
  };

  const {
    control,
    reset,
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    
  });

  useEffect(() => {
    console.log(errors);
  }, [errors])
  

  const onSubmit = data => console.log(data);

  const [checked, setChecked] = useState(null);
  const [checked2, setChecked2] = useState(null);
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
              reset();
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
        </View>
        {show && (
          <View>
            <View>
              <AppListTile title={item1.title} />
              <View
                style={{
                  height: 56,
                  paddingHorizontal: 24,
                  paddingBottom: 16,
                  backgroundColor: AppColors.background.grey1,
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: '50%',
                  }}>
                  <AppRadioButton
                    label={'Co'}
                    status={checked === 1}
                    onPress={() => {
                      setChecked(1);
                    }}
                    {...register(item1.name)}
                  />
                </View>
                <View>
                  <AppRadioButton
                    label={'Khong'}
                    status={checked === 0}
                    onPress={() => {
                      setChecked(0);
                    }}
                    {...register(item1.name)}
                  />
                </View>
              </View>
              {checked === 1 &&
                item1.subTitle.map(({title, name}, index) => {
                  return (
                    <View
                      key={index}
                    >
                      <AppListTile title={title} />
                      <Controller
                        control={control}
                        rules={{
                          required: {
                            value:true,
                            message:'hgjhghjgvj'
                          },
                        }}
                        render={({field: {onChange, onBlur, value}}) => (
                          <TextInput
                            style={{
                              backgroundColor: AppColors.background.grey1,
                              paddingLeft: 30,
                            }}
                            onBlur={onBlur}
                            placeholder={name}
                            onChangeText={onChange}
                            value={value}
                          />
                        )}
                        name={name}
                      />
                    </View>
                  );
                })}
               {errors && errors['q1.1'] &&<Text style={{color:'red'}}>{errors['q1.1'].message}</Text>}
            </View>
            <View>
              <AppListTile title={item2.title} />
              <View
                style={{
                  height: 56,
                  paddingHorizontal: 24,
                  paddingBottom: 16,
                  backgroundColor: AppColors.background.grey1,
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: '50%',
                  }}>
                  <AppRadioButton
                    label={'Co'}
                    status={checked2 === 1}
                    onPress={() => {
                      setChecked2(1);
                    }}
                    {...register(item2.name)}

                  />
                </View>
                <View>
                  <AppRadioButton
                    label={'Khong'}
                    status={checked2 === 0}
                    onPress={() => {
                      setChecked2(0); 
                    }}
                    {...register(item2.name)}
                  />
                </View>
              </View>
              {checked2 === 1 &&
                item2.subTitle.map(({title, name}, index) => {
                  return (
                    <View
                      key={index}
                    >
                      <AppListTile title={title} />
                      <Controller
                        control={control}
                        rules={{
                          required: true,
                        }}
                        render={({field: {onChange, onBlur, value}}) => (
                          <TextInput
                            style={{
                              backgroundColor: AppColors.background.grey1,
                              paddingLeft: 30,
                            }}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                          />
                        )}
                        name={name}
                      />
                      {/* {errors.subQues.name && <Text>This is required.</Text>} */}
                    </View>
                  );
                })}
            </View>
            <AppButton title={'Submit'} onPress={handleSubmit(onSubmit)} />
          </View>
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
