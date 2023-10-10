import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppColors } from '../../constants/ColorSkin';
import AppFonts from '../../constants/AppFonts';
import PropTypes from 'prop-types';

AppDateElement.propTypes = {
    dateStyle: PropTypes.object,
    eventBadgeStyle: PropTypes.object,
    textStyle: PropTypes.object,
    withEventBadge: PropTypes.bool,
    title: PropTypes.string,
}

AppDateElement.defaultProps = {
    dateStyle: {},
    eventBadgeStyle: {},
    textStyle: {},
    withEventBadge: true,
    title: '1',
}

function AppDateElement(props) {

    const {dateStyle, eventBadgeStyle, textStyle, withEventBadge, title} = props;

  return (
    <View style={{
        width: 'auto',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 10,
        paddingRight: 10,
    }}>
      <View style={{
        width: 24,
        height: 24,
        borderRadius: 100,
        backgroundColor: null,
        justifyContent: 'center',
        alignItems: 'center',
        ...dateStyle,
      }}>
        <Text style={{...textStyle}}>{title}</Text>
      </View>

      {(withEventBadge) && <View style={{
            width: 8,
            height: 8,
            borderRadius: 100,
            backgroundColor: AppColors.primary,
            margin: 3,
            ...eventBadgeStyle,
      }}></View>}
    </View>
  )
}

export default AppDateElement

