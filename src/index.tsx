import 'react-native-gesture-handler';
import * as React from 'react';
import {
  NavigationContainer,
  RouteProp,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import storybook from '../storybook';
import {Provider} from 'react-redux';
import store from './redux/store';

import Resources from './containers/Resources';
import ResourceDetail from './containers/ResourceDetail';
import Research from './containers/Research';
import {ResourceType} from './types';
import ThemedText from './components/ThemedText';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {setTheme} from './redux/globalSlice';

const Drawer = createDrawerNavigator();

export type ResourceProps = {
  Resources: undefined;
  ResourceDetail: {
    resource: ResourceType;
  };
};
const ResourceStack = createStackNavigator<ResourceProps>();
export type ResourceDetailScreenRouteProp = RouteProp<
  ResourceProps,
  'ResourceDetail'
>;

const ResourceWrapper = () => (
  <ResourceStack.Navigator>
    <ResourceStack.Screen
      name="Resources"
      component={Resources}
      options={{
        headerRight: () => {
          return (
            <TouchableOpacity
              onPress={() => {
                if (store.getState().global.theme === 'light') {
                  store.dispatch(setTheme('dark'));
                } else {
                  store.dispatch(setTheme('light'));
                }
              }}>
              <ThemedText variant="body">toggle theme</ThemedText>
            </TouchableOpacity>
          );
        },
      }}
    />
    <ResourceStack.Screen name="ResourceDetail" component={ResourceDetail} />
  </ResourceStack.Navigator>
);

export default function App() {
  const currentTheme = store.getState().global.theme;
  return (
    <NavigationContainer
      theme={currentTheme === 'light' ? DefaultTheme : DarkTheme}>
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
