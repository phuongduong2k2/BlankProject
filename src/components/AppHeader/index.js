import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

AppHeader.propTypes = {
  title: PropTypes.string,
};

AppHeader.defaultProps = {
  title: 'Title',
};
function AppHeader(props) {
  const {title} = props;
  return (
    <View style={{...styles.container}}>
      <View style={{...styles.positionContainer, left: 0}}>
        {props.children[0]}
      </View>
      <View style={{...styles.centerContainer}}>
        <Text>{title}</Text>
      </View>
      <View style={{...styles.positionContainer, right: 0}}>
        {props.children[1]}
      </View>
    </View>
  );
}

export default AppHeader;
