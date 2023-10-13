import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppColors } from '../../constants/ColorSkin'
import PropTypes from "prop-types";
import AppContentText from '../AppContentText';
import AppMediaView from '../AppMediaView';
import AppButton from '../AppButton';
import AppCardProps from './type';

AppCard.propTypes = {
  renderLeftContent: PropTypes.func,
  renderRightContent: PropTypes.func,
  renderCenterContent: PropTypes.func,
}

AppCard.defaultProps = {
  renderLeftContent: () => {},
  renderCenterContent: () => {},
  renderRightContent: () => {},
}
function AppCard(props) {

  const {renderLeftContent, renderCenterContent, renderRightContent} = props;

  return (
    <View style={{
      width: 'auto',
      height: 'auto',
      flexDirection: 'row',
      padding: 5,
    }}>

      {/* //left content */}
      <View style={{
        width: 'auto',
        height: '100%',
        padding: 5,
      }}>
        {renderLeftContent()}
      </View>

      {/* //center content */}
      <View style={{
        width: 'auto',
        height: '100%',
        flexDirection: 'column',
      }}>
        {renderCenterContent()}
      </View>

      {/* //right content */}
      <View style={{
        width: 'auto',
        height: '100%',
        padding: 5,
      }}>
        {renderRightContent()}
      </View>

    </View>
  )
}

export default AppCard

const styles = StyleSheet.create({})