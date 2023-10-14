import React, {createRef, useState} from 'react';
import {
  Button,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppHeader from '../../components/AppHeader';
import AppSvg from '../../components/AppSvg';
import {AppIcons} from '../../constants/AppIcons';
import AppRating from '../../components/AppRating';
import {useDispatch, useSelector} from 'react-redux';
import {baseApiUrl} from '../../../env.json';
import AppFormContainer from '../../components/AppFormContainer';
import AppTextInput from '../../components/AppTextInput';
import {AppLoadingPopupUtils} from '../../components/AppLoadingPopup';
import AppStepContainer, {
  AppStepContainerUtils,
} from '../../components/AppStepContainer';
import AppStepItem from '../../components/AppStepItem';
import BaseDA from '../../axios/BaseDA';
import AppButton from '../../components/AppButton';
import {AppSnackBarUtils} from '../../components/AppSnackBar';
import AppCollapseItem from '../../components/AppCollapseItem';
import {addUsers, getUsers} from '../../axios/middleware/api/DataDA';
import YesNoChoice from '../../components/YesNoChoice';
import CustomTextInputChoice from '../../components/CustomTextInputChoice';

const dataApi = [
  {
    label: 'Câu 1:',
    option: {
      name: 'cau1',
      label: 'Option 1',
      rules: {required: {value: true, message: 'This field is required'}},
    },
  },
  {
    label: 'Câu 2:',
    option: {
      name: 'cau2',
      label: 'Option 2',
      rules: {
        required: {value: true, message: 'This field is required'},
        minLength: {value: 10, message: 'Tối thiểu 10 ký tự'},
      },
    },
  },
  {
    label: 'Câu 3:',
    option: {name: 'cau3', label: 'Option 3'},
    rules: {required: {value: true, message: 'This field is required'}},
  },
  {
    label: 'Câu 4:',
    option: {name: 'cau4', label: 'Option 4'},
    rules: {required: {value: true, message: 'This field is required'}},
  },
];

const HomeScreen = () => {
  const dispatch = useDispatch();
  const {config, data} = useSelector(state => state.app);

  return (
    <SafeAreaProvider>
      <AppHeader title={'New Project'}>
        <></>
        <></>
      </AppHeader>
      <ScrollView>
        <View style={{flex: 1}}>
          <AppRating />

          {data?.map(item => (
            <Text key={item.id}>{item.products[0].title}</Text>
          ))}
          {/* <AppStepContainer
            onDone={() => {
              console.log('Done step ');
            }}
            onReset={() => {
              console.log('Reset step');
            }}
            duration={300}>
            <AppStepItem />
            <AppStepItem />
            <AppStepItem />
            <AppStepItem />
            <AppStepItem />
            <AppStepItem />
          </AppStepContainer> */}
          <View style={{flexDirection: 'row'}}>
            <AppButton
              title="Back Step"
              backgroundColor={'grey'}
              onPress={() => {
                AppStepContainerUtils.backStep();
              }}
            />
            <AppButton
              title="Next Step"
              onPress={() => {
                AppStepContainerUtils.nextStep();
              }}
            />
            <AppButton
              title="Set Success"
              backgroundColor={'green'}
              onPress={() => {
                AppStepContainerUtils.setSuccess();
              }}
            />
            <AppButton
              title="Set Failed"
              backgroundColor={'red'}
              onPress={() => {
                AppStepContainerUtils.setFailed();
              }}
            />
          </View>
          <Button
            title="call api"
            onPress={async () => {
              const data = await getUsers();
              console.log('data : ', data);
            }}
          />
          <Button
            title="popup"
            onPress={() => {
              AppLoadingPopupUtils.showPopup();
            }}
          />
          {/* <AppFormContainer
            fields={[{name: 'name'}, {name: 'date'}]}
            onSubmitting={async data => {
              console.log('submiting', data);
              const info = {
                name: data.name,
                data: data.date,
              };
              const res = await addUsers(info);
              console.log('respon : ', res);
            }}>
            <AppTextInput
              name={'name'}
              placeholder={'Type your name'}
              label={'Name'}
              rules={{
                required: {
                  value: true,
                  message: 'This name is required',
                },
              }}
            />
            <AppTextInput
              name={'date'}
              placeholder={'Type your city'}
              label={'Date'}
              rules={{
                required: {
                  value: true,
                  message: 'This field is required',
                },
              }}
            />
          </AppFormContainer> */}
          <AppFormContainer
            fields={[
              {name: 'cau1'},
              {name: 'cau2'},
              {name: 'cau3'},
              {name: 'cau4'},
            ]}
            onSubmitting={data => {
              console.log('is submitting');
              AppSnackBarUtils.show({
                title: 'Submit success',
                status: 'success',
                duration: 500,
              });
            }}>
            {dataApi.map(item => (
              <CustomTextInputChoice key={item.label} data={item} />
            ))}
          </AppFormContainer>
          <Button
            title="snackbar success"
            onPress={() => {
              AppSnackBarUtils.show({
                title: 'test',
                status: 'success',
                duration: 1000,
              });
            }}
          />
          <Button
            title="snackbar failed"
            onPress={() => {
              AppSnackBarUtils.show({
                title: 'test',
                status: 'failed',
                duration: 1000,
                textIconBt: AppIcons.arrow_calendar_down,
              });
            }}
          />
          <Button
            title="snackbar warning"
            onPress={() => {
              AppSnackBarUtils.show({
                title: 'test',
                status: 'warning',
                duration: 1000,
              });
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
