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
import {Provider, useSelector} from 'react-redux';
import configureStore, {ReduxState} from './redux/store';

import Resources from './containers/Resources';
import ResourceDetail from './containers/ResourceDetail';
import Research from './containers/Research';
import {ResourceType, ThemeVariant} from './types';
import {useTheme} from './hooks';
import {useColorScheme} from 'react-native';

import * as Sentry from '@sentry/react-native';
import {stopLoop, startLoop} from './utils/TickLoop';
import {applyTick} from './redux/resourceSlice';
import {PersistGate} from 'redux-persist/integration/react';
import Space from './containers/Space';

// Slow down FPS in develop to minimize impact on development only tools
const FPS = __DEV__ ? 1 / 2 : 1 / 10;

export const {store, persistor} = configureStore();

const startedSentry = false;
const startSentry = () => {
  if (!__DEV__ && !startedSentry) {
    Sentry.init({
      dsn:
        'https://4878489069e8449ca2f6c0ee6e444f25@o400529.ingest.sentry.io/5259048',
    });
  }
};

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
export type SpaceProps = {
  Space: undefined;
  ResourceDetail: {
    resource: ResourceType;
  };
};

const ResearchStack = createStackNavigator<ResearchProps>();
const ResourceStack = createStackNavigator<ResourceProps>();
const SpaceStack = createStackNavigator<SpaceProps>();

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

const SpaceWrapper = () => {
  return (
    <SpaceStack.Navigator>
      <SpaceStack.Screen name="Space" component={Space} />
      <SpaceStack.Screen name="ResourceDetail" component={ResourceDetail} />
    </SpaceStack.Navigator>
  );
};

const MainNavigation = () => {
  const theme = useTheme();
  const showSpace = useSelector(
    (state: ReduxState) => state.machine.rocketFuelT1.unlocked,
  );

  return (
    <NavigationContainer theme={theme === 'light' ? DefaultTheme : DarkTheme}>
      <Drawer.Navigator initialRouteName="Resources">
        <Drawer.Screen name="Resources" component={ResourceWrapper} />
        <Drawer.Screen name="Research" component={ResearchWrapper} />
        {showSpace && <Drawer.Screen name="Space" component={SpaceWrapper} />}
        {__DEV__ && <Drawer.Screen name="Storybooks" component={storybook} />}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  const systemTheme = useColorScheme() as ThemeVariant;

  useEffect(() => {
    startSentry();
  });

  useEffect(() => {
    startLoop(
      (delta: number) => {
        applyTick(delta)(store.dispatch, store.getState, undefined);
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
