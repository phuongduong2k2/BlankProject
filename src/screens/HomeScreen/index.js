import React, {createRef, useEffect, useRef, useState} from 'react';
import {
  Button,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppHeader from '../../components/AppHeader';
import AppSvg from '../../components/AppSvg';
import {AppIcons} from '../../constants/AppIcons';
import AppRating from '../../components/AppRating';
import {useDispatch, useSelector} from 'react-redux';
import {baseApiUrl} from '../../../env.json';
import AppFormContainer from '../../components/AppFormContainer';
import AppTextInput from '../../components/AppTextInput';
import {AppLoadingPopupUtils} from '../../components/AppLoadingPopup';
import AppStepContainer, {
  AppStepContainerUtils,
} from '../../components/AppStepContainer';
import AppStepItem from '../../components/AppStepItem';
import BaseDA from '../../axios/BaseDA';
import AppButton from '../../components/AppButton';
import {AppSnackBarUtils} from '../../components/AppSnackBar';
import AppCollapseItem from '../../components/AppCollapseItem';
import {addUsers, getUsers} from '../../axios/middleware/api/DataDA';
import YesNoChoice from '../../components/YesNoChoice';
import CustomTextInputChoice from '../../components/CustomTextInputChoice';
import {InputType} from '../../constants/constants';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const {config, data, layoutList} = useSelector(state => state.app);
  // const [filterFields, setFilterFields] = useState([]);

  // useEffect(() => {
  //   let arr = [];
  //   dataApi.forEach(data => {
  //     arr.push({name: data.label, type: InputType.radio});
  //     data.options.map(item => arr.push({name: item.name, type: item.type}));
  //   });
  //   setFilterFields(arr);
  // }, []);

  const refScroll = useRef(null);

  useEffect(() => {
    console.log(refScroll);
  }, []);

  const [layout, setLayout] = useState([]);
  const refListItem = useRef();
  return (
    <SafeAreaProvider>
      <AppHeader title={'New Project'}>
        <></>
        <></>
      </AppHeader>
      <ScrollView ref={refScroll}>
        <View style={{flex: 1}}>
          <AppRating />

          {data?.map(item => (
            <Text key={item.id}>{item.products[0].title}</Text>
          ))}
          {/* <AppStepContainer
            onDone={() => {
              console.log('Done step ');
            }}
            onReset={() => {
              console.log('Reset step');
            }}
            duration={300}>
            <AppStepItem />
            <AppStepItem />
            <AppStepItem />
            <AppStepItem />
            <AppStepItem />
            <AppStepItem />
          </AppStepContainer> */}
          <View style={{flexDirection: 'row'}}>
            <AppButton
              title="Back Step"
              backgroundColor={'grey'}
              onPress={() => {
                AppStepContainerUtils.backStep();
              }}
            />
            <AppButton
              title="Next Step"
              onPress={() => {
                AppStepContainerUtils.nextStep();
              }}
            />
            <AppButton
              title="Set Success"
              backgroundColor={'green'}
              onPress={() => {
                AppStepContainerUtils.setSuccess();
              }}
            />
            <AppButton
              title="Set Failed"
              backgroundColor={'red'}
              onPress={() => {
                AppStepContainerUtils.setFailed();
              }}
            />
          </View>
          {/* <Button
            title="call api"
            onPress={async () => {
              const data = await getUsers();
              console.log('data : ', data);
            }}
          />
          <Button
            title="popup"
            onPress={() => {
              AppLoadingPopupUtils.showPopup();
            }}
          /> */}

          <Button
            title="genarate date picker"
            onPress={() => {
              // const firstDayOfMonth = new Date(2023, 9, 2);
              // console.log(firstDayOfMonth, firstDayOfMonth.getDay());
              // let arr = [];
              // for (let j = 0; j < 6; j++) {
              //   for (let i = 0; i < 7; i++) {
              //     let dateNumber = i + j + j * 6;
              //     arr.push(dateNumber);
              //   }
              // }
              // console.log(arr, arr.length);
              // console.log(filterFields);
            }}
          />
          {/* <Button
            title="snackbar success"
            onPress={() => {
              AppSnackBarUtils.show({
                title: 'test',
                status: 'success',
                duration: 1000,
              });
            }}
          />
          <Button
            title="snackbar failed"
            onPress={() => {
              AppSnackBarUtils.show({
                title: 'test',
                status: 'failed',
                duration: 1000,
                textIconBt: AppIcons.arrow_calendar_down,
              });
            }}
          />
          <Button
            title="snackbar warning"
            onPress={() => {
              AppSnackBarUtils.show({
                title: 'test',
                status: 'warning',
                duration: 1000,
              });
            }}
          /> */}
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
