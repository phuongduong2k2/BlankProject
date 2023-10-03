import React, {createRef, useEffect, useRef, useState} from 'react';
import {Animated, Text, View} from 'react-native';
import AppSvg from '../AppSvg';
import {AppDimentions} from '../../constants/constants';
import {AppColors} from '../../constants/ColorSkin';
import TextStyle from '../../constants/TextStyle';
import PropTypes from 'prop-types';
import {AppIcons} from '../../constants/AppIcons';

AppStepItem.propTypes = {
  iconActive: PropTypes.any,
  iconInactive: PropTypes.any,
};

AppStepItem.defaultProps = {
  iconActive: undefined,
  iconInactive: undefined,
};

function AppStepItem(props) {
  const {currentStep, index, iconActive, iconInactive, duration, status} =
    props;

  const animated = useRef(new Animated.Value(0)).current;

  const [colorIndicator, setColorIndicator] = useState(
    AppColors.background.grey3,
  );

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

  useEffect(() => {
    switch (status) {
      case 'success':
        setColorIndicator('green');
        break;
      case 'failed':
        setColorIndicator('red');
        break;
      default:
        setColorIndicator(AppColors.background.grey3);
    }
  }, [status]);

  return (
    <View style={{flexDirection: 'row'}}>
      <View
        style={{
          alignItems: 'center',
          width: 32,
          height: 20,
          justifyContent: 'center',
          marginHorizontal: AppDimentions.secondPadding,
        }}>
        <Text>8:42</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            height: 20,
            width: 16,
            justifyContent: 'center',
          }}>
          <View
            style={{
              height: 16,
              width: 16,
              backgroundColor: colorIndicator,
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AppSvg svgSrc={AppIcons.rice.inactive} size={10} />
          </View>
        </View>
        <Animated.View
          style={{
            width: 1,
            height: animated.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 40],
            }),
            position: 'absolute',
            bottom: 0,
            zIndex: 1,
            backgroundColor: AppColors.successPrimary,
          }}
        />
        <View
          style={{
            width: 1,
            zIndex: 0,
            height: 40,
            backgroundColor: AppColors.background.grey3,
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          height: 20,
          marginLeft: AppDimentions.secondPadding,
          justifyContent: 'center',
        }}>
        <Text style={{alignSelf: 'stretch'}}>Content title {currentStep}</Text>
      </View>
      <View
        style={{
          width: 140,
          height: 20,
          justifyContent: 'center',
        }}>
        <Text>Change Action View</Text>
      </View>
    </View>
  );
}

export default AppStepItem;
