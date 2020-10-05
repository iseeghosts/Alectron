import React, { useState, Fragment } from 'react';
import { Text, View, StyleSheet ,ScrollView, LayoutAnimation, Image, Platform, UIManager, TouchableOpacity, Button, Dimensions } from 'react-native';
import {ActivityTab, ProgressTab} from '../../constants/Tabs'
import {Calendar} from 'react-native-calendars';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Navigation } from 'react-native-navigation';
console.log("1");
import Calender from '../../assets/images/calender.png'
import AddGoal from '../../assets/images/AddGoal.png'

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const initialLayout = { width: Dimensions.get('window').width };
// const [heighta, setHeighta] = useState('')

export default Plan = () => {
  const [expanded, setExpanded] = useState(false);
  const [expanded2, setExpanded2] = useState(true);
  const [expanded3, setExpanded3] = useState(false);
  const [selected, setSelected] = useState('');
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Select Date' },
    { key: 'second', title: 'Second' },
  ]);
  const renderT = (from,to) => {

    // Ensure arr is defined in scope of, or is "visible" to, renderT()
    const arr = ['Hello', 'Awesome', 'Stack','Over','Flow', 'Have', 'A', 'Nice', 'Day'];
    const arrTo = arr.slice(from,to);
    return arrTo.map((obj, index) => {
      // Compose a unique key for the text element. A unique key is need when 
      // rendering lists of components
      const key = index;

      // Add return to ensure the text element is returned from map callback
      return <Text style={{ fontSize:20, paddingBottom:2}} key={key}>{from+key+1}. {obj}</Text>;
    });
  }
  const SecondRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
  );

  changeLayout = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded)
    setExpanded2(!expanded2)
    console.log("exp");
  } 

  const ScheduleTab = () =>{
    const renderScene = SceneMap({
      first: renderCalendarWithSelectableDate,
      second: SecondRoute,
    });
  
    return (
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    );  
  }

  const renderCalendarWithSelectableDate = () => {
    return (
      <Fragment > 
        <Text style={styles.text}>Calendar with selectable date</Text>
        <Calendar
          current={'2020-09-23'}
          style={styles.calendar}
          onDayPress={(day) => {
            console.log("sel");
            setSelected(day.dateString);
          }}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedColor: 'orange',
              selectedTextColor: 'red',
            },
          }}
        />
      </Fragment>
    );
  };

  onExpandPress = () =>{
    setExpanded3(!expanded3)
  }
  console.log("1");
  const wdt = Dimensions.get('window').width;

  return(
  <View style={styles.Maincontainer}>
    <View style={{height:55, paddingTop:10, backgroundColor:'white', elevation:8}}>
      <View style={styles.container}>
        <TouchableOpacity style ={{width:wdt*2/7, backgroundColor:'darkgreen', borderRadius:3, alignItems:'center', justifyContent:'center'}}>
          <Text style={{color:'white', fontSize:20,fontStyle:'italic'}}>Plan</Text>
        </TouchableOpacity>

        <TouchableOpacity style ={{ borderWidth:2, borderRadius:3, width:wdt*2/7,
            alignItems:'center', justifyContent:'center'}} onPress={() => Navigation.setRoot({root:ActivityTab})}>
          <Text style={{color:'black', fontSize:20,fontStyle:'italic'}}>Activity</Text>
        </TouchableOpacity>

        <TouchableOpacity style ={{ borderWidth:2, borderRadius:3, width:wdt*2/7,
            alignItems:'center', justifyContent:'center'}} onPress={() => Navigation.setRoot({root:ProgressTab})}>
          <Text style={{color:'black', fontSize:20,fontStyle:'italic'}}>Progress</Text>
        </TouchableOpacity>
      </View>
    </View>

    <View style={{padding:10, marginVertical:10}}>
        <View style ={{flexDirection:'row'}}>
          <TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout} style={{height:40,width:40, alignItems:'center', justifyContent:'center'}}>
            <Image source={Calender} style={{height:62,width:62}} />
          </TouchableOpacity>
        {expanded && 
        <View style={{width:wdt, height:wdt}}>
          { ScheduleTab()}
        </View>}
        {expanded2 &&(
        <View style={{flexDirection:'row', marginHorizontal:1, flex:1}}>
          <TouchableOpacity style={[styles.button, {width:wdt*3/9, marginRight:10, elevation:8},]}>        
            <Text style={{paddingHorizontal:5, color:'#202055', fontSize:18, fontWeight:'bold' }}>Today | 29/09</Text>
          </TouchableOpacity>
         <View style={styles.container2}>
          <TouchableOpacity style={styles.button}>        
            <Text style={{paddingHorizontal:5, fontSize:16,}}>24/08</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>        
            <Text style={{paddingHorizontal:5, fontSize:16,}}>26/08</Text>
          </TouchableOpacity>
        </View>
        </View>)}
      </View>
    </View>
  <ScrollView style={{flex:1}}>
    <View style={{elevation:8,marginHorizontal:3,borderRadius:3}}>
      {/* animated hide view while expanded calendar and scroll schedule*/}
      <View style={{flexDirection:'row',borderRadius:3, elevation:8, backgroundColor:'#D2691E', justifyContent:'center'}}>
        
        <Text style={{textAlign:'center',paddingHorizontal:5,color:'#fff', fontFamily:'sans-serif-light', fontStyle:'italic', fontSize:30}}>Goals  </Text>
        
        <TouchableOpacity style={{marginLeft:1, alignItems:'center', justifyContent:'center'}}>
          <Image source={AddGoal} style={{height:45,width:45}} />
        </TouchableOpacity>
      </View>
      <View style={{padding:10,marginHorizontal:1, borderBottomLeftRadius:5, borderBottomRightRadius:5, backgroundColor:'#FFC627', elevation:3,}}>
        <View style={{flex:1,}}>{renderT(0,5)}</View>
        {expanded3 && 
        <View>
          <View style={{flex:1,}}>{renderT(5,10)}</View>
          <Button color='#7B3F00' title = "-" onPress={this.onExpandPress}></Button>
        </View>}
        {(!expanded3) &&
        <View>
          <Button color='#7B3F00' title = "+" onPress={this.onExpandPress}></Button>
        </View>}
      </View>
    </View>
    <View style={{marginVertical:10,marginHorizontal:3, elevation:8,borderRadius:3, }}>
      <View style={{elevation:8, borderRadius:3, backgroundColor:'#D2691E', justifyContent:'center'}}>
        <Text style={{textAlign:'center',paddingHorizontal:5,color:'white', fontStyle:'italic', fontFamily:'sans-serif-light', fontSize:30}}>Schedule</Text>
      </View>
      <View style={{marginHorizontal:1,padding:10, backgroundColor:'#F5F5DC', alignItems:'center',elevation:3, borderBottomLeftRadius:5, borderBottomRightRadius:5}}>
        <View>{renderT(0,10)}</View>
      </View>  
    </View>
  </ScrollView>
</View>
  
)};

const styles = StyleSheet.create({    
  Maincontainer: {
    justifyContent: 'space-between',
    flex:1
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal:10,
  },
  container2: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
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
  button:{
    backgroundColor:'#26ACE9', 
    borderRadius:2, 
    justifyContent:'center', 
    alignItems:'center', 
    width:Dimensions.get('screen').width*1/5,
    elevation:8
  }
});