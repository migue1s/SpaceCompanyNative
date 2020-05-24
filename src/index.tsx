import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Resources from './containers/Resources';
import {TouchableOpacity} from 'react-native-gesture-handler';
import storybook from '../storybook';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import store from './redux/store';

type RootStackParamList = {
  Storybooks: undefined;
  Resources: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();
export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <RootStack.Navigator initialRouteName="Resources">
          <RootStack.Screen name="Storybooks" component={storybook} />
          <RootStack.Screen
            name="Resources"
            component={Resources}
            options={({navigation}) => ({
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Storybooks')}>
                  <Text>Components</Text>
                </TouchableOpacity>
              ),
            })}
          />
        </RootStack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
