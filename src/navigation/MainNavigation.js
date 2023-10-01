import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenNames from '../constants/ScreenNames';
import HomeScreen from '../screens/HomeScreen';
import IntroScreen from '../screens/IntroScreen';
import BottomTabNavigation from './BottomTabNavigation';

const Stack = createNativeStackNavigator();
const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ScreenNames.HomeScreen}>
        <Stack.Screen
          name={ScreenNames.IntroScreen}
          component={IntroScreen}
          options={{headerShown: false}}
        />
        <Stack.Group>
          <Stack.Screen
            name={ScreenNames.BottomTabNavigation}
            component={BottomTabNavigation}
            options={{headerShown: false}}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigation;
