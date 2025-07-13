import React from "react";
import { ScrollView , StyleSheet, View , Text , Pressable } from "react-native";
import UnderLineTitle from "../Components/UnderLineTitle";
import globalStyles from "../GlobalStyles";
import { PublicStackParamList } from "../Types/PublicPagesStackType";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import SocialBrandsContainer from "../Components/socialBrandsContainer";
import OrComponent from "../Components/OrComponont";
import InputFormContainer from "../Components/InputFormContainer";
import GreenButton from "../Components/GreenButton";

type Props = NativeStackScreenProps<PublicStackParamList, 'Login'>;
const LogInPage = ({navigation} :Props) =>{
    return(
        <ScrollView contentContainerStyle={style.scrollView}>
            <View style={style.FirstView}>
                <View style={style.GoBackContainer}>
                    <Pressable onPress={() => {navigation.goBack();}}>
                        <FontAwesomeIcon icon={faChevronLeft} size={24} color="black" />
                    </Pressable>
                </View>
                <View style={style.TitleMain}>
                    <UnderLineTitle title="Log In"/>
                    <Text style={[globalStyles.IbmBold , {fontSize: 16 , color:"#000E08"}]}>to Lets Chat!</Text>
                </View>
                <Text style={style.subtitleText}>Welcome back! Sign in using your social account or email to continue us</Text>
                <SocialBrandsContainer color="#797C7B" AppleColor="#797C7B"/>
                <OrComponent color="#797C7B" LineColor="#CDD1D0"/>
                <View style={style.FormContainer}>
                    <InputFormContainer label="Your email or username"/>
                    <InputFormContainer label="Password"/>
                </View>
            </View>
            <View style={style.SecondView}>
                <GreenButton title="Log In"/>
                <Pressable><Text style={style.forgetPassword}>Forget Password?</Text></Pressable>
            </View>
        </ScrollView>
    )
}
const style = StyleSheet.create({
    scrollView:{
        minHeight: "100%",
        width: "100%",
        alignItems:"center",
        justifyContent:"space-between",
        paddingTop: 70,
        paddingBottom: 40
    },
    FirstView:{
        width: "100%",
        alignItems:"center",
        gap: 20
    },
    TitleMain:{
        flexDirection:"row",
        alignItems: "center",
        justifyContent:"center",
        gap: 5
    },
    GoBackContainer :{
        width: "100%",
        paddingLeft: 20

    },
    subtitleText:{
        color:"#797C7B",
        fontSize: 14,
        width:"80%",
        textAlign:"center"
    },
    FormContainer:{
        marginTop: 20,
        width: "100%",
        alignItems:"center",
        flexDirection:"column",
        gap: 20
    },
    SecondView:{
        width: "100%",
        alignItems:"center",
        gap: 30
    },
    forgetPassword:{
        color:"#24786D",
        fontSize: 14
    }
})
export default LogInPage