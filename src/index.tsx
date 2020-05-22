import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Resources from './containers/Resources';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Resources">
        <Stack.Screen name="Resources" component={Resources} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
