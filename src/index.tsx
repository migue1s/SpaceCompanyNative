import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
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
import configureStore from './redux/store';

import Resources from './containers/Resources';
import ResourceDetail from './containers/ResourceDetail';
import Research from './containers/Research';
import {ResourceType, ThemeVariant} from './types';
import {useTheme} from './hooks';
import {useColorScheme} from 'react-native';

import * as Sentry from '@sentry/react-native';
import {stopLoop, startLoop} from './utils/TickLoop';
import {tick} from './redux/resourceSlice';
import {PersistGate} from 'redux-persist/integration/react';

// Slow down FPS in develop to minimize impact on development only tools
const FPS = __DEV__ ? 1 / 2 : 1 / 10;

export const {store, persistor} = configureStore();

if (!__DEV__) {
  Sentry.init({
    dsn:
      'https://4878489069e8449ca2f6c0ee6e444f25@o400529.ingest.sentry.io/5259048',
  });
}

const Drawer = createDrawerNavigator();

export const ThemeContext = React.createContext<ThemeVariant>('light');

export type ResourceProps = {
  Resources: undefined;
  ResourceDetail: {
    resource: ResourceType;
  };
};
export type ResearchProps = {
  Research: undefined;
} & Pick<ResourceProps, 'ResourceDetail'>;
const ResearchStack = createStackNavigator<ResearchProps>();
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

const ResearchWrapper = () => {
  return (
    <ResearchStack.Navigator>
      <ResearchStack.Screen name="Research" component={Research} />
      <ResearchStack.Screen name="ResourceDetail" component={ResourceDetail} />
    </ResearchStack.Navigator>
  );
};

const MainNavigation = () => {
  const theme = useTheme();
  return (
    <NavigationContainer theme={theme === 'light' ? DefaultTheme : DarkTheme}>
      <Drawer.Navigator initialRouteName="Resources">
        <Drawer.Screen name="Resources" component={ResourceWrapper} />
        <Drawer.Screen name="Research" component={ResearchWrapper} />
        {__DEV__ && <Drawer.Screen name="Storybooks" component={storybook} />}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  const systemTheme = useColorScheme() as ThemeVariant;

  useEffect(() => {
    startLoop(
      (delta: number) => {
        store.dispatch(tick(delta));
      },
      undefined,
      FPS * 1000,
    );
    return () => {
      stopLoop();
    };
  }, []);

  return (
    <ThemeContext.Provider value={systemTheme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainNavigation />
        </PersistGate>
      </Provider>
    </ThemeContext.Provider>
  );
}
