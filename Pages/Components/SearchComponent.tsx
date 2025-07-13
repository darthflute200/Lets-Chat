import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { TextInput } from "react-native-gesture-handler";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
interface Props {
    onChange: any
}
const SearchComponent = ({onChange} : Props) =>{
    return(
        <View style={style.mainView}>
            <View style={style.buttonView}>
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </View>
            <TextInput style={style.inputWidth}/>
            <Pressable style={style.buttonView} onPress={onChange}>
                <FontAwesomeIcon icon={faXmark}/>
            </Pressable>
        </View>
    )
}
const style = StyleSheet.create({
    mainView:{
        height: 44,
        borderRadius: 12,
        backgroundColor: "#D3D3D3",
        width: "80%",
        flexDirection:"row"
    },
    buttonView:{
        height: "100%",
        width: 50,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#D3D3D3",
        borderRadius: 12
    },
    inputWidth:{
        width: "70%",
        height: "100%"
    },
})
export default SearchComponent