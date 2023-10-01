import React from 'react';
import {Button, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppHeader from '../../components/AppHeader';
import AppSvg from '../../components/AppSvg';
import {AppIcons} from '../../constants/AppIcons';
import Rating from '../../components/Rating';
import {useDispatch, useSelector} from 'react-redux';

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
      </View>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
