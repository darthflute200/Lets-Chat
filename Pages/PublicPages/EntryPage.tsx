import React from "react";
import { View, Image ,StyleSheet, Text, ScrollView } from "react-native";
import globalStyles from "../GlobalStyles";
import SocialBrandsContainer from "../Components/socialBrandsContainer";

const EntryPage = () =>{
    return(
        <ScrollView contentContainerStyle={style.MainView}>
          <Image style={style.BackgroundStyle} source={require('../../assets/Ellipse.png')}/>
          <Image style={style.Logo} source={require('../../assets/EntryLogo.png')}/>
          <Text style={[style.mainTextStyle , globalStyles.font]}>Connect friends easily & quickly</Text>
          <Text style={[globalStyles.IbmRegular , style.subtitle]}>Our chat app is the perfect way to stay connected with friends and family.</Text>
          <SocialBrandsContainer/>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    MainView:{
        width: "100%",
        height: "100%",
        backgroundColor: "#1A1A1A",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 70,
    },
    BackgroundStyle:{
        width: "100%",
        position: "absolute",
        zIndex: 0,
        top: 10
    },
    Logo:{
       width:100,
       height: 25,
       resizeMode: "contain",
       position: "relative",
       zIndex: 2
    },
    mainTextStyle:{
      color: "white",
      fontSize: 68,
      marginTop: 40,
      textAlign: "left",
      marginLeft: 10,
    },
    subtitle:{
        color:"#B9C1BE",
        textAlign:"left",
        fontSize: 19,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10
    }
})

export default EntryPage;

