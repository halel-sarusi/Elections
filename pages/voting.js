import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Button, Alert, FlatList, Dimensions} from 'react-native';
import Header from "../components/header";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const {width,height} = Dimensions.get("window")

function alert(){
  Alert.alert('Your vote has been recorded in the system')
}

function update(index){
  let name;
  switch (index) {
    case '0': 
      name="shas";
      break;
      case '1': 
      name="israel-beitenu";
      break;    
      case '2': 
      name="meshutefet";
      break;   
      case '3': 
      name="zionut-datit";
      break;    
      case '4': 
      name="likud";
      break;    
      case '5': 
      name="kahol-lavan";
      break;    
      case '6': 
      name="gesher";
      break;    
      case '7': 
      name="tikva-hadasha";
      break;    
      case '8': 
      name="raam";
      break;    
      case '9': 
      name="avoda";
      break;    
      case '10': 
      name="yamina";
      break;    
      case '11': 
      name="merez";
      break;    
      case '12': 
      name="tikva-hadasha";
      break;
      case '13': 
      name="yesh-atid";
      break;
      case '14': 
      name="kalkalit";
      break;
    default:
      break;
  }
  fetch(`https://isr-elections.herokuapp.com/api/parties/vote/${name}`, {method: 'POST'})
  alert()
}

export default function AssetExample() {

  const data = [<Image key={0} resizeMode={'contain'} style={styles.image} source={require('../public/aryeh-deri.png')} />,
  <Image key={1} resizeMode={'contain'} style={styles.image} source={require('../public/avigdor-lieberman.png')} />,
  <Image key={2} resizeMode={'contain'} style={styles.image} source={require('../public/ayman-odeh.png')} />,
  <Image key={3} resizeMode={'contain'} style={styles.image} source={require('../public/bezalel.png')} />,
  <Image key={4} resizeMode={'contain'} style={styles.image} source={require('../public/bibi.png')} />,
  <Image  key={5} resizeMode={'contain'} style={styles.image} source={require('../public/bnei-gantz.png')} />,
  <Image  key={6} resizeMode={'contain'} style={styles.image} source={require('../public/gesher.png')} />,
  <Image key={7} resizeMode={'contain'} style={styles.image} source={require('../public/gideon-saar.png')} />,
  <Image key={8} resizeMode={'contain'} style={styles.image} source={require('../public/mansour.png')} />,
  <Image key={9} resizeMode={'contain'} style={styles.image} source={require('../public/merav-michaeli.png')} />,
  <Image key={10} resizeMode={'contain'} style={styles.image} source={require('../public/naftali-bennett.png')} />,
  <Image key={11} resizeMode={'contain'} style={styles.image} source={require('../public/nitzan-horowitz.png')} />,
  <Image key={12} resizeMode={'contain'} style={styles.image} source={require('../public/yaakov-litzman.png')} />,
  <Image key={13} resizeMode={'contain'} style={styles.image} source={require('../public/yair-lapid.png')} />,
 <Image key={14} resizeMode={'contain'} style={styles.image} source={require('../public/yaron-zelicha.png')} />]
  return (
    <View style={styles.body}>
      <Header/>
      <Text style={styles.paragraph}>Click on the party you want to vote for:</Text>
<View style={styles.list}>
<FlatList 
      keyExtractor={item => item.key}
      renderItem={({ item }) => (
        console.log(item.key),
        <TouchableOpacity onPress={()=>update(item.key)}>{item}</TouchableOpacity>
      )}
      numColumns={2}
      data={data}
      />
</View>
      <Button title="Beyond the survey"/>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',
  },
  paragraph: {
    marginTop: 0,
    fontSize: 15,
    textAlign: 'center',
  },
  list: {
    margin: 10,
    height: 600,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    margin: 10, 
    height: height*0.2,
    width: width*0.4,
  }
});