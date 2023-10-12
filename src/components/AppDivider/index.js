import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import { AppColors } from '../../constants/ColorSkin';
=======
import {AppColors} from '../../constants/ColorSkin';
>>>>>>> de67f35b2e7d804e8b4c98a7ce7a3e639a307d24

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
