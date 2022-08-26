import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, Text, TextInput, View,StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from './src/screen/Screen1'
import Screen2 from './src/screen/Screen2'
import Screen3 from './src/screen/Screen3'
import Screen4 from './src/screen/Screen4'
import Screen5 from './src/screen/Screen5'
import Screen6 from './src/screen/Screen6'
import Screen7 from './src/screen/Screen7'
import Screen8 from './src/screen/Screen8'





const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
export const Context1 = React.createContext(null);



function App(props) {
  return (
  <NavigationContainer>
  <Tab.Navigator screenOptions={{
    headerShown: false
  }}>
  <Tab.Screen name="Data " component={Data}/>
  </Tab.Navigator>
  </NavigationContainer>
  );
  }
  export default App;


  function Data() {
    const context1InitialState = {
    firstName: null,
middleName: null,
lastName: null
    };
    const [personInfo, setPersonInfo] = useState(context1InitialState);
    function setFirstName(firstName
) {
    const newState = { ...personInfo, firstName
 };
    setPersonInfo(newState);
    }
    function setMiddleName(middleName) {
    const newState = { ...personInfo, middleName };
    setPersonInfo(newState);
    }
    function setLastName(lastName) {
    const newState = { ...personInfo, lastName };
    setPersonInfo(newState);
    }
    const context1Setters = {
    setFirstName,
    setMiddleName,
    setLastName
    
    }
    return (
    <Context1.Provider value={{ ...personInfo, ...context1Setters }}>
    <Stack.Navigator>
    <Stack.Screen name="Screen 1" component={Screen1} />
    <Stack.Screen name="Screen 2" component={Screen2} />
    <Stack.Screen name="Screen 3" component={Screen3} />
    <Stack.Screen name="Screen 4" component={Screen4} />
    </Stack.Navigator>
    </Context1.Provider>
    )
    }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',

  },
})