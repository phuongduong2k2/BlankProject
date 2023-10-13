import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppColors } from '../../constants/ColorSkin'
import PropTypes from "prop-types";
import AppScrollBarProps from './type';

// AppScrollBar.propTypes = {
//     style: PropTypes.object,
//     isHorizontal: PropTypes.bool
// }

// AppScrollBar.defaultProps = {
//     style: {},
//     isHorizontal: false
// }
/**
 * 
 * @param {AppScrollBarProps} props 
 */
function AppScrollBar(props)  {

    const {style, isHorizontal} = props;

  return (
      <View style={{
          width: isHorizontal ? 70:  6,
          height: isHorizontal ? 6 :70,
          borderRadius: 8,
          backgroundColor: AppColors.background.disable,
          ...style
      }}></View>
  )
}

export default AppScrollBar

