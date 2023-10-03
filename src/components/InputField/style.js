import {StyleSheet} from 'react-native';
import AppFontSize from '../../constants/AppFontSize';
import {AppColors} from '../../constants/ColorSkin';
import {AppDimentions} from '../../constants/constants';
import AppFonts from '../../constants/AppFonts';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingLeft: AppDimentions.secondPadding,
    paddingVertical: 2,
  },
  containerInput: {
    flex: 1,
    marginLeft: AppDimentions.fourthPadding,
    height: '100%',
    justifyContent: 'center',
  },
  overLay: {
    backgroundColor: 'transparent',
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    zIndex: 1,
  },
  centerContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageText: {fontFamily: AppFonts.regular, fontSize: AppFontSize.s_12},
});

export default styles;
