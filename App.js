import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context'
import Point from './components/Point'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Point/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
