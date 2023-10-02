import React, {useEffect, useRef, useState} from 'react';

import PropTypes from 'prop-types';
import {
  Animated,
  Button,
  Easing,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {AppDimentions} from '../../constants/constants';
import ProgressBar from '../ProgressBar';
import {AppIcons} from '../../constants/AppIcons';
import {AppColors} from '../../constants/AppStyle';
import AppSvg from '../AppSvg';

ProgressView.propTypes = {
  progress: PropTypes.number,
  with: PropTypes.any,
  hideValue: PropTypes.bool,
  headerComponent: PropTypes.any,
  leftIcon: PropTypes.any,
  rightIcon: PropTypes.any,
  hideHeader: PropTypes.bool,
  height: PropTypes.number,
  borderRadius: PropTypes.number,
  color: PropTypes.string,
  borderColor: PropTypes.string,
  unfilledColor: PropTypes.string,
  containerStyle: PropTypes.object,
  borderWidth: PropTypes.number,
};

ProgressView.defaultProps = {
  progress: 0,
  with: null,
  hideValue: false,
  headerComponent: () => {},
  leftIcon: undefined,
  rightIcon: undefined,
  hideHeader: false,
  headerComponent: undefined,
  height: 8,
  borderRadius: 8,
  color: AppColors.primary,
  borderColor: AppColors.primary,
  unfilledColor: 'white',
  containerStyle: {},
  borderWidth: 1,
};

function ProgressView(props) {
  const {
    progress,
    width,
    hideValue,
    headerComponent,
    leftIcon,
    rightIcon,
    hideHeader,
    height,
    borderRadius,
    color,
    borderColor,
    unfilledColor,
    containerStyle,
    borderWidth,
  } = props;

  const _renderIcon = (side, icon) =>
    icon && (
      <View
        style={{
          alignSelf: side === 'left' ? undefined : 'flex-end',
          height: 32,
          width: 32,
          marginBottom: AppDimentions.secondPadding,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <AppSvg svgSrc={icon} />
      </View>
    );

  const _renderHeader = () => {
    if (!hideHeader) {
      if (!headerComponent) {
        return (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '50%',
                height: '100%',
                paddingVertical: AppDimentions.secondPadding,
              }}>
              <Text
                style={{
                  flex: 1,
                  color: 'rgba(38, 38, 38, 1)',
                  fontSize: 16,
                  fontWeight: '400',
                }}>
                Content title
              </Text>
            </View>
            <TouchableOpacity
              style={{
                width: '50%',
                height: '100%',
                paddingVertical: AppDimentions.secondPadding,
              }}>
              <Text
                style={{
                  alignSelf: 'flex-end',
                  color: 'rgba(89, 89, 89, 1)',
                  fontSize: 14,
                  fontWeight: '400',
                }}>
                Change action view {'>'}
              </Text>
            </TouchableOpacity>
          </View>
        );
      } else {
        return headerComponent();
      }
    }
  };

  return (
    <View
      style={{
        width: '100%',
        paddingHorizontal: AppDimentions.secondPadding,
        ...containerStyle,
      }}>
      <Button
        title="check"
        onPress={() => {
          console.log(preProgress);
        }}
      />
      {_renderHeader()}
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          paddingBottom: AppDimentions.secondPadding,
        }}>
        <View
          style={{
            width: 32 + AppDimentions.secondPadding - 4,

            justifyContent: 'center',
          }}>
          {_renderIcon('left', leftIcon)}
          {!hideValue && (
            <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                color: 'rgba(38, 38, 38, 1)',
              }}
              numberOfLines={1}>
              Value
            </Text>
          )}
        </View>
        <View
          style={{
            flex: 1,
            height: 32,
            justifyContent: 'center',
          }}>
          <ProgressBar
            progress={progress}
            width={width}
            height={height}
            borderRadius={borderRadius}
            borderColor={borderColor}
            color={color}
            borderWidth={borderWidth}
          />
        </View>
        <View
          style={{
            width: 32 + AppDimentions.secondPadding - 4,
            justifyContent: 'center',
          }}>
          {_renderIcon('right', rightIcon)}
          {!hideValue && (
            <Text
              style={{
                alignSelf: 'flex-end',
                fontSize: 14,
                fontWeight: '400',
                color: 'rgba(38, 38, 38, 1)',
              }}
              numberOfLines={1}>
              Value
            </Text>
          )}
        </View>
      </View>
    </View>
  );
}

export default ProgressView;
