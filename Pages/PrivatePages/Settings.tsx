import React from "react";
import { Pressable, SafeAreaView, StyleSheet, Text , View  , Image, ScrollView} from "react-native";
import globalStyles from "../GlobalStyles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell, faMessage, faQrcode, faQuestion } from "@fortawesome/free-solid-svg-icons";
import SettingsComponent from "../Components/SettingsComponent";
import { faKey } from "@fortawesome/free-solid-svg-icons";
const Settings = () =>{
    return(
        <SafeAreaView style={style.safeArea}>
          <ScrollView contentContainerStyle={style.ScrollViewStyle}>
            <Text style={[globalStyles.IbmBold , {fontSize: 20}]}>Settings</Text>
            <View style={style.PersonMainView}>
                <View style={style.PersonFirstView}>
                    <Image source={require("../../assets/user.png")}/>
                    <View style={style.PersonInfoView}>
                        <Text style={[globalStyles.IbmBold , {fontSize:20}]}>Ege Özdalyan</Text>
                        <Text style={[globalStyles.IbmRegular , {fontSize:12 , color:"#797C7B"}]}>@egeozdalyan</Text>
                    </View>
                </View>
                <Pressable>
                    <FontAwesomeIcon size={25} icon={faQrcode} color="#24786D"/>
                </Pressable>
            </View>
            <View style={style.SettingsContainer}>
            <SettingsComponent mainText="Account" detail="Privacy, security, change number" icon={faKey}/>
            <SettingsComponent mainText="Chat" detail="Chat history,theme,wallpapers" icon={faMessage}/>
            <SettingsComponent mainText="Notifications" detail="Messages, group and others" icon={faBell}/>
            <SettingsComponent mainText="Help" detail="Help center,contact us, privacy policy" icon={faQuestion}/>
            </View>
          </ScrollView>
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    safeArea:{
        width: "100%",
        height: "100%",
        backgroundColor:"#FFFFFF"
    },
    ScrollViewStyle:{
        width: "100%",
        minHeight: "100%",
        alignItems:"center",
        gap: 20,
        paddingBottom: 30,
        backgroundColor:"#FFFFFF"
       },
    PersonMainView:{
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"space-between",
        width: "80%",
        height: 60,
        marginTop: 10
    },
    PersonFirstView:{
        flexDirection:"row",
        gap: 20,
        height: "100%",
        alignItems:"center"
    },
    PersonInfoView:{
        height: "100%",
        justifyContent:"center",
        gap: 5
    },
    SettingsContainer:{
        width: "100%",
        alignItems:"center",
        gap: 30,
        marginTop: 20
    }
})
export default Settings