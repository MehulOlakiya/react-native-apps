import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';



import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';
import IconButton from './components/UI/IconButton';
import { Colors } from './constant/color';
import Map from './screens/Map';
import { useEffect, useState } from 'react';
import { init } from './util/database';
import PlaceDetails from './screens/PlaceDetails';



const Stack = createNativeStackNavigator()

export default function App() {
  const [dbInitialize,setDbInitialize] = useState(false)
  useEffect(()=>{
    init().then(async()=>{
      setDbInitialize(true)
      await SplashScreen.hideAsync();
    }).catch((error)=>{
      console.log('error',error)
    })
  },[])

  if(!dbInitialize){
    SplashScreen.preventAutoHideAsync();
  }

  return (
   <>
   <StatusBar style='dark'/>
   <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:Colors.primary500,
      },
      headerTintColor:Colors.gray700,
      contentStyle:{backgroundColor:Colors.gray700}
    }}>
      <Stack.Screen name="AllPlaces" component={AllPlaces} options={({navigation})=>({
        title:"Your Favorite Places",
        headerTitleAlign:'center',
        headerRight:({tintColor})=> <IconButton icon="add" size={24} color={tintColor} onPress={()=>navigation.navigate("AddPlace")}/>
      })}/>
      <Stack.Screen name='AddPlace' component={AddPlace} options={{
        title:"Add a new place",
        headerTitleAlign:'center'
      }}/>
      <Stack.Screen name='Map' component={Map} options={{
        headerTitleAlign:'center'
      }}/>
      <Stack.Screen name='PlaceDetails' children={PlaceDetails} options={{
        headerTitleAlign:'center'
      }}/>
    </Stack.Navigator>
   </NavigationContainer>
   </>
  );
}


