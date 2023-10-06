import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View} from 'react-native';
import {AppColors} from '../../constants/ColorSkin';
import AppButton from '../AppButton';
import AppSvg from '../AppSvg';

TestCard.PropTypes = {
  ContentTitle: PropTypes.string,
  SubTitle: PropTypes.string,
  BodyContent: PropTypes.string,
  Button: PropTypes.bool,
  iconLeftSrc: PropTypes.any,
  iconRightSrc: PropTypes.any,
  iconTopSrc: PropTypes.any,
  iconBottomSrc: PropTypes.any,
  iconSize: PropTypes.number,
};
TestCard.defaultProps = {
  ContentTitle: '',
  SubTitle: '',
  BodyContent: '',
  Button: false,
  iconLeftSrc: undefined,
  iconRightSrc: undefined,
  iconTopSrc: undefined,
  iconBottomSrc: undefined,
  iconSize: 40,
};

function TestCard(props) {
  const {
    ContentTitle,
    SubTitle,
    BodyContent,
    Button,
    iconSize,
    iconLeftSrc,
    iconRightSrc,
    iconBottomSrc,
    iconTopSrc,
  } = props;
  return (
    <View
      style={{
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        flexDirection: 'row',
      }}>
      {iconLeftSrc ? <AppSvg svgSrc={iconLeftSrc} size={iconSize} /> : null}
      <View style={{}}>
        {iconTopSrc ? <AppSvg svgSrc={iconTopSrc} size={iconSize} /> : null}
        <Text
          style={{fontSize: 16, lineHeight: 24, fontWeight: 50, paddingTop: 8}}>
          {ContentTitle}
        </Text>
        <Text
          style={{
            fontSize: 12,
            lineHeight: 16,
            fontWeight: 400,
            paddingTop: 4,
          }}>
          {SubTitle}
        </Text>
        <Text
          style={{
            fontSize: 14,
            lineHeight: 22,
            fontWeight: 400,
            paddingTop: 8,
            paddingBottom: 8,
          }}>
          {BodyContent}
        </Text>
        {Button ? (
          <View style={{flexDirection: 'row'}}>
            <AppButton title="Button" onPress={() => {}} />
            <View />
            <View style={{width: 8}} />

            <AppButton title="Button" onPress={() => {}} />
          </View>
        ) : null}
        {iconBottomSrc ? (
          <AppSvg svgSrc={iconBottomSrc} size={iconSize} />
        ) : null}
      </View>
      {iconRightSrc ? <AppSvg svgSrc={iconRightSrc} size={iconSize} /> : null}
    </View>
  );
}
export default TestCard;
