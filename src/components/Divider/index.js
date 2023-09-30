import React from "react";
import { View } from "react-native";
import { AppColors } from "../../constants/AppStyle";
import PropTypes from "prop-types";

Divider.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.any,
  style: PropTypes.object,
};

Divider.defaultProps = {
  color: AppColors.grey3,
  height: 1,
  width: undefined,
  style: {},
};

function Divider(props) {
  const { style, color, height, width } = props;
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

export default Divider;
