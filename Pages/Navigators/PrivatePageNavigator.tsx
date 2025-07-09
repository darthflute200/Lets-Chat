import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PrivateStackParamList } from "../Types/PrivatePagesStackType";
import HomePage from "../PrivatePages/HomePage";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const Stack = createNativeStackNavigator<PrivateStackParamList>();
const PrivatePageNavigator = () =>{
  return(
    <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen options={{headerShown: false}} name="HomePage" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  )
}
export default PrivatePageNavigator;