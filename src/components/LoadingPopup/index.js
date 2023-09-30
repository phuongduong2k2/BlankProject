import React, {createRef, useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import {AppColors} from '../../constants/AppStyle';

const ref = createRef();

const LoadingPopup = () => {
  useEffect(() => {
    ref.current = {
      showPopup: () => {
        setVisible(true);
      },
      hidePopup: () => {
        setVisible(false);
      },
    };
  }, []);

  const [isVisible, setVisible] = useState(false);
  return (
    <ReactNativeModal
      backdropOpacity={0.3}
      onModalHide={() => {}}
      animationIn={'fadeIn'}
      isVisible={isVisible}
      style={{alignItems: 'center'}}
      hasBackdrop>
      <View
        style={{
          minHeight: 100,
          aspectRatio: 1,
          backgroundColor: 'white',
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator color={AppColors.primary} size={'large'} />
      </View>
    </ReactNativeModal>
  );
};

export default LoadingPopup;

export const LoadingPopupUtils = {
  showPopup: () => {
    if (ref.current) {
      ref.current.showPopup();
    }
  },
  hidePopup: () => {
    if (ref.current) {
      ref.current.hidePopup();
    }
  },
};
