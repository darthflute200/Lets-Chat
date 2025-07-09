import React from "react";
import { Image ,Pressable,StyleSheet,View } from "react-native";

interface Props{
    PhotoUri: any,
    BorderColor: string
}
const StoryComponent = ({PhotoUri , BorderColor} : Props) =>{
    return(
        <Pressable style={[style.StoryView , {borderColor: BorderColor}]}>
            <Image style={style.Image} source={PhotoUri}/>
        </Pressable>
    )
}
const style = StyleSheet.create({
    StoryView:{
        width: 55,
        height:55,
        borderRadius: 27.5,
        borderWidth: 1
    },
    Image:{
        width: 50,
        height:50,
        borderRadius: 25      
    }
})
export default StoryComponent