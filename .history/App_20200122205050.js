import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { createStore, applyMiddleware } from 'redux'
import { Provider, } from 'react-redux'
import thunk from 'redux-thunk'

import rootReducer from './src/store/reducers/index'
import Navigation from './src/navigation/index'
import { Root } from 'native-base';

import './src/config/firebaseConfig'

const store = createStore(rootReducer, applyMiddleware(thunk))

export default function App() {

  useEffect(() => {
    loadFont()
  }, [])

  async function loadFont() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
  }

  return (
    <Provider store={store}>
      <Root>
        <Navigation />
      </Root>
    </Provider>
  );
}

