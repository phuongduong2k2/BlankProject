import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import { AppColors } from '../../constants/ColorSkin';

AppDivider.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.any,
  style: PropTypes.object,
};

AppDivider.defaultProps = {
  color: AppColors.grey3,
  height: 1,
  width: undefined,
  style: {},
};

function AppDivider(props) {
  const {style, color, height, width} = props;
  return (
    <View
      style={{
        ...style,
        height: height,
        width: width,
        backgroundColor: color,
      }}
    />
  );
}

export default AppDivider;
