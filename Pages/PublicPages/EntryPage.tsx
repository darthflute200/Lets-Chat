import React from "react";
import { View, Image ,StyleSheet, Text, ScrollView, Pressable } from "react-native";
import globalStyles from "../GlobalStyles";
import SocialBrandsContainer from "../Components/socialBrandsContainer";
import OrComponent from "../Components/OrComponont";
import { PublicStackParamList } from "../Types/PublicPagesStackType";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<PublicStackParamList, 'Entry'>;
const EntryPage = ({ navigation }: Props) =>{
    return(
        <ScrollView contentContainerStyle={style.MainView}>
          <Image style={style.BackgroundStyle} source={require('../../assets/Ellipse.png')}/>
          <Image style={style.Logo} source={require('../../assets/EntryLogo.png')}/>
          <Text style={[style.mainTextStyle , globalStyles.font]}>Connect friends easily & quickly</Text>
          <Text style={[globalStyles.IbmRegular , style.subtitle]}>Our chat app is the perfect way to stay connected with friends and family.</Text>
          <SocialBrandsContainer color="white" AppleColor="white"/>
          <OrComponent color="white" LineColor="white"/>
          <Pressable onPress={() =>{navigation.navigate("Signup")}} style={style.SıgnUpButton}>
            <Text style={globalStyles.IbmRegular}>Sign Up With Mail</Text>
          </Pressable>
          <View style={style.LogInContainer}>
            <Text style={[style.ExistingAccount, globalStyles.IbmRegular]}>Existing Account?</Text>
            <Pressable onPress={() =>{navigation.navigate("Login")}}><Text style={[style.LogInText , globalStyles.IbmBold]}>Log In</Text></Pressable>
          </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    MainView:{
        width: "100%",
        minHeight: "100%",
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
      fontSize: 60,
      marginTop: 40,
      textAlign: "left",
      marginLeft: 10,
    },
    subtitle:{
        color:"#B9C1BE",
        textAlign:"left",
        fontSize: 20,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10
    },
    orContainer:{
        width: "100%",
        height: 30,
        flexDirection: "row",
        justifyContent:"center",
        alignItems:"center",
        gap: 20,
        marginTop: 20
    },
    Line:{
        height: 1,
        width: "35%",
        backgroundColor:"white"
    },
    OrText:{
        fontSize: 20,
        color:"white"
    },
    SıgnUpButton:{
        backgroundColor:"white",
        width: 327,
        height: 48,
        borderRadius: 16,
        alignItems:"center",
        justifyContent:"center",
        marginTop: 20
    },
    LogInContainer:{
        marginTop: 30,
        gap: 5,
        flexDirection:"row"
    },
    ExistingAccount:{
        color:"#B9C1BE"
    },
    LogInText:{
        color:"white"
    }
})

export default EntryPage;

