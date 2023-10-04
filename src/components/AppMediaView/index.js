import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { AppColors } from '../../constants/ColorSkin';
import PropTypes from "prop-types";
import AppSvg from '../AppSvg';

AppMediaView.propTypes = {
  borderRadius: PropTypes.number,
  size: PropTypes.number,
  mediaUri: PropTypes.string,
};

AppMediaView.defaultProps = {
  borderRadius: 1000,
  size: 60,
  mediaUri: '',
}

function AppMediaView(props) {

    const {borderRadius, size, mediaUri} = props;

  return (
    <View style={
    {
        backgroundColor: AppColors.grey3,
        borderRadius: borderRadius,
        height: size,
        width: size,
    }}>
      <Image 
        style={{
            borderRadius: borderRadius,
            height: size,
            width: size,
        }} 
        source={{uri: mediaUri}}>
      </Image>
    </View>
  )
}

export default AppMediaView
