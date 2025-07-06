import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import globalStyles from "../GlobalStyles";
interface Props{
    title: string
}
const GreenButton = ({title} :Props) =>{
    return(
        <Pressable style={style.button}>
            <Text style={[globalStyles.IbmBold , style.text]}>{title}</Text>
        </Pressable>
    )
}
const style = StyleSheet.create({
    button:{
        width: "80%",
        height: 48,
        backgroundColor: "#24786D",
        borderRadius: 16,
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        fontSize: 16,
        color:"white"
    }
})
export default GreenButton