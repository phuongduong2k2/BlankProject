import React from 'react';
import {Text, View} from 'react-native';
import TestCard from '../../components/TestCard';
import {AppIcons} from '../../constants/AppIcons';

const ShopScreen = () => {
  return <TestCard Button="true" iconTopSrc={AppIcons.tag}></TestCard>;
};

export default ShopScreen;
