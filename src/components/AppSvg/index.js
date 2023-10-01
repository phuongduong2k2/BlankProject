import React from 'react';
import PropTypes from 'prop-types';
import {SvgXml} from 'react-native-svg';

AppSvg.propTypes = {
  svgSrc: PropTypes.any,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

AppSvg.defaultProps = {
  svgSrc: null,
  size: 24,
};

function AppSvg(props) {
  const {svgSrc, size} = props;

  return <SvgXml height={size} width={size} xml={svgSrc} />;
}

export default AppSvg;
