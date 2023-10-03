import React from 'react';
import {Button, Text, View} from 'react-native';

const AppStepContainer = props => {
  const {children} = props;

  const _renderStepItem = () =>
    React.Children.map(children, (child, index) => {
      return React.cloneElement(child, {});
    });

  return <View>{_renderStepItem()}</View>;
};

export default AppStepContainer;
