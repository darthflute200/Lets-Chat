import React from "react";
import { View , Pressable , Text , Image, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import globalStyles from "../GlobalStyles";
interface Props {
    title: string;
    color: string
    onPress: any;
    image: any
}
const PageTitle = ({title , color, image, onPress} : Props) =>{
    return(
        <View style={style.HomePageSearchContainer}>
        <Pressable onPress={onPress} style={[style.SearchButton , {borderColor: color}]}>
         <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: color}}/>
       </Pressable>
       <Text style={[globalStyles.IbmBold , style.CallText , {color: color}]}>{title}</Text>
       <Pressable style={style.SearchButton}>
         <Image source={image}/>
       </Pressable>
       </View> 
    )
}
const style = StyleSheet.create({
    HomePageSearchContainer:{
        width: "80%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    SearchButton:{
        width: 50,
        height: 50,
        borderRadius: "50%",
        borderWidth: 1,
        alignItems:"center",
        justifyContent:"center"
    },
    CallText:{
        fontSize: 20
    }
})
export default PageTitle