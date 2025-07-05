import React from "react";
import AppleIcon from "../../assets/apple.svg";
import GoogleIcon from "../../assets/google.svg";
import FacebookIcon from "../../assets/facebook.svg";
import { View } from "react-native";
const SocialBrandsContainer = () =>{
    return(
        <View style={{ flexDirection: 'row' }}>
            <AppleIcon width={24} height={24} fill="#ffff"/>
            <GoogleIcon width={24} height={24} fill="#4285F4"/> 
            <FacebookIcon width={24} height={24} fill="#1877F2"/>       
        </View>
    )
}
export default SocialBrandsContainer;