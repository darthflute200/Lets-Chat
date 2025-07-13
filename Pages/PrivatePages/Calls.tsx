import { useEffect, useState } from "react";
import React  from "react";
import { ScrollView ,StyleSheet,View , Pressable ,Text, Image, SafeAreaView } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import globalStyles from "../GlobalStyles";
import { StatusBar } from "react-native";
import CallContainer from "../Components/CallContainer";
import SearchComponent from "../Components/SearchComponent";
import PageTitle from "../Components/PageTitle";
const Calls = () =>{
    const [search , setSearch] = useState<Boolean>(false);
    return(
        <SafeAreaView style={style.MainView}>
            <StatusBar
                    barStyle="default"   translucent backgroundColor="transparent"
            />
            {search === false ? <PageTitle color="black" title="Calls" onPress={() =>{setSearch(true)}} image={(require("../../assets/call-user.png"))}/> 
            : 
            <SearchComponent onChange={() =>{setSearch(false)}}/>
            }
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={style.ScrollContainer}>
                <CallContainer name="Ege Özdalyan" inCommingCall={null} outCommingCall={true} Date="Yesterday 13.39"/>
                <CallContainer name="Ege Özdalyan" inCommingCall={null} outCommingCall={true} Date="Yesterday 13.39"/>
                <CallContainer name="Ege Özdalyan" inCommingCall={null} outCommingCall={true} Date="Yesterday 13.39"/>
                <CallContainer name="Ege Özdalyan" inCommingCall={null} outCommingCall={true} Date="Yesterday 13.39"/>
                <CallContainer name="Ege Özdalyan" inCommingCall={null} outCommingCall={true} Date="Yesterday 13.39"/>
            </ScrollView>
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    MainView:{
        width: "100%",
        height: "100%",
        alignItems:"center"
    },
    ScrollContainer:{
        width: "100%",
        minHeight:"100%",
        alignItems:"center",
        gap: 20,
        marginTop: 20
    }
})
export default Calls