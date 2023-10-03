import React, {useEffect, useRef} from 'react';
import {Animated, Text, View} from 'react-native';
import AppSvg from '../AppSvg';
import {AppDimentions} from '../../constants/constants';
import {AppColors} from '../../constants/ColorSkin';
import TextStyle from '../../constants/TextStyle';
import PropTypes from 'prop-types';

AppStepItem.propTypes = {
  iconActive: PropTypes.any,
  iconInactive: PropTypes.any,
};

AppStepItem.defaultProps = {
  iconActive: undefined,
  iconInactive: undefined,
};

function AppStepItem(props) {
  const {currentStep, index, iconActive, iconInactive, duration} = props;

  const animated = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (currentStep >= index) {
      Animated.timing(animated, {
        toValue: 1,
        duration: duration,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animated, {
        toValue: 0,
        duration: duration,
        useNativeDriver: false,
      }).start();
    }
  }, [currentStep]);

  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{height: 24, width: 24}}>
        {iconInactive && <AppSvg svgSrc={iconInactive} />}
        <Animated.View
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            zIndex: 1,
            opacity: animated.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            }),
          }}>
          {iconActive && <AppSvg svgSrc={iconActive} />}
        </Animated.View>
      </View>

      <Animated.View
        style={{
          width: 2,
          position: 'absolute',
          bottom: 0,
          height: animated.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 82],
          }),
          backgroundColor: AppColors.primary,
          marginTop: AppDimentions.fourthPadding,
          zIndex: 1,
        }}
      />
    </View>
  );
}

export default AppStepItem;
