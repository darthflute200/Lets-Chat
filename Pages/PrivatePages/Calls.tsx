import { useEffect, useState } from "react";
import React  from "react";
import { ScrollView ,StyleSheet,View , Pressable ,Text, Image, SafeAreaView } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import globalStyles from "../GlobalStyles";
import { StatusBar } from "react-native";
import CallContainer from "../Components/CallContainer";
const Calls = () =>{
    const [search , setSearch] = useState<Boolean>(false);
    return(
        <SafeAreaView style={style.MainView}>
            <StatusBar
                    barStyle="default"   translucent backgroundColor="transparent"
            />
            {search === false && 
              <View style={style.HomePageSearchContainer}>
               <Pressable style={style.SearchButton}>
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "black"}}/>
              </Pressable>
              <Text style={[globalStyles.IbmBold , style.CallText]}>Calls</Text>
              <Pressable style={style.SearchButton}>
                <Image source={require("../../assets/call-user.png")}/>
              </Pressable>
              </View>
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
    HomePageSearchContainer:{
        width: "80%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom: 20
    },
    CallText:{
        color:"black",
        fontSize: 20
    },
    SearchButton:{
        width: 50,
        height: 50,
        borderRadius: "50%",
        borderWidth: 1,
        borderColor: "black",
        alignItems:"center",
        justifyContent:"center"
    },
    ScrollContainer:{
        width: "100%",
        minHeight:"100%",
        alignItems:"center",
        gap: 20
    }
})
export default Calls