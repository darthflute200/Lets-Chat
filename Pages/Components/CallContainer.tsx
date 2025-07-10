import React from "react";
import { Image, StyleSheet , View , Text} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPhoneVolume , faVideoCamera } from "@fortawesome/free-solid-svg-icons";
interface Props{
    name: string,
    inCommingCall: boolean | null ,
    outCommingCall: boolean | null;
    Date: string
}
const CallContainer = ({name , inCommingCall , outCommingCall , Date} : Props) =>{
    let content;

     if (inCommingCall === true) {
        content = <Image source={require("../../assets/incommingcall.png")} />;
    } else if (outCommingCall === true) {
        content = <Image source={require("../../assets/outcommingcall.png")} />;
    } else {
        content = <Image source={require("../../assets/missingcall.png")} />;
    }
    return(
        <View style={style.MainView}>
            <View style={style.FirstView}>
                <Image source={require("../../assets/user.png")}/>
                <View style={style.FirstViewInfoContainer}>
                    <Text style={style.NameText}>{name}</Text>
                    <View style={style.DateView} >
                        {content}
                        <Text>{Date}</Text>
                    </View>
                </View>
            </View>
            <View style={style.SecondView}>
                <FontAwesomeIcon icon={faPhoneVolume} color="#989E9C"/>
                <FontAwesomeIcon icon={faVideoCamera} color="#989E9C"/>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    MainView: {
        width: "80%",
        justifyContent:"space-between",
        alignItems:"center",
        height: 52,
        flexDirection:"row"
    },
    FirstView:{
        flexDirection:"row",
        alignItems:"center",
        gap: 20,
        height: "100%"
    },
    FirstViewInfoContainer:{
        gap: 10
    },
    NameText:{
        color:"#000E08",
        fontSize: 18
    },
    DateView:{
        flexDirection:"row",
        alignItems:"center",
        gap: 10
    },
    SecondView:{
        height: "100%",
        flexDirection:"row",
        alignItems:"center",
        gap: 20
    }
})
export default CallContainer