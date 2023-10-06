import React, {createRef, useEffect, useRef, useState} from 'react';
import {Animated, Text, View} from 'react-native';
import AppSvg from '../AppSvg';
import {AppDimentions} from '../../constants/constants';
import {AppColors} from '../../constants/ColorSkin';
import TextStyle from '../../constants/TextStyle';
import PropTypes from 'prop-types';
import {AppIcons} from '../../constants/AppIcons';

AppStepItem.propTypes = {
  successIconSrc: PropTypes.any,
  failedIconSrc: PropTypes.any,
  timeLine: PropTypes.string,
  title: PropTypes.string,
  renderActionView: PropTypes.func,
  successColor: PropTypes.string,
  failedColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  style: PropTypes.object,
};

AppStepItem.defaultProps = {
  successIconSrc: AppIcons.success_step,
  failedIconSrc: AppIcons.failed_step,
  timeLine: '8:42',
  title: 'Content title',
  renderActionView: () => <Text>Action View</Text>,
  successColor: AppColors.successPrimary,
  failedColor: AppColors.errorPrimary,
  backgroundColor: AppColors.background.grey3,
  style: {},
};

function AppStepItem(props) {
  const {
    currentStep,
    index,
    successIconSrc,
    failedIconSrc,
    duration,
    status,
    timeLine,
    title,
    renderActionView,
    successColor,
    failedColor,
    backgroundColor,
    style,
  } = props;

  const animated = useRef(new Animated.Value(0)).current;
  const focusedAnimated = useRef(new Animated.Value(0)).current;
  const [colorIndicator, setColorIndicator] = useState(backgroundColor);

  const [iconIndicator, setIconIndicator] = useState(null);

  useEffect(() => {
    // Scale Anim
    if (currentStep === index) {
      Animated.timing(focusedAnimated, {
        toValue: 1,
        duration: duration,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(focusedAnimated, {
        toValue: 0,
        duration: duration,
        useNativeDriver: false,
      }).start();
    }

    // Indicator Load Anim
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
        setColorIndicator(successColor);
        setIconIndicator(successIconSrc);
        break;
      case 'failed':
        setColorIndicator(failedColor);
        setIconIndicator(failedIconSrc);
        break;
      default:
        setColorIndicator(backgroundColor);
        setIconIndicator(null);
    }
  }, [status]);

  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: AppDimentions.secondPadding,
        ...style,
      }}>
      <View
        style={{
          alignItems: 'center',
          width: 32,
          height: 20,
          justifyContent: 'center',
          marginRight: AppDimentions.secondPadding,
        }}>
        <Text>{timeLine}</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            height: 20,
            width: 16,
            zIndex: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Animated.View
            style={{
              height: 16,
              width: 16,
              position: 'absolute',
              borderWidth: 0.5,
              borderColor: focusedAnimated.interpolate({
                inputRange: [0, 1],
                outputRange: [
                  AppColors.background.grey3,
                  AppColors.successPrimary,
                ],
              }),
              transform: [
                {
                  scale: focusedAnimated.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 1.5],
                  }),
                },
              ],
              backgroundColor: colorIndicator,
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}></Animated.View>
          {status !== undefined && <AppSvg SvgSrc={iconIndicator} size={10} />}
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
        <Text style={{alignSelf: 'stretch'}}>{title}</Text>
      </View>
      <View
        style={{
          // width: 140,
          height: 25,
          justifyContent: 'center',
        }}>
        {renderActionView()}
      </View>
    </View>
  );
}

export default AppStepItem;
