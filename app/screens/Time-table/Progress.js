import React from 'react';
import { Button, View, Dimensions, StyleSheet,Text, TouchableOpacity } from 'react-native';
import {mainRoot, ActivityTab} from '../../constants/Tabs'
import { Navigation } from 'react-native-navigation';

const wdt = Dimensions.get('window').width;
export default Plan = () => (
  <View style={styles.Maincontainer}>
    <View style={{height:55, paddingTop:10, backgroundColor:'white', elevation:8}}>
      <View style={styles.container}>   
        <TouchableOpacity style ={{ borderWidth:2, borderRadius:3, width:wdt*2/7, alignItems:'center', 
            justifyContent:'center'}} onPress={() => Navigation.setRoot(mainRoot)}>
          <Text style={{color:'black', fontSize:20, fontStyle:'italic'}}>Plan</Text>
        </TouchableOpacity>

        <TouchableOpacity style ={{ borderWidth:2, borderRadius:3, width:wdt*2/7,
            alignItems:'center', justifyContent:'center'}} onPress={() => Navigation.setRoot({root:ActivityTab})}>
          <Text style={{color:'black', fontSize:20, fontStyle:'italic'}}>Activity</Text>
        </TouchableOpacity>

        <TouchableOpacity style ={{width:wdt*2/7, backgroundColor:'black', borderRadius:3, alignItems:'center', justifyContent:'center'}}>
          <Text style={{color:'white', fontSize:20, fontStyle:'italic'}}>Progress</Text>
        </TouchableOpacity>
      </View>
    </View>    
    <View style={styles.container}>
    <View style={styles.buttonContainer2}>
        <Button title="Button 1"/>
      </View>
      <View style={styles.buttonContainer2}>
        <Button title="Button 1"/>
      </View>
      <View style={styles.buttonContainer3}>
        <Button title="Button 2"/>
      </View>
      <View style={styles.buttonContainer2}>
        <Button title="Button 3"/>
      </View>
      <View style={styles.buttonContainer2}>
        <Button title="Button 3"/>
      </View>
    </View>
  </View>
);


const styles = StyleSheet.create({
  calendar: {
    marginBottom: 10,
  },
  scene: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'lightgrey',
    fontSize: 16,
  },
  goals:{   
  color: '#FF5722',
  backgroundColor: '#CDDC39',
  width: '100%',
  height: 150,

  },
  features:{   
    color: '#FF5722',
    backgroundColor: '#CDDC39',
    width: '100%',
    height: 100,
  
  },
  schedule:{   
    color: '#FF5722',
    backgroundColor: '#CDDC39',
    width: '100%',
    height: 300,
  
    },
      
    Maincontainer: {
      justifyContent: 'space-between',
    },
    container: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      paddingHorizontal:10,
    },
  container2: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  buttonContainer:{
    color: '#FF5722',

    backgroundColor: '#CDDC39',
    width: 100,
    height: 50
 }
,
  buttonContainer2: {
    flex: 1
  },
  buttonContainer3: {
    flex: 1
  }, 
  TextComponentStyle: {
    color: '#fff',
    fontSize: 20, 
  }
});