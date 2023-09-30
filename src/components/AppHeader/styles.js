import {StyleSheet} from 'react-native';
import {AppDimentions} from '../../constants/constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 44,
    backgroundColor: '#fff',
    zIndex: 1,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  positionContainer: {
    height: '100%',
    zIndex: 1,
    position: 'absolute',
    paddingHorizontal: AppDimentions.secondPadding,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerContainer: {
    zIndex: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
