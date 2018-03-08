// __STRESS_TEST__ = false;
// import App from './app/index';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './app/reducers';
import RootRoute from './Router';

export default class App extends Component {
   // componentWillMount() {
   //
   // }


   render() {
      // Redux store creator with adding Redux-thunk library
      const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

      return (
        // provider tag to use redux library
         <Provider store={store}>
             {/*File for navigation*/}
            <RootRoute />
         </Provider>
    );
  }
}
