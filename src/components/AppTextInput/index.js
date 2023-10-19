import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Keyboard,
  LayoutAnimation,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import PropTypes, {any} from 'prop-types';
import {AppIcons} from '../../constants/AppIcons';
import {Controller} from 'react-hook-form';
import {AppDimentions, KeyboardTypes} from '../../constants/constants';
import styles from './style';
import {AppColors} from '../../constants/ColorSkin';
import AppSvg from '../AppSvg';
import TextStyle from '../../constants/TextStyle';
import AppTextInputProps from './type';

// AppTextInput.propTypes = {
//   name: PropTypes.string,
//   status: PropTypes.string,
//   style: PropTypes.object,
//   backgroundColor: PropTypes.string,
//   borderWidth: PropTypes.number,
//   borderColor: PropTypes.string,
//   borRadius: PropTypes.number,
//   prefixIcon: PropTypes.any,
//   suffixIcon: PropTypes.any,
//   height: PropTypes.any,
//   width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   placeholder: PropTypes.string,
//   value: PropTypes.string,
//   label: PropTypes.any,
//   aboveLabel: PropTypes.any,
//   leftLabel: PropTypes.any,
//   alertColor: PropTypes.string,
//   control: PropTypes.any,
//   render: PropTypes.object,
//   errors: PropTypes.object,
//   rules: PropTypes.exact({
//     required: PropTypes.any,
//     min: PropTypes.any,
//     max: PropTypes.any,
//     minLength: PropTypes.any,
//     maxLength: PropTypes.any,
//     pattern: PropTypes.any,
//     validate: PropTypes.any,
//   }),
//   onReset: PropTypes.func,
//   keyboardType: PropTypes.string,
//   onChangeText: PropTypes.func,
// };

AppTextInput.defaultProps = {
  name: '',
  status: 'default',
  style: {},
  backgroundColor: AppColors.background.grey1,
  borderWidth: 1,
  borderColor: 'transparent',
  borRadius: 8,
  prefixIcon: undefined,
  suffixIcon: undefined,
  height: undefined,
  width: '100%',
  placeholder: 'Placeholder',
  value: '',
  label: undefined,
  aboveLabel: undefined,
  leftLabel: undefined,
  alertColor: AppColors.errorPrimary,
  control: undefined,
  errors: {},
  // rules: {
  //   required: any,
  //   min: any,
  //   max: any,
  //   minLength: any,
  //   maxLength: any,
  //   pattern: any,
  //   validate: any,
  // },
  onReset: () => {},
  keyboardType: KeyboardTypes.default,
  onChangeText: () => {},
};
/**
 *
 * @param {AppTextInputProps} props
 * @returns
 */
function AppTextInput(props) {
  const {
    name,
    status,
    style,
    backgroundColor,
    borderColor,
    borRadius,
    borderWidth,
    height,
    width,
    placeholder,
    value,
    label,
    alertColor,
    prefixIcon,
    suffixIcon,
    control,
    errors,
    rules,
    onReset,
    keyboardType,
    onChangeText,
    aboveLabel,
    leftLabel,
  } = props;

  const [isFocused, setFocused] = useState(false);

  // Keyboard Listener
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      console.log('Keyboard Shown');
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      console.log('Keyboard Hidden');
      setFocused(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  // Animated show error
  const animated = useRef(new Animated.Value(0)).current;

  const firstTime = useRef(true);

  useEffect(() => {
    // Collapse 1 time
    console.log(firstTime.current);
    if (firstTime.current && isFocused) {
      // if (isFocused) {
      Animated.timing(animated, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
      // } else {
      //   Animated.timing(animated, {
      //     toValue: 0,
      //     duration: 300,
      //     useNativeDriver: false,
      //   }).start();
      // }
      firstTime.current = false;
    }
  }, [isFocused]);

  // useEffect(() => {
  //   // LayoutAnimation.easeInEaseOut();
  //   // if (errors && errors[0]) {

  //   // }
  //   console.log(errors[Object.keys(errors)[0]]);
  // }, [errors, errors[name]]);

  // Input Ref
  const inputRef = useRef(null);

  return (
    <>
      {aboveLabel && (
        <Text
          style={{
            ...TextStyle.label.l_3,
            color: AppColors.typography.title,
            marginBottom: AppDimentions.fourthPadding,
          }}>
          {aboveLabel}
        </Text>
      )}
      <View
        style={{
          flexDirection: 'row',
          width: width,
        }}>
        {leftLabel && (
          <View
            style={{
              marginRight: AppDimentions.firstPadding,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                ...TextStyle.label.l_3,
                color: AppColors.typography.title,
                marginBottom: AppDimentions.fourthPadding,
              }}>
              Left Label
            </Text>
          </View>
        )}
        <View
          style={{
            backgroundColor:
              status === 'disable'
                ? AppColors.grey1
                : AppColors.background.grey1,
            height: height ? height : label ? 64 : 48,
            borderRadius: borRadius,
            width: width,
            borderWidth: borderWidth,
            borderColor: errors && errors[name] ? alertColor : borderColor,
            ...styles.container,
          }}>
          {prefixIcon && (
            <View style={{...styles.centerContainer}}>
              <AppSvg SvgSrc={prefixIcon} size={16} />
            </View>
          )}
          <View style={{...styles.containerInput}}>
            {!isFocused && (
              <TouchableOpacity
                style={{...styles.overLay}}
                onPress={() => {
                  console.log('focus');
                  if (inputRef) {
                    setFocused(true);
                    inputRef.current?.focus();
                  }
                }}
              />
            )}
            {label && (
              <Animated.View
                style={{
                  marginBottom: 4,
                  height: animated.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 16],
                  }),
                }}>
                <Text
                  style={{
                    ...TextStyle.label.l_5,
                    color:
                      status === 'disable'
                        ? AppColors.typography.subtitle
                        : isFocused
                        ? AppColors.infoPrimary
                        : AppColors.typography.subtitle,
                  }}>
                  {label}
                </Text>
              </Animated.View>
            )}
            {
              <View
                style={{
                  height: 22,
                }}>
                {control && name && (
                  <Controller
                    control={control}
                    rules={rules}
                    render={({field: {onChange, onBlur, value}}) => (
                      <TextInput
                        ref={inputRef}
                        keyboardType={keyboardType}
                        placeholder={placeholder}
                        placeholderTextColor={'rgba(191, 191, 191, 1)'}
                        style={{...TextStyle.body.b_2, margin: 0, padding: 0}}
                        onBlur={onBlur}
                        onChangeText={value => {
                          onChange(value);
                          onChangeText(name, value);
                        }}
                        value={value}
                        editable={!(status === 'disable')}
                      />
                    )}
                    name={name}
                  />
                )}
              </View>
            }
          </View>
          {suffixIcon && (
            <TouchableOpacity
              style={{
                ...styles.centerContainer,
                paddingHorizontal: AppDimentions.fourthPadding,
                marginRight:
                  AppDimentions.secondPadding - AppDimentions.fourthPadding,
              }}
              onPress={() => {
                Keyboard.dismiss();
                onReset(name);
              }}>
              <AppSvg SvgSrc={suffixIcon} size={16} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View
        style={{
          marginTop: AppDimentions.fourthPadding,
        }}>
        {errors && errors[name] && (
          <Text
            style={{
              ...TextStyle.subtitle.s_3,
              color: alertColor && alertColor,
            }}>
            {errors[name].message}
          </Text>
        )}
      </View>
    </>
  );
}

export default AppTextInput;
