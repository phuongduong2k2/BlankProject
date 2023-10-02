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
          <AppSvg svgSrc={AppIcons.setting.active} size={24} />
          <Text>{config}</Text>
          <Button
            title="call api"
            onPress={async () => {
              const data = await axiosClient.get(`${baseApiUrl}produts`);
              console.log(data);
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
