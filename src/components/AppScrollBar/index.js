import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppColors } from '../../constants/ColorSkin'
import PropTypes from "prop-types";

AppScrollBar.propTypes = {
    style: PropTypes.exact({
        width: PropTypes.number,
        height: PropTypes.number,
        borderRadius: PropTypes.number,
        transform: PropTypes.string,
        backgroundColor: PropTypes.string,
    }),
}

AppScrollBar.defaultProps = {
    style: {
        width: 6,
        height: 70,
        borderRadius: 8,
        transform: '90deg',
        backgroundColor: AppColors.background.disable,
    },
}

function AppScrollBar(props)  {

    const {style} = props;

  return (
    <View style={{
        width: 14,
        height: 'auto',
        justifyContent: 'center',
        backgroundColor: 'pink'
    }}>
      <View style={style}></View>
    </View>
  )
}

export default AppScrollBar

