import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DonkeyKong from "react-native-donkey-kong";

export default function App() {
  return (
    <DonkeyKong />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
