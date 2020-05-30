import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import storybook from '../storybook';
import {Provider} from 'react-redux';
import store from './redux/store';

import Resources from './containers/Resources';
import ResourceDetail from './containers/ResourceDetail';
import Research from './containers/Research';
import {ResourceType} from './types';

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
    <ResourceStack.Screen name="Resources" component={Resources} />
    <ResourceStack.Screen name="ResourceDetail" component={ResourceDetail} />
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
