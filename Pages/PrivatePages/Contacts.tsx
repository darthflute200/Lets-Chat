import React from "react";
import { SafeAreaView,  StatusBar, StyleSheet , View , Text, Image } from "react-native";
import { useState } from "react";
import SearchComponent from "../Components/SearchComponent";
import PageTitle from "../Components/PageTitle";
import globalStyles from "../GlobalStyles";
import { ScrollView } from "react-native-gesture-handler";
const Contacts = () =>{
   const [search , setSearch] = useState(false);
   return(
      <SafeAreaView style={style.MainView}>
      <StatusBar
              barStyle="default"   translucent backgroundColor="transparent"
      />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={style.ScrollViewStyle}>
      {search === false ? <PageTitle  color="black" title="Contacts" onPress={() =>{setSearch(true)}} image={(require("../../assets/user-add.png"))}/> 
      : 
      <SearchComponent onChange={() =>{setSearch(false)}}/>
      }
      <View style={style.mainContactView}>
         <View style={style.charView}><Text style={[globalStyles.IbmBold ,{fontSize: 16}]}>A</Text></View>
         <View style={style.PersonView}>
            <Image source={require("../../assets/user.png")}/>
            <Text style={[globalStyles.IbmBold , {fontSize: 18}]}>Ege Özdalyan</Text>
         </View>
         <View style={style.PersonView}>
            <Image source={require("../../assets/user.png")}/>
            <Text style={[globalStyles.IbmBold , {fontSize: 18}]}>Ege Özdalyan</Text>
         </View>
         <View style={style.PersonView}>
            <Image source={require("../../assets/user.png")}/>
            <Text style={[globalStyles.IbmBold , {fontSize: 18}]}>Ege Özdalyan</Text>
         </View>
         <View style={style.PersonView}>
            <Image source={require("../../assets/user.png")}/>
            <Text style={[globalStyles.IbmBold , {fontSize: 18}]}>Ege Özdalyan</Text>
         </View>
      </View>
      <View style={style.mainContactView}>
         <View style={style.charView}><Text style={[globalStyles.IbmBold ,{fontSize: 16}]}>B</Text></View>
         <View style={style.PersonView}>
            <Image source={require("../../assets/user.png")}/>
            <Text style={[globalStyles.IbmBold , {fontSize: 18}]}>Ege Özdalyan</Text>
         </View>
         <View style={style.PersonView}>
            <Image source={require("../../assets/user.png")}/>
            <Text style={[globalStyles.IbmBold , {fontSize: 18}]}>Ege Özdalyan</Text>
         </View>
         <View style={style.PersonView}>
            <Image source={require("../../assets/user.png")}/>
            <Text style={[globalStyles.IbmBold , {fontSize: 18}]}>Ege Özdalyan</Text>
         </View>
         <View style={style.PersonView}>
            <Image source={require("../../assets/user.png")}/>
            <Text style={[globalStyles.IbmBold , {fontSize: 18}]}>Ege Özdalyan</Text>
         </View>
      </View>
      </ScrollView>
      </SafeAreaView>
   )
}
const style = StyleSheet.create({
   MainView:{
      width: "100%",
      height: "100%",
      alignItems:"center",
  },
  ScrollViewStyle:{
   width: "100%",
   gap: 20,
   paddingBottom: 30
  },
  mainContactView:{
   width: "80%",
   gap: 30,
  },
  charView:{
   width: "100%"
  },
  PersonView:{
   width: "100%",
   height: 52,
   alignItems:"center",
   flexDirection:"row",
   gap: 30
  }
})
export default Contacts