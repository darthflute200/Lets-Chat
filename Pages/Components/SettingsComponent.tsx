import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import globalStyles from "../GlobalStyles";
interface Props{
    icon: IconProp,
    mainText: string,
    detail: string
}
const SettingsComponent = ({icon , mainText , detail} : Props) =>{
    return(
        <View style={style.mainView}>
            <View style={style.IconMain}>
                <FontAwesomeIcon icon={icon} color="#797C7B"/>
            </View>
            <View style={style.TextView}>
                <Text style={[globalStyles.IbmBold , {fontSize: 16}]}>{mainText}</Text>
                <Text style={[globalStyles.IbmRegular , {fontSize: 12 , color:"#797C7B"}]}>{detail}</Text>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    mainView:{
        width: "80%",
        flexDirection:"row",
        height: 44,
        gap: 20
    },
    IconMain:{
        height: 44,
        width: 44,
        borderRadius: 22,
        backgroundColor:"#F2F8F7",
        alignItems:"center",
        justifyContent:"center"
    },
    TextView:{
        height: "100%",
        justifyContent:"center",
        gap: 5
    }
})
export default SettingsComponent