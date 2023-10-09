import React, {createRef, useState} from 'react';
import {
  Button,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  Text,
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
          <AppStepContainer
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
          </AppStepContainer>
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
          <AppButton
            onPress={() => {
              console.log('Click');
            }}
            backgroundColor="transparent"
            borderStyle={{
              borderWidth: 0,
            }}
            icon={AppIcons.chrome}
            iconSize={16}
            isReverse
            title={'Change action view'}
            width={142}
            height={40}
            textStyle={{
              color: 'black',
              fontSize: 14,
            }}
          />
          <Button
            title="call api"
            onPress={() => {
              dispatch({type: 'GET_DATA'});
            }}
          />
          <Button
            title="call api"
            onPress={async () => {
              const data = await BaseDA.get(`${baseApiUrl}productss`);
              console.log(data);
            }}
          />
          <Button
            title="popup"
            onPress={() => {
              AppLoadingPopupUtils.showPopup();
            }}
          />
          <AppFormContainer
            fields={[{name: 'name'}, {name: 'city'}]}
            onSubmitting={res => {
              console.log('submiting', res);
            }}>
            <AppTextInput
              name={'name'}
              placeholder={'Type your name'}
              label={'Name'}
              rules={{
                required: {
                  value: true,
                  message:
                    'This name is required ads dasd as da sda sda sd asd asd asd asjd fasd ofj poasdjf asdj fkja lskdfj aksd f;ka s;df lksaf jalskdfj aks ;dflka sdf;',
                },
              }}
            />
            <AppTextInput
              name={'city'}
              placeholder={'Type your city'}
              label={'City'}
              rules={{
                required: {
                  value: true,
                  message: 'fasdfasdnkfj',
                },
              }}
            />
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
                textIconBtn: AppIcons.arrow_calendar_down,
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
