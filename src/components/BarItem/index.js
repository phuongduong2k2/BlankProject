import React, {useEffect, useRef} from 'react';
import {Animated, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import {AppIcons} from '../../constants/AppIcons';
import {AppColors} from '../../constants/ColorSkin';
import AppFontSize from '../../constants/AppFontSize';
import AppFonts from '../../constants/AppFonts';
import AppSvg from '../AppSvg';

BarItem.propTypes = {
  title: PropTypes.string,
  onSelected: PropTypes.func,
  isSelected: PropTypes.bool,
  width: PropTypes.any,
  unactiveColor: PropTypes.string,
  activeColor: PropTypes.string,
  duration: PropTypes.number, // Mili second
  isRow: PropTypes.bool,
  isReverse: PropTypes.bool,
  iconSrc: PropTypes.any,
};

BarItem.defaultProps = {
  title: '',
  onSelected: () => {},
  isSelected: false,
  width: undefined,
  unactiveColor: AppColors.typography.subtitle,
  activeColor: AppColors.primary,
  duration: 300,
  isRow: false,
  isReverse: false,
  iconSrc: AppIcons.star.active,
};

function BarItem(props) {
  const {
    title,
    onSelected,
    isSelected,
    width,
    unactiveColor,
    activeColor,
    duration,
    isRow,
    isReverse,
    iconSrc,
  } = props;

  const animatedTextColor = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedTextColor, {
      toValue: isSelected ? 1 : 0,
      useNativeDriver: false,
      duration: duration,
    }).start();
  }, [isSelected]);

  return (
    <TouchableOpacity
      onPress={onSelected}
      activeOpacity={1}
      style={{
        backgroundColor: 'white',
        width: width,
        paddingVertical: 4,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: isRow ? (isReverse ? 'row-reverse' : 'row') : undefined,
      }}>
      <AppSvg svgSrc={iconSrc} size={20} />
      <Animated.Text
        style={{
          fontFamily: AppFonts.regular,
          color: animatedTextColor.interpolate({
            inputRange: [0, 1],
            outputRange: [unactiveColor, activeColor],
          }),
          fontSize: AppFontSize.s_14,
        }}>
        {title}
      </Animated.Text>
    </TouchableOpacity>
  );
}

export default BarItem;
