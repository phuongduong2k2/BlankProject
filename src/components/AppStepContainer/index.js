import React from 'react';
import {Text, View} from 'react-native';
import {AppDimentions} from '../../constants/constants';
import PropTypes from 'prop-types';

AppStepContainer.propTypes = {
  currentStep: PropTypes.number,
  duration: PropTypes.number,
};

AppStepContainer.defaultProps = {
  currentStep: 0,
  duration: 300,
};

function AppStepContainer(props) {
  const {children, currentStep, duration} = props;

  let numberStep = 1;

  if (Array.isArray(children)) {
    numberStep = children.length;
  }

  const _renderStepItem = () =>
    React.Children.map(children, (child, index) => {
      return (
        <View
          style={{
            marginTop: index !== 0 ? AppDimentions.secondPadding : undefined,
          }}>
          {React.cloneElement(child, {
            currentStep: currentStep,
            index: numberStep - 1 - index,
            duration: duration,
          })}
        </View>
      );
    });

  return (
    <View
      style={{
        alignSelf: 'flex-start',
      }}>
      {_renderStepItem()}
    </View>
  );
}

export default AppStepContainer;
