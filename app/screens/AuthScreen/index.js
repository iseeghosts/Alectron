import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
// import style from './styles.js'; 

export default Auth = () => {
    return (
      <View style={styles.root}>
        <Button
        title='Sign In'
        color='#710ce3'
        onPress={() => Navigation.push(props.componentId, {
          component: {
            name: 'SignInScreen'
          }
        })} />
        <Button
        title='Sign Up'
        color='#710ce3'
        onPress={() => Navigation.push(props.componentId, {
          component: {
            name: 'SignUpScreen'
          }
        })} />
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