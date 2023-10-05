import {useState} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import ActionState from './ActionState';
import {AppColors} from '../../constants/ColorSkin';
import AppContentText from '../AppContentText';
import AppButton from '../AppButton';
import ReactNativeModal from 'react-native-modal';

AppActionSheet.propTypes = {
  onSelected: PropTypes.func,
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      color: PropTypes.string,
      action: PropTypes.string
    })
  ),
};

function AppActionSheet(props) {
  const {title, data, onSelected} = props;
  const [isVisible, setIsVisible] = useState(true);
  return (
    <ReactNativeModal
      backdropOpacity={0.3}
      onModalHide={() => {}}
      animationIn={'fadeInUp'}
      animationOut={'fadeOutDown'}
      isVisible={isVisible}
      hasBackdrop
      onBackdropPress={() => {
        setIsVisible(isVisible => !isVisible)
      }}
      style={{
        justifyContent: 'flex-end',
        margin: 0
      }}>
      <View
        style={{
          backgroundColor: AppColors.background.grey3,
          position: 'relative',
          width: '100%',
          flexDirection: 'column',
          borderRadius: 8,
          paddingHorizontal: 2,
        }}>
        <View
          style={{
            borderRadius: 8,
            overflow: 'hidden',
          }}>
          {title && (
            <View
              style={{
                backgroundColor: AppColors.background.grey1,
                paddingVertical: 8,
                borderBottomWidth: 0.6,
                borderBottomColor: AppColors.background.grey4,
              }}>
              <AppContentText
                titleContent={title}
                titleStyle={{
                  fontSize: 14,
                  fontWeight: 400,
                }}
              />
            </View>
          )}
          {
            data.map((item,index) => {
                return (
                    <ActionState
                    key={index}
                    title={item.title}
                    color={item.color}
                    action={item.action}
                    onSelected={onSelected}
                    />
                )
            })
          }
        </View>
        <View
          style={{
            padding: 2,
            borderRadius: 8,
            overflow: 'hidden',
            marginVertical: 8,
          }}>
          <AppButton
            title={'Cancel'}
            backgroundColor={AppColors.background.grey1}
            borderStyle={{
              borderWidth: 0,
              borderRadius: 8,
            }}
            textStyle={{
              color: AppColors.infoActive,
              fontWeight: 500,
            }}
            onPress={onSelected}
          />
        </View>
      </View>
    </ReactNativeModal>
  );
}

export default AppActionSheet;
