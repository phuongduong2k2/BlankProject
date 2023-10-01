import React from 'react';
import PropTypes from 'prop-types';
import {SvgXml} from 'react-native-svg';
import {View} from 'react-native';

AppSvg.propTypes = {
  svgSrc: PropTypes.any,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  style: PropTypes.object,
};

AppSvg.defaultProps = {
  svgSrc: null,
  size: 24,
  style: {},
};

function AppSvg(props) {
  const {svgSrc, size, style} = props;

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
      <SvgXml height={'100%'} width={'100%'} xml={svgSrc} />
    </View>
  );
}

export default AppSvg;
