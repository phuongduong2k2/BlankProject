import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import {AppColors} from '../../constants/ColorSkin';

AppRadioButton.propTypes = {
  onPress: PropTypes.func,
  isReverse: PropTypes.bool,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.number,
  borderStyle: PropTypes.exact({
    borderWidth: PropTypes.number,
    borderColor: PropTypes.string,
  }),
  status: PropTypes.bool
};

AppRadioButton.defaultProps = {
  isReverse: false,
  label: '',
  disabled: false,
  size: 20,
  borderStyle: {
    borderWidth: 2,
    borderColor: AppColors.primary,
  },
};

function AppRadioButton(props) {
  const {onPress, isReverse, label, disabled, borderStyle, size, status} = props;
  return (
    <View
      style={{
        flexDirection: isReverse ? 'row-reverse' : 'row',
        alignSelf: 'flex-start',
      }}>
      <TouchableOpacity
        style={{
          height: size,
          width: undefined,
          aspectRatio: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 100,
          borderWidth: borderStyle.borderWidth,
          borderColor: disabled ? AppColors.grey4 : (status ? borderStyle.borderColor : AppColors.grey4),
        }}
        onPress={onPress}>
        {status && (
          <View
            style={{
              height: disabled ? size : size*3/5,
              width: disabled ? size : size*3/5,
              backgroundColor: disabled ? AppColors.grey3 : borderStyle.borderColor,
              borderRadius: 100,
            }}
          />
        )}
      </TouchableOpacity>
      {label && (
        <Text
          style={{
            paddingHorizontal: 8,
            color: disabled ? AppColors.typography.disable : AppColors.typography.title,
            alignSelf: 'center',
          }}>
          {label}
        </Text>
      )}
    </View>
  );
}

export default AppRadioButton;
