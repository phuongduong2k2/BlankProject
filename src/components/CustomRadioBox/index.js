import React, {useEffect, useRef} from 'react';
import {Animated, Image, Text, View} from 'react-native';
import {AppIcons} from '../../constants/AppIcons';
import PropTypes, {any} from 'prop-types';
import {Controller} from 'react-hook-form';
import {AppColors, AppFontFamily} from '../../constants/AppStyle';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {AppDimentions, AppFontSize} from '../../constants/constants';

CustomRadioBox.propTypes = {
  control: PropTypes.any,
  required: PropTypes.exact({
    value: PropTypes.bool,
    message: PropTypes.string,
  }),
  name: PropTypes.string,
  errors: PropTypes.object,
  messageColor: PropTypes.string,
  labelLeft: PropTypes.any,
  labelRight: PropTypes.any,
  checkedIconSource: PropTypes.string,
  fillColor: PropTypes.string,
  innerColor: PropTypes.string,
  iconStyle: PropTypes.object,
  innerIconStyle: PropTypes.object,
  textStyle: PropTypes.object,
  disable: PropTypes.bool,
  iconComponent: PropTypes.func,
};

CustomRadioBox.defaultProps = {
  control: any,
  required: {
    value: false,
    message: '',
  },
  name: '',
  errors: {},
  messageColor: AppColors.error,
  labelLeft: undefined,
  labelRight: undefined,
  checkedIconSource: undefined,
  fillColor: 'red',
  innerColor: 'white',
  iconStyle: {},
  innerIconStyle: {},
  textStyle: {},
  disable: false,
  iconComponent: () => {},
};

function CustomRadioBox(props) {
  const {
    control,
    required,
    name,
    errors,
    messageColor,
    labelLeft,
    labelRight,
    checkedIconSource,
    fillColor,
    innerColor,
    iconStyle,
    innerIconStyle,
    textStyle,
    disable,
    iconComponent,
  } = props;

  const animated = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    console.log(errors);
    if (errors && errors[name]) {
      Animated.timing(animated, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
      console.log('have error');
    } else {
      Animated.timing(animated, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [errors, errors[name]]);

  const renderIconComponent = isChecked => (
    <View
      style={{
        height: 16,
        width: 16,
        backgroundColor: disable // Color second side
          ? isChecked
            ? 'white'
            : 'rgba(232, 232, 232, 1)'
          : 'white',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* Color center here */}
      {iconComponent(isChecked, disable)}
    </View>
  );

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {labelLeft && (
          <Text
            style={{
              marginRight: AppDimentions.fourthPadding,
              fontFamily: AppFontFamily.regular,
              fontSize: AppFontSize.s_14,
              color: AppColors.primaryText,
              ...textStyle,
            }}
            numberOfLines={1}>
            {labelLeft}
          </Text>
        )}
        <View>
          <Controller
            control={control}
            rules={{required: {...required}}}
            name={name}
            render={({field: {onChange, onBlur, value}}) => (
              <BouncyCheckbox
                size={20}
                fillColor={
                  // Color outside
                  disable
                    ? 'rgba(217, 217, 217, 1)'
                    : value
                    ? fillColor
                    : 'rgba(232, 232, 232, 1)'
                }
                unfillColor={'transparent'}
                disableText
                style={{
                  borderRadius: 1000,
                }}
                disabled={disable}
                iconImageStyle={{resizeMode: 'contain', zIndex: 0}}
                iconStyle={{
                  borderColor: 'black',
                  justifyContent: 'center',
                  alignItems: 'center',
                  ...iconStyle,
                }}
                iconComponent={renderIconComponent(value)}
                checkIconImageSource={checkedIconSource}
                innerIconStyle={{borderWidth: 2, ...innerIconStyle}}
                onPress={isChecked => {
                  onChange(isChecked);
                }}
              />
            )}
          />
        </View>
        {labelRight && (
          <Text
            style={{
              marginLeft: AppDimentions.fourthPadding - 1,
              fontFamily: AppFontFamily.regular,
              fontSize: AppFontSize.s_14,
              color: AppColors.primaryText,
              ...textStyle,
            }}
            numberOfLines={1}>
            {labelRight}
          </Text>
        )}
      </View>
      <Animated.View
        style={{
          marginTop: AppDimentions.fourthPadding,
          height: animated.interpolate({
            inputRange: [0, 1],
            outputRange: [5, 16],
          }),
          opacity: animated.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
        }}>
        {errors && errors[name] && (
          <Text
            style={{
              color: messageColor && messageColor,
              fontFamily: AppFontFamily.regular,
              fontSize: AppFontSize.s_12,
            }}>
            {errors[name].message}
          </Text>
        )}
      </Animated.View>
    </>
  );
}

export default CustomRadioBox;
