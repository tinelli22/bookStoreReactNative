import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Home from './src/navigation/public/Home'

import './src/config/firebaseConfig'

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
    <Home />
  );
}

