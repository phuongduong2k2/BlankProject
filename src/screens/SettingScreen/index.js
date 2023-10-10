import React from 'react';
import {Text, View} from 'react-native';
import AppMediaView from '../../components/AppMediaView';
import AppContentText from '../../components/AppContentText';
import AppScrollBar from '../../components/AppScrollBar';
import { AppColors } from '../../constants/ColorSkin';
import AppDateElement from '../../components/AppDateElement';
import AppFontSize from '../../constants/AppFontSize';

const SettingScreen = () => {
  return (
    <View>
      <Text>SettingScreen</Text>
      <AppMediaView
        size={60}
        borderRadius={10}
        mediaUri={'https://avatars.githubusercontent.com/u/114902365?s=40&v=4'}
      />

      <AppContentText
        titleContent={'ABC'}
        subTitleContent={'abc'}
        bodyContent={'ABCDEFABCDEFABCDEFABCDEFADEF'}
        containerStyle={{
          alignItems: 'center',
        }}
      />

      <AppScrollBar
      isHorizontal={true}
      />

      <AppDateElement
        title={'21'}
        withEventBadge={true}
        dateStyle={{
          backgroundColor: AppColors.primary,

        }}
        textStyle={{
          color: 'white',
        }}
      />

    </View>
  );
};

export default SettingScreen;
