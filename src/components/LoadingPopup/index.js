import React, {createRef, useEffect, useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import {AppColors} from '../../constants/ColorSkin';

const ref = createRef();

const LoadingPopup = () => {
  const [label, setLabel] = useState('Loading...');
  const [indicatorComponent, setIndicatorComponent] = useState(() => () => {
    return <ActivityIndicator color={AppColors.primary} size={'large'} />;
  });
  useEffect(() => {
    ref.current = {
      showPopup: data => {
        if (data) {
          if (data.label) {
            setLabel(data.label);
          }
          if (data.indicatorComponent) {
            setIndicatorComponent(() => data.indicatorComponent);
          }
        }
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
        {indicatorComponent()}
        <Text>{label}</Text>
      </View>
    </ReactNativeModal>
  );
};

export default LoadingPopup;

export const LoadingPopupUtils = {
  showPopup: data => {
    if (ref.current) {
      ref.current.showPopup(data);
    }
  },
  hidePopup: () => {
    if (ref.current) {
      ref.current.hidePopup();
    }
  },
};
