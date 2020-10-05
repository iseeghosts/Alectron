import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import bottomTab from '../../constants/Tabs'
// import style from './styles.js'; 

const mainRoot = {
  root: bottomTab
};

export default SignIn = () => {
  return (
    <View style={styles.root}>
      <Button
        title='Sign In'
        color='#710ce3'
        onPress={() => Navigation.setRoot(mainRoot)} />
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