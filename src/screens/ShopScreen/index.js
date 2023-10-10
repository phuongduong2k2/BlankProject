import React from 'react';
import {Text, View} from 'react-native';
import {AppIcons} from '../../constants/AppIcons';
import AppCard from '../../components/AppCard';

const ShopScreen = () => {
  return <AppCard Button="true" iconTopSrc={AppIcons.tag}></AppCard>;
};

export default ShopScreen;
