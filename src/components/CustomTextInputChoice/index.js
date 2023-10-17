import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import YesNoChoice from '../YesNoChoice';
import AppTextInput from '../AppTextInput';
import {Controller} from 'react-hook-form';

const CustomTextInputChoice = props => {
  const {data, onChangeChoice, control, key, onReset, onChangeText, errors} =
    props;

  const [isOption, setOption] = useState(false);

  return (
    <View>
      <Text>{data.label}</Text>
      <YesNoChoice onValueChange={value => setOption(value)} />
      {isOption && (
        <View>
          <AppTextInput
            control={control}
            key={key}
            onReset={onReset}
            onChangeText={onChangeText}
            errors={errors}
            name={data.option.name}
            rules={data.option.rules}
            placeholder={`Type your ques ${data.option.label}`}
          />
        </View>
      )}
    </View>
  );
};

export default CustomTextInputChoice;
