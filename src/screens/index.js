import {
    createAppContainer,
    createStackNavigator,
    createSwitchNavigator,
    createBottomTabNavigator,
  } from 'react-navigation';
import React, { Component } from 'react';

const AuthNavigator = createStackNavigator(
  {
    Login: {
      getScreen: () => require('./LoginScreen').default,
    },
  },
  {
    navigationOptions: {
      header: null,
    },
  },
);

const TabNavigator = createBottomTabNavigator({
  Home: {
    getScreen: () => require('./HomeScreen').default,
  },
});

const MainNavigator = createStackNavigator({
  Tab: TabNavigator,
});

const AppNavigator = createSwitchNavigator(
  {
    Splash: {
      getScreen: () => require('./SplashScreen').default,
    },
    Auth: AuthNavigator,
    Main: MainNavigator,
  },
  {
    initialRouteName: 'Splash',
  },
);

const AppContainer = createAppContainer(AppNavigator);

class Navigation extends Component {
  state = {};
  render() {
    return <AppContainer />;
  }
}

export default Navigation;