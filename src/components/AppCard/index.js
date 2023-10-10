import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View} from 'react-native';
import {AppColors} from '../../constants/ColorSkin';
import AppButton from '../AppButton';
import AppSvg from '../AppSvg';
import TextStyle from '../../constants/TextStyle';

AppCard.PropTypes = {
  ContentTitle: PropTypes.string,
  SubTitle: PropTypes.string,
  BodyContent: PropTypes.string,
  Button: PropTypes.bool,
  iconLeftSrc: PropTypes.any,
  iconRightSrc: PropTypes.any,
  iconTopSrc: PropTypes.any,
  iconBottomSrc: PropTypes.any,
  iconSize: PropTypes.number,
  alignItems: PropTypes.string,
};
AppCard.defaultProps = {
  ContentTitle: 'ContentTitle',
  SubTitle: 'SubTitle',
  BodyContent: 'BodyContent',
  Button: false,
  iconLeftSrc: undefined,
  iconRightSrc: undefined,
  iconTopSrc: undefined,
  iconBottomSrc: undefined,
  alignItems: '',
  iconSize: 40,
};

function AppCard(props) {
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
    alignItems,
  } = props;
  return (
    <View
      style={{
        backgroundColor: 'white',
        flexDirection: 'row',
      }}>
      {iconLeftSrc ? <AppSvg SvgSrc={iconLeftSrc} size={iconSize} /> : null}
      <View
        style={{
          alignItems: alignItems,
        }}>
        {iconTopSrc ? <AppSvg SvgSrc={iconTopSrc} size={iconSize} /> : null}
        <Text style={{...TextStyle.title.t_3, paddingTop: 8}}>
          {ContentTitle}
        </Text>
        <Text
          style={{
            ...TextStyle.subtitle.s_3,
            paddingTop: 4,
          }}>
          {SubTitle}
        </Text>
        <Text
          style={{
            ...TextStyle.body.b_2,
            paddingTop: 8,
            paddingBottom: 8,
          }}>
          {BodyContent}
        </Text>
        {iconBottomSrc ? (
          <AppSvg SvgSrc={iconBottomSrc} size={iconSize} />
        ) : null}
        {Button ? (
          <View style={{flexDirection: 'row'}}>
            <AppButton
              width={74}
              height={40}
              title="Button"
              onPress={() => {}}
            />
            <View />
            <View style={{width: 8}} />

            <AppButton
              width={74}
              height={40}
              title="Button"
              onPress={() => {}}
            />
          </View>
        ) : null}
      </View>
      {iconRightSrc ? <AppSvg SvgSrc={iconRightSrc} size={iconSize} /> : null}
    </View>
  );
}
export default AppCard;
