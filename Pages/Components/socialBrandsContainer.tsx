import React from "react";
import { Pressable, StyleSheet, View  } from "react-native";
import GoogleIcon from "../../assets/google.svg";
import FacebookIcon from "../../assets/facebook.svg";
import AppleIcon from "../../assets/apple.svg";

interface Props {
    color: string;
  }
const SocialBrandsContainer = ({ color }: Props) =>{
    return(
        <View style={style.BrandContainer}>
            <Pressable style={[style.Button , {borderColor: color}]}>
                <GoogleIcon/> 
            </Pressable>
            <Pressable style={[style.Button , {borderColor: color}]}>
                <FacebookIcon/>
            </Pressable> 
            <Pressable style={[style.Button , {borderColor: color}]}>
                <AppleIcon width={42} height={42} fill="#ffff"/>
            </Pressable>     
        </View>
    )
}
const style = StyleSheet.create({
    Button:{
        width: 60,
        height: 60,
        borderRadius: 50,
        borderWidth: 1,
        alignItems:"center",
        justifyContent:"center",
    },
    BrandContainer:{
        width: "100%",
        justifyContent:"center",
        alignItems:"center",
        gap: 20,
        flexDirection:"row",
        marginTop: 30
    }
})
export default SocialBrandsContainer;