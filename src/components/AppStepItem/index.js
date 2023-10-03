import React from 'react';
import {Text, View} from 'react-native';
import ProgressBar from '../ProgressBar';

const AppStepItem = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View>
        <Text>Content title</Text>
        <Text>Subtitle</Text>
      </View>
      <View style={{height: 114, backgroundColor: 'red'}}>
        <View style={{height: 24, width: 24, backgroundColor: 'red'}} />
      </View>
      <Text>AppStepItem</Text>
    </View>
  );
};

export default AppStepItem;
