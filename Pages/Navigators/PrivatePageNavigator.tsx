import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from "../PrivatePages/HomePage";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleUser, faGear, faMessage , faPhoneVolume} from "@fortawesome/free-solid-svg-icons";
import { PrivateStackParamList } from "../Types/PrivatePagesStackType";
import Calls from "../PrivatePages/Calls";
import Contacts from "../PrivatePages/Contacts";
import Settings from "../PrivatePages/Settings";
const Tab = createBottomTabNavigator<PrivateStackParamList>();

const PrivatePageNavigator = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="HomePage"
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#24786D",
            tabBarInactiveTintColor: "#797C7B",
            tabBarStyle: {
              backgroundColor: "white",
              borderTopWidth: 0,
              height: 70,
            },
            tabBarLabelStyle: {
              fontSize: 12,
              marginBottom: 5,
            },
          }}
        >
          <Tab.Screen 
            name="HomePage" 
            component={HomePage} 
            options={{
              tabBarIcon: ({ color }) => (
                <FontAwesomeIcon icon={faMessage} color={color} size={20} />
              ),
              title: "Home"
            }} 
          />
            <Tab.Screen 
            name="Calls" 
            component={Calls} 
            options={{
              tabBarIcon: ({ color }) => (
                <FontAwesomeIcon icon={faPhoneVolume} color={color} size={20} />
              ),
              title: "Calls"
            }} 
          />
          <Tab.Screen 
            name="Contacts" 
            component={Contacts} 
            options={{
              tabBarIcon: ({ color }) => (
                <FontAwesomeIcon icon={faCircleUser} color={color} size={20} />
              ),
              title: "Contacts"
            }} 
          />
          <Tab.Screen 
            name="Settings" 
            component={Settings} 
            options={{
              tabBarIcon: ({ color }) => (
                <FontAwesomeIcon icon={faGear} color={color} size={20} />
              ),
              title: "Settings"
            }} 
          />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
};

export default PrivatePageNavigator;
