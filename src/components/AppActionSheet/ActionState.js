import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import AppButton from '../AppButton'
import { AppColors } from '../../constants/ColorSkin'

const styles = StyleSheet.create({
    view: {
        width: '100%',
    }
})

ActionState.propTypes = {
    title: PropTypes.string,
    action: PropTypes.string,
    color: PropTypes.string,
    onSelected: PropTypes.func
}

function ActionState(props) {
    const { title, color, onSelected, action } = props
  return (
    <View
        style={styles.view}
    >
        <AppButton
            title={title}
            backgroundColor= {AppColors.background.grey1}
            textStyle={{
                color: color
            }}
            borderStyle={{
                borderRadius: 0,
                borderColor: AppColors.background.grey4,
                borderWidth: 0.6
            }}
            onPress={()=> {
                onSelected(action)
            }}
        />
    </View>
  )
}


export default ActionState
