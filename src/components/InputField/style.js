import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  aboveLabel: {
    fontFamily: AppFontFamily.medium,
    marginBottom: AppDimentions.fourthPadding,
    color: AppColors.title,
    fontSize: AppFontSize.s_14,
  },
  leftLabel: {
    fontFamily: AppFontFamily.medium,
    marginBottom: AppDimentions.fourthPadding,
    color: AppColors.title,
    fontSize: AppFontSize.s_14,
  },
  label: {
    fontFamily: AppFontFamily.regular,
    fontSize: AppFontSize.s_12,
    lineHeight: AppLineHeight.l_16,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingLeft: AppDimentions.secondPadding,
    paddingVertical: 2,
  },
  containerInput: {},
  overLay: {
    backgroundColor: 'transparent',
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 1,
  },
  centerContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    margin: 0,
    padding: 0,
    color: AppColors.primaryText,
    fontSize: AppFontSize.s_14,
    // lineHeight: AppLineHeight.l_22,
    fontFamily: AppFontFamily.regular,
  },
  messageText: {fontFamily: AppFontFamily.regular, fontSize: AppFontSize.s_12},
});

export default styles;
