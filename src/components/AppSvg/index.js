import React from 'react';
import {View} from 'react-native';
import AppSvgProps from './type';

AppSvg.defaultProps = {
  size: '100%',
};

/**
 * @author phuongduong
 * @param {AppSvgProps} props
 * @returns {React.ReactElement}
 */
function AppSvg(props) {
  const {SvgSrc, size, style, color} = props;

  return (
    <View
      style={{
        aspectRatio: 1,
        height: size,
        width: undefined,
        justifyContent: 'center',
        alignItems: 'center',
        ...style,
      }}>
      {SvgSrc && <SvgSrc height={size} width={size} fill={color} />}
    </View>
  );
}

export default AppSvg;
