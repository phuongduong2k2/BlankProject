import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppFonts from '../../constants/AppFonts';
import AppFontSize from '../../constants/AppFontSize';
import PropTypes from "prop-types";

AppContentText.propTypes = {
    containerStyle: PropTypes.exact({
        alignItems: PropTypes.string,
    }),
    titleContent: PropTypes.string,
    subTitleContent: PropTypes.string,
    bodyContent: PropTypes.string,
    titleStyle: PropTypes.exact({
      fontSize: PropTypes.number,
      fontFamily: PropTypes.string,
    }),
    subTitleStyle: PropTypes.exact({
      fontSize: PropTypes.number,
      fontFamily: PropTypes.string,
    }),
    bodyStyle: PropTypes.exact({
      fontSize: PropTypes.number,
      fontFamily: PropTypes.string,
    }),
}

AppContentText.defaultProps = {
    containerStyle: {
        alignItems: 'center',
    },
    titleContent: 'Title',
    subTitleContent: '',
    bodyContent: '',
    titleStyle: {
      fontSize: AppFontSize.s_16,
      fontFamily: AppFonts.bold,
    },
    subTitleStyle: {
      fontSize: AppFontSize.s_12,
      fontFamily: AppFonts.light,
    },
    bodyStyle: {
      fontSize: AppFontSize.s_14,
    },
}

function AppContentText(props) {

    const {
      containerStyle, 
      contentAlign, 
      titleContent, 
      subTitleContent, 
      bodyContent,
      titleStyle,
      subTitleStyle,
      bodyStyle,
    } = props;

  return (
    <View style={[{flexDirection: 'column', }, containerStyle]}>
      <Text style={titleStyle}>{titleContent}</Text>
      {(subTitleContent) && <Text style={subTitleStyle}>{subTitleContent}</Text>}
      {(bodyContent) && <Text style={bodyStyle}>{bodyContent}</Text>}
    </View>
  )
}

export default AppContentText

