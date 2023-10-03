import React from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity, View } from 'react-native';
import { AppColors } from '../../constants/ColorSkin';

AppPaginationItem.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  size: PropTypes.number,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  value: PropTypes.string,
  textStyle: PropTypes.object,
}

AppPaginationItem.defaultProps = {
  size: 32,
  backgroundColor: AppColors.grey3,
  color: AppColors.grey9,
  value: 1
}

function AppPaginationItem(props) {
  const { size, value, textStyle, onClick, disabled} = props;
  let { backgroundColor, color } = props;
  backgroundColor = disabled ? AppColors.grey4 : backgroundColor;
  color = disabled ? AppColors.grey0 : color;
  return (
    <TouchableOpacity
      onPress={()=>{
        if (!disabled && onClick) {
          onClick(value);
        }
      }}
      disabled={disabled}
    >
      <View
        style={{
          width: size,
          height: size,
          backgroundColor: backgroundColor,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 8,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: 500,
            color: color,
            ...textStyle
          }}
        >{value}</Text>
      </View>
    </TouchableOpacity>
  )
}



export default AppPaginationItem;
