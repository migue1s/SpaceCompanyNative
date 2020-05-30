import 'react-native-gesture-handler';
import React, {useState, useCallback} from 'react';
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
import {ResourceType, ThemeVariant} from './types';
import ThemedText from './components/ThemedText';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useTheme} from './hooks';
import {useColorScheme} from 'react-native';

import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn:
    'https://4878489069e8449ca2f6c0ee6e444f25@o400529.ingest.sentry.io/5259048',
});

const Drawer = createDrawerNavigator();

export const ThemeContext = React.createContext<ThemeVariant>('light');

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

const ResourceWrapper = () => {
  return (
    <ResourceStack.Navigator>
      <ResourceStack.Screen name="Resources" component={Resources} />
      <ResourceStack.Screen name="ResourceDetail" component={ResourceDetail} />
    </ResourceStack.Navigator>
  );
};

const MainNavigation = () => {
  const theme = useTheme();
  return (
    <NavigationContainer theme={theme === 'light' ? DefaultTheme : DarkTheme}>
      <Provider store={store}>
        <Drawer.Navigator initialRouteName="Resources">
          <Drawer.Screen name="Resources" component={ResourceWrapper} />
          <Drawer.Screen name="Research" component={Research} />
          <Drawer.Screen name="Storybooks" component={storybook} />
        </Drawer.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default function App() {
  const systemTheme = useColorScheme() as ThemeVariant;

  return (
    <ThemeContext.Provider value={systemTheme}>
      <MainNavigation />
    </ThemeContext.Provider>
  );
}
