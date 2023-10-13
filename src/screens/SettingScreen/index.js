import React from 'react';
import {Text, View} from 'react-native';
import AppMediaView from '../../components/AppMediaView';
import AppContentText from '../../components/AppContentText';
import AppScrollBar from '../../components/AppScrollBar';
import { AppColors } from '../../constants/ColorSkin';
import AppDateElement from '../../components/AppDateElement';
import AppFontSize from '../../constants/AppFontSize';
import AppTest from '../../components/AppTest';
import AppCard from '../../components/AppCard';

const SettingScreen = () => {
  return (
    <View>
      <Text>SettingScreen</Text>
      <AppMediaView
        size={60}
        borderRadius={10}
        mediaUri={'https://avatars.githubusercontent.com/u/114902365?s=40&v=4'}
      />

      <AppContentText
        titleContent={'ABC'}
        subTitleContent={'abc'}
        bodyContent={'ABCDEFABCDEFABCDEFABCDEFADEF'}
        containerStyle={{
          alignItems: 'center',
        }}
      />

      <AppScrollBar
        style={{backgroundColor:'red'}}
      />

      <AppDateElement
        title={'21'}
        withEventBadge={true}
        dateStyle={{
          backgroundColor: AppColors.primary,

        }}
        textStyle={{
          color: 'white',
        }}
      />

      {/* <AppTest renderHeader={() => {
        return <View style={{ backgroundColor:"red", height:'100%', width:'100%', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
          {[1,2,3,4].map(item => <Text key={item}>{item}</Text>)}
        </View>
      }} /> */}

      <AppCard
        renderLeftContent={() => {
          return (
            <View style={{flexDirection: 'row',}}>
                      <AppMediaView
                        size={50}
                        borderRadius={100}
                        mediaUri={'https://th.bing.com/th?id=ORMS.e99378b72fdf8e008ffa5055f59999fb&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0'}
                      />
            </View>)
        }}

        renderCenterContent={() => {
          return(
            <View style={{padding: 10}}>
              <AppContentText
                titleContent={'Title'}
                subTitleContent={'Sub title'}
                bodyContent={'Body content'}
              />
            </View>
          )
        }}

        renderRightContent={() => {
          return(
            <View>
                      <AppMediaView
                        size={50}
                        borderRadius={100}
                        mediaUri={'https://th.bing.com/th?id=ORMS.e99378b72fdf8e008ffa5055f59999fb&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0'}
                      />
            </View>
          )
        }}
      />

    </View>
  );
};

export default SettingScreen;
