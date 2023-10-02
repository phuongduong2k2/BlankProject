import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { AppColors } from '../../constants/ColorSkin'
import AppSvg from '../AppSvg'
import { AppIcons } from '../../constants/AppIcons'

AppButton.propTypes = {
    onPress: PropTypes.func,
    backgroundColor: PropTypes.string,
    title: PropTypes.string,
    prefixIcon: PropTypes.any,
    suffixIcon: PropTypes.any,
    width: PropTypes.number,
    height: PropTypes.number,
    textStyle: PropTypes.object,
    iconSize: PropTypes.number,
    borderStyle: PropTypes.exact({
        borderColor: PropTypes.string,
        borderType: PropTypes.string,
        borderWidth: PropTypes.number,
        borderRadius: PropTypes.number,
    })
}

AppButton.defaultProps = {
    backgroundColor: AppColors.primary,
    title: '',
    prefixIcon: undefined,
    suffixIcon: undefined,
    width: 96,
    height: 48,
    textStyle: {
        color: 'white'
    },
    iconSize: 24,
    borderStyle: {
        borderColor: AppColors.primary,
        borderType: 'solid',
        borderWidth: 1,
        borderRadius: 8
    }
}

function AppButton(props) {
  return (
    <TouchableOpacity
        onPress={props.onPress}
    >
        <View
            style={{
                backgroundColor: props.backgroundColor,
                alignSelf:'flex-start',
                width: props.title ? props.width : props.height,
                height: props.height,
                borderRadius: props.title ? props.borderStyle.borderRadius : 100,
                borderStyle: props.borderStyle.borderType,
                borderWidth: props.borderStyle.borderWidth,
                borderColor: props.borderStyle.borderColor,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: props.title ? 24 : null
            }}
        >   
            {props.prefixIcon && <AppSvg svgSrc={props.prefixIcon} size={props.iconSize}/>}
            {props.title && <Text style={{
                ...props.textStyle,
                paddingHorizontal: 4
            }}>{props.title}</Text>}
            {props.suffixIcon && <AppSvg svgSrc={props.suffixIcon} size={props.iconSize}/>}
        </View>
    </TouchableOpacity>
    
  )
}

export default AppButton