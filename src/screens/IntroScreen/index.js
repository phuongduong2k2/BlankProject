import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import ScreenNames from '../../constants/ScreenNames';

const IntroScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <Text>IntroScreen</Text>
      <Button
        title="start"
        onPress={() => {
          navigation.navigate(ScreenNames.BottomTabNavigation);
        }}
      />
    </View>
  );
};

export default IntroScreen;
