import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {AppColors} from '../../constants/ColorSkin';
import AppSvg from '../AppSvg';

AppTag.propTypes = {
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

AppTag.defaultProps = {
  backgroundColor: AppColors.primaryBackground,
  title: '',
  icon: undefined,
  isReverse: false,
  width: 95,
  height: 48,
  textStyle: {
    color: AppColors.primarySub,
  },
  iconSize: 24,
  borderStyle: {
    borderColor: AppColors.primaryBorder,
    borderType: 'solid',
    borderWidth: 1,
    borderRadius: 48,
  },
};

function AppTag(props) {
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
        textStyle
    } = props
  return (
      <View
        style={{
          backgroundColor: backgroundColor,
          alignSelf: 'flex-start',
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
        {icon && <AppSvg svgSrc={icon} size={iconSize} />}
        {title && (
          <Text
            style={{
              ...textStyle,
            }}>
            {title}
          </Text>
        )}
      </View>
  );
}

export default AppTag;
