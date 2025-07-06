import React from "react";
import { View , Text, StyleSheet } from "react-native";
import globalStyles from "../GlobalStyles";
interface Props{
    title : string
}
const UnderLineTitle = ({title} : Props) =>{
    return(
        <View style={style.MainView}>
            <Text style={[style.Title , globalStyles.IbmBold]}>{title}</Text>
            <View style={style.UnderLine}></View>
        </View>
    )
}
const style = StyleSheet.create({
    MainView:{
        flexDirection:"column",
        justifyContent:"flex-start"
    },
    Title:{
       color:"#000E08",
       fontSize: 16,
       position:"relative",
       zIndex:2
    },
    UnderLine:{
        width: "100%",
        height: 8,
        position: "absolute",
        marginTop: 13,
        backgroundColor:"#58C3B6"
        
    }
})
export default UnderLineTitle