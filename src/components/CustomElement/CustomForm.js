import {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {View} from 'react-native';
import CustomElement from '.';
import AppButton from '../AppButton';
import {AppColors} from '../../constants/ColorSkin';

function CustomForm(props) {
  const [errorKey, setErrorKey] = useState([]);
  const {data} = props;
  const {
    control,
    reset,
    setValue,
    handleSubmit,
    formState: {errors},
  } = useForm();
  useEffect(() => {
    reset();
  }, []);

  const onSubmit = dataSubmit => {
    const keys = Object.keys(dataSubmit);
    const keyinAPI = data.map(item => item.name);
    if (keys.length === 0) {
      setErrorKey(keyinAPI);
    } else {
      keyinAPI.forEach(key => {
        if (keys.indexOf(key) === -1 && errorKey.indexOf(key) === -1) {
          setErrorKey([...errorKey, key]);
        }
        if (keys.indexOf(key) !== -1 && errorKey.indexOf(key) !== -1) {
           let arr = errorKey.filter(item => item !== key);
           console.log(arr);
           setErrorKey(arr);
        }
      })
    }

    if (keys.length < data.length) {
      console.log('Vui long dien du thong tin');
    } else {
      setErrorKey([]);
      console.log(dataSubmit);
    }
  };
  return (
    <View>
      {data.map(item => {
        return (
          <CustomElement
            key={item.name}
            item={item}
            control={control}
            errors={errors}
            setValue={setValue}
            style={{
              borderColor:
                errorKey.indexOf(item.name) !== -1
                  ? 'red'
                  : AppColors.background.grey1,
              borderWidth: 1,
            }}
          />
        );
      })}

      <AppButton title={'Submit'} onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

export default CustomForm;
