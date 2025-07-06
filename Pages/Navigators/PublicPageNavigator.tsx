import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EntryPage from "../PublicPages/EntryPage";
import LogInPage from "../PublicPages/LogInPage";
import { PublicStackParamList } from "../Types/PublicPagesStackType";
import SignUpPage from "../PublicPages/SignUpPage";
const Stack = createNativeStackNavigator<PublicStackParamList>();
const PublicPageNavigator = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Entry">
        <Stack.Screen options={{headerShown: false}} name="Entry" component={EntryPage} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={LogInPage} />
        <Stack.Screen name="Signup" options={{headerShown: false}} component={SignUpPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default PublicPageNavigator;