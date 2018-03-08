// __STRESS_TEST__ = false;
// import App from './app/index';
// import React from 'react';
// import { View, Text } from 'react-native';
import { StackNavigator, SwitchNavigator } from 'react-navigation';

import {
  C_categories,
  C_favourites,
  C_nearPlaces,
  C_offers,
  C_profile,
  C_whatsNew,
  Login,
  SignUp,
  AuthLoadingScreen
} from './app/screens/screensBase';

const clientStack = StackNavigator(
  {
    C_favourites: {
      screen: C_favourites,
    },

    C_nearPlaces: {
      screen: C_nearPlaces,
    },
    C_offers: {
      screen: C_offers,
    },
    C_profile: {
      screen: C_profile,
    },
    C_whatsNew: {
      screen: C_whatsNew,
    },
    C_categories: {
      screen: C_categories,
    }
  }
  , {
    initialRouteName: 'login',
  }
  ,
);
const AuthStack = StackNavigator(
  {
    login: Login,
    signup: SignUp
  }
);

export default SwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: clientStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  }
);
