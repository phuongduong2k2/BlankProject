import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {AppColors} from '../../constants/ColorSkin';
import AppSvg from '../AppSvg';

AppButton.propTypes = {
  onPress: PropTypes.func,
  backgroundColor: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.any,
  isReverse: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  textStyle: PropTypes.object,
  iconSize: PropTypes.number,
  borderStyle: PropTypes.exact({
    borderColor: PropTypes.string,
    borderType: PropTypes.string,
    borderWidth: PropTypes.number,
    borderRadius: PropTypes.number,
  }),
};

AppButton.defaultProps = {
  backgroundColor: AppColors.primary,
  title: '',
  icon: undefined,
  isReverse: false,
  width: undefined,
  height: 48,
  textStyle: {
    color: 'white',
  },
  iconSize: 24,
  borderStyle: {
    borderColor: AppColors.primary,
    borderType: 'solid',
    borderWidth: 1,
    borderRadius: 8,
  },
};

function AppButton(props) {
  const {
    onPress,
    backgroundColor,
    width,
    height,
    borderStyle,
    icon,
    iconSize,
    isReverse,
    title,
    textStyle,
  } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          backgroundColor: backgroundColor,
          alignSelf: width == undefined ? 'auto' :  'flex-start',
          width: title ? width : height,
          height: height,
          borderRadius: title ? borderStyle.borderRadius : 100,
          borderStyle: borderStyle.borderType,
          borderWidth: borderStyle.borderWidth,
          borderColor: borderStyle.borderColor,
          flexDirection: isReverse ? 'row-reverse' : 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {icon && <AppSvg SvgSrc={icon} size={iconSize} />}
        {title && (
          <Text
            style={{
              ...textStyle,
            }}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

export default AppButton;
