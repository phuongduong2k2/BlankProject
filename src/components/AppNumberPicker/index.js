import {Text, View} from 'react-native';

import PropTypes from 'prop-types';
import AppButton from '../AppButton';
import {AppIcons} from '../../constants/AppIcons';
import {AppColors} from '../../constants/ColorSkin';
import { useState } from 'react';

AppNumberPicker.propTypes = {
  onChange: PropTypes.func,
  width: PropTypes.number,
  height: PropTypes.number,
  backgroundColor: PropTypes.string,
  backgroundIconColor: PropTypes.string,
  value: PropTypes.number,
  color: PropTypes.oneOf(['white', 'black']),
  borderStyle: PropTypes.exact({
    borderWidth: PropTypes.number,
    borderColor: PropTypes.string,
    borderRadius: PropTypes.number,
  }),
};

AppNumberPicker.defaultProps = {
  width: 106,
  height: 48,
  backgroundColor: AppColors.primary,
  backgroundIconColor: 'transparent',
  value: 1,
  color: 'white',
  borderStyle: {
    borderWidth: 1,
    borderColor: AppColors.grey4,
    borderRadius: 8,
  },
};

function AppNumberPicker(props) {
  const {onChange, width, height, backgroundColor, backgroundIconColor, color, borderStyle, value} = props;
  const [number, setNumber] = useState(value);
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: backgroundColor,
        width: width,
        height: height,
        borderWidth: borderStyle.borderWidth,
        borderColor: borderStyle.borderColor,
        borderRadius: borderStyle.borderRadius,
      }}>
      <AppButton
        onPress={()=>{
            setNumber(number => number-1);
            onChange(number-1);
        }}
        height={24}
        backgroundColor={backgroundIconColor}
        borderStyle={{
          borderWidth: 0,
        }}
        icon={color === 'white' ? AppIcons.minus.white : AppIcons.minus.black}
        iconSize={16}
        textStyle={{
          color: color,
        }}
      />
      <Text
        style={{
          color: color,
        }}>
        {number}
      </Text>
      <AppButton
        onPress={()=>{
            setNumber(number => number+1);
            onChange(number+1);
        }}
        height={24}
        backgroundColor={backgroundIconColor}
        borderStyle={{
          borderWidth: 0,
        }}
        icon={color === 'white' ? AppIcons.plus.white : AppIcons.plus.black}
        iconSize={16}
        textStyle={{
          color: color,
        }}
      />
    </View>
  );
}

export default AppNumberPicker;
