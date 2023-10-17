import React from 'react';
import {useForm} from 'react-hook-form';
import {Button, View} from 'react-native';
import PropTypes from 'prop-types';
import {InputType} from '../../constants/constants';

AppFormContainer.propTypes = {
  onSubmitting: PropTypes.func,
  fields: PropTypes.arrayOf(PropTypes.object),
  customSubmitButton: PropTypes.func,
  onChangeForm: PropTypes.func,
};

AppFormContainer.defaultProps = {
  onSubmitting: () => {},
  fields: [{}],
  customSubmitButton: () => {},
  onChangeForm: () => {},
};

function AppFormContainer(props) {
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
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      {customSubmitButton(handleError)}
    </View>
  );
}

export default AppFormContainer;
