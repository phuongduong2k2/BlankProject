import React from 'react';
import {useForm} from 'react-hook-form';
import {Button, View} from 'react-native';
import PropTypes from 'prop-types';
import {InputType} from '../../constants/constants';

FormContainer.propTypes = {
  onSubmitting: PropTypes.func,
  fields: PropTypes.arrayOf(PropTypes.object),
  customSubmitButton: PropTypes.func,
  onChangeForm: PropTypes.func,
};

FormContainer.defaultProps = {
  onSubmitting: () => {},
  fields: [{}],
  customSubmitButton: () => {},
  onChangeForm: () => {},
};

function FormContainer(props) {
  const {children, onSubmitting, fields, customSubmitButton, onChangeForm} =
    props;

  const {
    control,
    resetField,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: defaultValueFilter,
  });

  // const textInput = (field, index, errors) => {
  //   const { label, name, placeholder, rules, aboveLabel, leftLabel } = field;
  //   return (
  //     <AppTextInput
  //       control={control}
  //       onReset={resetField}
  //       rules={{ ...rules }}
  //       // borderWidth={1}
  //       name={name}
  //       key={index}
  //       onChangeText={onChangeForm}
  //       label={label}
  //       aboveLabel={aboveLabel}
  //       leftLabel={leftLabel}
  //       errors={errors}
  //       placeholder={placeholder}
  //     />
  //   );
  // };

  const defaultValueFilter = {};
  fields.forEach(
    field =>
      (defaultValueFilter[field.name] =
        field?.type === InputType.checkBox ? false : ''),
  );

  const _renderContent = errors =>
    React.Children.map(children, (child, index) => {
      return React.cloneElement(child, {
        control: control,
        key: index,
        onReset: resetField,
        onChangeText: onChangeForm,
        errors: errors,
      });
    });

  const onSubmit = data => onSubmitting(data);

  const handleError = () => {
    console.log(errors);
  };

  return (
    <View>
      {_renderContent(errors)}
      <Button
        title="check"
        onPress={() => {
          console.log(children);
        }}
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      {customSubmitButton(handleError)}
    </View>
  );
}

export default FormContainer;
