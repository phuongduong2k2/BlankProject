import React from 'react';
import {
  Button,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppHeader from '../../components/AppHeader';
import AppSvg from '../../components/AppSvg';
import {AppIcons} from '../../constants/AppIcons';
import Rating from '../../components/Rating';
import {useDispatch, useSelector} from 'react-redux';
import {baseApiUrl} from '../../../env.json';
import axiosClient from '../../axios/AxiosClient';
import FormContainer from '../../components/FormContainer';
import CustomInputField from '../../components/InputField';
import {LoadingPopupUtils} from '../../components/LoadingPopup';
import AppButton from '../../components/AppButton';
import { AppColors } from '../../constants/ColorSkin';
import AppRadioButton from '../../components/AppRadioButton';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const {config} = useSelector(state => state.app);
  return (
    <SafeAreaProvider>
      <AppHeader title={'New Project'}>
        <>
          <Button
            title="sdasd"
            onPress={() => {
              dispatch({type: 'GET_ALL_CONFIG'});
            }}
          />
        </>
        <></>
      </AppHeader>
      <ScrollView>
        <View style={{flex: 1}}>
          <Rating />
          
          <AppButton
            onPress={() => {
              console.log('Click');
            }}
            backgroundColor='transparent'
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
              fontSize: 14
            }}
          />
          <Text>adsdsfddsf</Text>
          <AppSvg svgSrc={AppIcons.setting.active} size={24} />
          <Text>{config}</Text>
          <AppRadioButton
            onChange={isSelected => {
              console.log('parent :', isSelected);
            }}
            label='Checked'
            // isReverse
            disabled
          />
          <Button
            title="call api"
            onPress={async () => {
              const data = await axiosClient.get(`${baseApiUrl}produts`);
              console.log(data);
            }}
          />
          <Button
            title="popup"
            onPress={() => {
              LoadingPopupUtils.showPopup({
                indicatorComponent: () => (
                  <View
                    style={{height: 20, width: 20, backgroundColor: 'red'}}
                  />
                ),
              });
            }}
          />
          <FormContainer
            fields={[{name: 'name'}, {name: 'city'}]}
            onSubmitting={res => {
              console.log('submiting', res);
            }}>
            <CustomInputField
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
            <CustomInputField
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
          </FormContainer>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
