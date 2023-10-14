import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const YesNoChoice = props => {
  const {onValueChange} = props;
  const [isSelected, setSelected] = useState(undefined);
  const handleSelect = value => {
    setSelected(value);
    onValueChange(value);
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        width: 100,
        justifyContent: 'space-between',
      }}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            handleSelect(true);
          }}
          style={{
            height: 30,
            width: 30,
            borderWidth: 1,
            backgroundColor:
              isSelected !== undefined && isSelected ? 'red' : undefined,
            borderRadius: 1000,
          }}></TouchableOpacity>
        <Text>Có</Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            handleSelect(false);
          }}
          style={{
            height: 30,
            width: 30,
            borderWidth: 1,
            backgroundColor:
              isSelected !== undefined && !isSelected ? 'red' : undefined,
            borderRadius: 1000,
          }}></TouchableOpacity>
        <Text>Không</Text>
      </View>
    </View>
  );
};

export default YesNoChoice;
