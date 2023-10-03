import React, {createRef, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {AppDimentions} from '../../constants/constants';
import PropTypes from 'prop-types';

AppStepContainer.propTypes = {
  currentStep: PropTypes.number,
  duration: PropTypes.number,
  currentStatus: PropTypes.string,
};

AppStepContainer.defaultProps = {
  currentStep: 0,
  duration: 300,
  currentStatus: '',
};
const ref = createRef(null);
function AppStepContainer(props) {
  const {children, currentStep, duration, currentStatus} = props;

  let numberStep = 1;
  const [statusChild, setStatusChild] = useState([]);

  if (Array.isArray(children)) {
    numberStep = children.length;
  }

  useEffect(() => {
    let arr = [];
    for (let i = 0; i < numberStep; i++) {
      arr.push('phuong');
    }
    setStatusChild(arr);
  }, []);

  useEffect(() => {
    ref.current = {
      setSuccess: () => {
        const newStatus = [...statusChild];
        const x = newStatus.map((item, index) =>
          index === currentStep ? 'success' : item,
        );
        setStatusChild(x);
      },
      setFailed: () => {
        const newStatus = [...statusChild];
        const x = newStatus.map((item, index) =>
          index === currentStep ? 'failed' : item,
        );
        setStatusChild(x);
      },
    };
  }, [statusChild, currentStep]);

  const _renderStepItem = () =>
    React.Children.map(children, (child, index) => {
      return React.cloneElement(child, {
        currentStep: currentStep,
        index: numberStep - 1 - index,
        duration: duration,
        status: statusChild[numberStep - 1 - index],
      });
    });

  return (
    <View
      style={{
        backgroundColor: 'white',
        paddingVertical: AppDimentions.secondPadding,
      }}>
      <Text>{currentStep}</Text>
      {statusChild.map(item => (
        <Text>{item}</Text>
      ))}
      {_renderStepItem()}
    </View>
  );
}

export default AppStepContainer;

export const AppStepContainerUtils = {
  setSuccess: () => {
    if (ref.current) {
      ref.current.setSuccess();
    }
  },
  setFailed: () => {
    if (ref.current) {
      ref.current.setFailed();
    }
  },
};
