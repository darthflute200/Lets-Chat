import React from "react";
import { ScrollView , View, Pressable , Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import InputFormContainer from "../Components/InputFormContainer";
import UnderLineTitle from "../Components/UnderLineTitle";
import GreenButton from "../Components/GreenButton";
import globalStyles from "../GlobalStyles";
import { StyleSheet } from "react-native";
import { PublicStackParamList } from "../Types/PublicPagesStackType";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<PublicStackParamList, 'Signup'>;
const SignUpPage = ({navigation} : Props) => {
    return(
        <ScrollView contentContainerStyle={style.scrollView}>
        <View style={style.FirstView}>
            <View style={style.GoBackContainer}>
                <Pressable onPress={() => {navigation.goBack();}}>
                    <FontAwesomeIcon icon={faChevronLeft} size={24} color="black" />
                </Pressable>
            </View>
            <View style={style.TitleMain}>
                <Text style={[globalStyles.IbmBold , {fontSize: 16 , color:"#000E08"}]}>Sign up with</Text>
                <UnderLineTitle title="Email"/>
            </View>
            <Text style={style.subtitleText}>Welcome back! Sign in using your social account or email to continue us</Text>
            <View style={style.FormContainer}>
                <InputFormContainer label="Your name"/>
                <InputFormContainer label="Your email"/>
                <InputFormContainer label="Password"/>
                <InputFormContainer label="Confirm Password"/>
            </View>
        </View>
        <GreenButton title="Create an account"/>
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
})
export default SignUpPage