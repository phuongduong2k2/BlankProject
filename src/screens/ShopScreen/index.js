import React, {useRef} from 'react';
import {Button, FlatList, ScrollView, Text, View} from 'react-native';
import AppFormContainer from '../../components/AppFormContainer';
import CustomTextInputChoice from '../../components/CustomTextInputChoice';
import {InputType} from '../../constants/constants';
import {AppSnackBarUtils} from '../../components/AppSnackBar';

const ShopScreen = () => {
  const refScroll = useRef(null);

  return (
    <View style={{flex: 1}} ref={refScroll}>
      <AppFormContainer
        // fields={filterFields}
        // onScroll={errors => {
        //   const firstItem = Object.keys(errors)[0];
        //   if (refScroll.current) {
        //     layout.forEach(
        //       item =>
        //         item.name === firstItem &&
        //         refScroll.current.scrollTo({y: item.position}),
        //     );
        //   }
        // }}
        onSubmitting={data => {
          console.log('is submitting');
          AppSnackBarUtils.show({
            title: 'Submit success',
            status: 'success',
            duration: 500,
          });
        }}>
        {/* {dataApi.map(item => (
          <CustomTextInputChoice
            // ref={refListItem}
            // onChangeLayout={(name, y) => {
            //   console.log(name, y);
            //   setLayout([...layout, {name: name, position: y}]);
            // }}
            key={item.label}
            data={item}
          />
        ))} */}
      </AppFormContainer>
    </View>
  );
};

export default ShopScreen;
