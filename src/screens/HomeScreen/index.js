import React from 'react';
import {Button, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppHeader from '../../components/AppHeader';
import AppSvg from '../../components/AppSvg';
import {AppIcons} from '../../constants/AppIcons';
import Rating from '../../components/Rating';
import {useDispatch, useSelector} from 'react-redux';
import {baseApiUrl} from '../../../env.json';
import axiosClient from '../../axios/AxiosClient';

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
      <View style={{flex: 1}}>
        <Rating />
        <AppSvg svgSrc={AppIcons.setting.active} />
        <Text>{config}</Text>
        <Button
          title="call api"
          onPress={async () => {
            const data = await axiosClient.get(`${baseApiUrl}produts`);
            console.log(data);
          }}
        />
      </View>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
