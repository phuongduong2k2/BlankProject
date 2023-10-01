import React, {useState} from 'react';
import {
  Button,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PropTypes, {any, number} from 'prop-types';
import {AppIcons} from '../../constants/AppIcons';
import AppSvg from '../AppSvg';

Rating.propTypes = {
  numberStar: PropTypes.number,
  iconActive: PropTypes.any,
  iconInactive: PropTypes.any,
  // numberSelected: PropTypes.number,
  onSelect: PropTypes.func,
  containerStyle: PropTypes.object,
};

Rating.defaultProps = {
  numberStar: 5,
  iconActive: AppIcons.star_active,
  iconInactive: AppIcons.star,
  // numberSelected: 0,
  onSelect: () => {},
  containerStyle: {},
};

function Rating(props) {
  const {numberStar, onSelect, containerStyle, iconActive, iconInactive} =
    props;
  const [selected, setSelected] = useState(0);

  const handleSelect = number => {
    onSelect(number);
    setSelected(number);
  };

  const _renderContent = () => {
    let arr = [];
    for (let i = 1; i <= numberStar; i++) {
      arr.push(
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            handleSelect(i);
          }}
          key={i}
          style={{
            height: 30,
            aspectRatio: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AppSvg svgSrc={i <= selected ? iconActive : iconInactive} />
        </TouchableOpacity>,
      );
    }
    return arr;
  };

  return (
    <View style={{alignSelf: 'flex-start'}}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          padding: 6,
          backgroundColor: 'white',
          ...containerStyle,
        }}>
        {_renderContent()}
      </View>
    </View>
  );
}

export default Rating;
