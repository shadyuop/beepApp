import React from 'react';
import { Button } from 'react-native';
// import {
//     StackNavigator,
//   } from 'react-navigation';

  export default class C_nearPlaces extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <Button
          title="Go to Jane's profile"
          onPress={() =>
            navigate('Profile', { name: 'Jane' })
          }
        />
      );
    }
  }
