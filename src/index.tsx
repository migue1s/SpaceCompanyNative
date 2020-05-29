import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import storybook from '../storybook';
import {Provider} from 'react-redux';
import store from './redux/store';

import Resources from './containers/Resources';
import Research from './containers/Research';

const Drawer = createDrawerNavigator();

const ResourceStack = createStackNavigator<{Resources: undefined}>();

const ResourceWrapper = () => (
  <ResourceStack.Navigator>
    <ResourceStack.Screen name="Resources" component={Resources} />
    {/* Place the resource detail here */}
  </ResourceStack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Drawer.Navigator initialRouteName="Resources">
          <Drawer.Screen name="Resources" component={ResourceWrapper} />
          <Drawer.Screen name="Research" component={Research} />
          <Drawer.Screen name="Storybooks" component={storybook} />
        </Drawer.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
