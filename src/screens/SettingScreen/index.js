import React from 'react';
import {Text, View} from 'react-native';
import AppMediaView from '../../components/AppMediaView';
import AppContentText from '../../components/AppContentText';

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
    </View>
  );
};

export default SettingScreen;
