import React from "react";
import { View , Text, StyleSheet } from "react-native";
import globalStyles from "../GlobalStyles";
import { Line } from "react-native-svg";
interface Props {
    color: string;
    LineColor: string;
  }
const OrComponent = ({ color , LineColor }: Props) =>{
    return(
        <View style={style.orContainer}>
        <View style={[style.Line ,{backgroundColor: LineColor}]}></View>
        <Text style={[ {color: color , fontSize:14}, globalStyles.IbmRegular]}>Or</Text>
        <View style={[style.Line , {backgroundColor: LineColor}]}></View>
      </View>
    )
}
const style = StyleSheet.create({
    Line:{
        height: 1,
        width: "35%",
        backgroundColor:"white"
    },
    orContainer:{
        width: "100%",
        height: 30,
        flexDirection: "row",
        justifyContent:"center",
        alignItems:"center",
        gap: 20,
        marginTop: 20
    }
})
export default OrComponent