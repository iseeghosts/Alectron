import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import style from './styles.js'; 

export default Media = () => {
    return (
      <View style={styles.root}>
        <Text>Media Screen</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke'
  }
});