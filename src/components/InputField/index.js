import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Keyboard,
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

CustomInputField.propTypes = {
  name: PropTypes.string,
  status: PropTypes.string,
  style: PropTypes.object,
  backgroundColor: PropTypes.string,
  borderWidth: PropTypes.number,
  borderColor: PropTypes.string,
  borRadius: PropTypes.number,
  prefixIcon: PropTypes.any,
  suffixIcon: PropTypes.any,
  height: PropTypes.any,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.any,
  aboveLabel: PropTypes.any,
  leftLabel: PropTypes.any,
  alertColor: PropTypes.string,
  control: PropTypes.any,
  render: PropTypes.object,
  errors: PropTypes.object,
  rules: PropTypes.exact({
    required: PropTypes.any,
    min: PropTypes.any,
    max: PropTypes.any,
    minLength: PropTypes.any,
    maxLength: PropTypes.any,
    pattern: PropTypes.any,
    validate: PropTypes.any,
  }),
  onReset: PropTypes.func,
  keyboardType: PropTypes.string,
  onChangeText: PropTypes.func,
};

CustomInputField.defaultProps = {
  name: '',
  status: 'default',
  style: {},
  backgroundColor: AppColors.background.white,
  borderWidth: 1,
  borderColor: 'transparent',
  borRadius: 8,
  prefixIcon: AppIcons.search,
  suffixIcon: AppIcons.close_circle,
  height: undefined,
  width: '100%',
  placeholder: 'Placeholder',
  value: '',
  label: undefined,
  aboveLabel: undefined,
  leftLabel: undefined,
  alertColor: AppColors.error,
  control: any,
  errors: {},
  rules: {
    required: any,
    min: any,
    max: any,
    minLength: any,
    maxLength: any,
    pattern: any,
    validate: any,
  },
  onReset: () => {},
  keyboardType: KeyboardTypes.default,
  onChangeText: () => {},
};

function CustomInputField(props) {
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

  useEffect(() => {
    if (errors && errors[name]) {
      Animated.timing(animated, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animated, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [errors, errors[name]]);

  // Input Ref
  const inputRef = useRef(null);

  return (
    <>
      {aboveLabel && <Text style={{...styles.aboveLabel}}>{aboveLabel}</Text>}
      <View style={{flexDirection: 'row', width: '100%'}}>
        {leftLabel && (
          <View
            style={{
              marginRight: AppDimentions.firstPadding,
              justifyContent: 'center',
            }}>
            <Text style={{...styles.leftLabel}}>Left Label</Text>
          </View>
        )}
        <View
          style={{
            ...styles.container,
            backgroundColor:
              status === 'disable'
                ? AppColors.grey1
                : AppColors.background.white,
            height: height ? height : label ? 64 : 48,
            borderRadius: borRadius,
            width: width,
            borderWidth: borderWidth,
            borderColor: errors && errors[name] ? alertColor : borderColor,
          }}>
          <View style={{...styles.centerContainer}}>
            <AppSvg svgSrc={prefixIcon} />
          </View>
          <View style={{...styles.containerInput}}>
            {!isFocused && (
              <TouchableOpacity
                style={{...styles.overLay}}
                onPress={() => {
                  console.log('focus');
                  if (inputRef) {
                    setFocused(true);
                    inputRef.current.focus();
                  }
                }}
              />
            )}
            {label && (
              <View
                style={{
                  marginBottom: 4,
                  height: 16,
                }}>
                <Text
                  style={{
                    ...styles.label,
                    color:
                      status === 'disable'
                        ? AppColors.typography.subtitle
                        : isFocused
                        ? AppColors.primary
                        : AppColors.typography.subtitle,
                  }}>
                  {label}
                </Text>
              </View>
            )}
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
                      style={{...styles.textInput}}
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
          </View>
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
            <AppSvg svgSrc={suffixIcon} />
          </TouchableOpacity>
        </View>
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
            style={{...styles.messageText, color: alertColor && alertColor}}>
            {errors[name].message}
          </Text>
        )}
      </Animated.View>
    </>
  );
}

export default CustomInputField;
