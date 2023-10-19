import {useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import AppListTile from '../AppListTile';
import AppRadioButton from '../AppRadioButton';
import {Controller} from 'react-hook-form';
import AppDivider from '../AppDivider';
import {AppColors} from '../../constants/ColorSkin';
function CustomElement(props) {
  const [checked, setChecked] = useState(null);
  const {item, control, errors, setValue, style} = props;
  return (
    <View
      style={{
        marginBottom: 16,
        marginHorizontal: 16,
        borderRadius: 16,
        backgroundColor: AppColors.background.grey1,
        overflow: 'hidden',
        ...style
      }}>
      <View
        style={{
          padding: 16,
        }}>
        <Text>{item.title}</Text>
      </View>
      <View
        style={{
          height: 56,
          paddingHorizontal: 24,
          paddingBottom: 16,
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: '50%',
          }}>
          <AppRadioButton
            label={'Co'}
            color={'#FF5F52'}
            borderStyle={{
              borderColor: '#FF5F52',
              borderWidth: 2,
            }}
            width={167}
            height={40}
            status={checked === 1}
            onPress={() => {
              setChecked(1);
              setValue(item.name, []);
            }}
          />
        </View>
        <View>
          <AppRadioButton
            label={'Khong'}
            color={'#FF5F52'}
            borderStyle={{
              borderColor: '#FF5F52',
              borderWidth: 2,
            }}
            width={167}
            height={40}
            status={checked === 0}
            onPress={() => {
              setChecked(0);
              setValue(item.name, [false]);
            }}
          />
        </View>
      </View>
      {checked === 1 && (
        <AppDivider color={AppColors.background.grey4} width={'100%'} />
      )}
      {checked === 1 &&
        item.subTitle.map(({title}, index) => {
          return (
            <View
              key={index}
              style={{
                backgroundColor: AppColors.background.grey1,
                paddingBottom: 10,
                paddingHorizontal: 20,
              }}>
              <View
                style={{
                  paddingVertical: 8,
                }}>
                <Text>{title}</Text>
              </View>
              <Controller
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: 'This field is Required',
                  },
                }}
                render={({field: {onChange, onBlur, onFocus, value}}) => (
                  <TextInput
                    style={{
                      borderColor: AppColors.background.grey3,
                      borderRadius: 8,
                      borderWidth: 1,
                    }}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onChangeText={onChange}
                    value={value}
                  />

                )}
                name={item.name + '.' + index}
              />
              {errors[item.name] && errors[item.name][index] &&(
                <View
                  style={{
                    backgroundColor: AppColors.background.grey1,
                    paddingBottom: 10,
                  }}>
                  <Text
                    style={{
                      color: AppColors.errorActive,
                    }}>
                    {errors[item.name][index].message}
                  </Text>
                </View>
              )}
            </View>
          );
        })}
    </View>
  );
}

CustomElement.propTypes = {};

export default CustomElement;
