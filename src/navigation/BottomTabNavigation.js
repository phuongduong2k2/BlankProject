import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScreenNames from '../constants/ScreenNames';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import {Text, TouchableOpacity, View} from 'react-native';
import FavoritesScreen from '../screens/FavoritesScreen';
import ShopScreen from '../screens/ShopScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import {AppIcons} from '../constants/AppIcons';
import AppSvg from '../components/AppSvg';
import {AppColors} from '../constants/ColorSkin';
import {AppFonts} from '../constants/AppFonts';

const Tab = createBottomTabNavigator();

const screenData = [
  {
    title: 'Home',
    component: HomeScreen,
    icon: {
      active: AppIcons.home.active,
      inactive: AppIcons.home.inactive,
    },
  },
  {
    title: 'Favorites',
    component: FavoritesScreen,
    icon: {
      active: AppIcons.rice.active,
      inactive: AppIcons.rice.inactive,
    },
  },
  {
    title: 'Notifications',
    component: NotificationsScreen,
    icon: {
      active: AppIcons.rice.active,
      inactive: AppIcons.rice.inactive,
    },
  },
  {
    title: 'Shop',
    component: ShopScreen,
    icon: {
      active: AppIcons.microphone.active,
      inactive: AppIcons.microphone.inactive,
    },
  },
  {
    title: 'Setting',
    component: SettingScreen,
    icon: {
      active: AppIcons.setting.active,
      inactive: AppIcons.setting.inactive,
    },
  },
];
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName={ScreenNames.HomeScreen}>
      {screenData.map((screen, index) => (
        <Tab.Screen
          name={screen.title}
          component={screen.component}
          key={screen.title}
          options={({navigation}) => ({
            headerShown: false,
            tabBarIcon: ({focused}) => {
              return (
                <AppSvg
                  size={20}
                  svgSrc={focused ? screen.icon.active : screen.icon.inactive}
                />
              );
            },
            tabBarLabel: ({focused, children}) => {
              return (
                <Text
                  style={{
                    fontSize: 12,
                    color: !focused
                      ? AppColors.typography.disable
                      : AppColors.primary,
                  }}
                  numberOfLines={1}>
                  {children}
                </Text>
              );
            },
          })}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
