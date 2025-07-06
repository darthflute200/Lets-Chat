import React from "react";
import { StyleSheet, View,Text , TextInput } from "react-native";
import globalStyles from "../GlobalStyles";
interface Props{
    label : string
}
const InputFormContainer = ({label} : Props) =>{
    return(
        <View style={style.mainView}>
            <Text style={[style.label , globalStyles.IbmRegular]}>{label}</Text>
            <TextInput  style={style.textInput}/>
        </View>
    )
}
const style = StyleSheet.create({
    mainView:{
        width: "80%",
        flexDirection: "column",
        alignItems: "flex-start"
    },
    label:{
        color:"#24786D",
        fontSize: 14
    },
    textInput:{
        borderBottomWidth: 1,
        borderBottomColor: "#CDD1D0",
        width: "100%",
        height: 40,
    }
})
export default InputFormContainer