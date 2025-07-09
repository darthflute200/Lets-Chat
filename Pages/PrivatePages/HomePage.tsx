import React , {useRef , useMemo} from "react";
import { Pressable, StyleSheet, View , Text, Image, ScrollView ,StatusBar, SafeAreaView} from "react-native";
import { PrivateStackParamList } from "../Types/PrivatePagesStackType";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import globalStyles from "../GlobalStyles";
import StoryComponent from "../Components/StoryComponent";
import BottomSheet from "@gorhom/bottom-sheet";
import MessageItem from "../Components/MessageItem";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
type Props = NativeStackScreenProps<PrivateStackParamList, 'HomePage'>;
type Message = {
    id: string;
    text: string;
    photouri: any;
    newMessage: number;
    time: string;
    name: string;
  };
const HomePage = ({navigation} : Props) =>{
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ["70%", "100%"], []);
    const scrollViewRef = useRef(null);
    const messages: Message[] = [
        { id: '1', text: 'Merhaba nasılsın iyi misin?',  photouri: require("../../assets/user.png") , time: "2 minutes ago" , name: "Ege Özdalyan" ,newMessage: 3},
        { id: '3', text: 'Selam',  photouri: require("../../assets/user.png") , time: "5 minutes ago" , name: "Ahmet" ,newMessage: 1},
        { id: '4', text: 'Selam',  photouri: require("../../assets/user.png") , time: "5 minutes ago" , name: "Ahmet" ,newMessage: 1},
        { id: '5', text: 'Selam',  photouri: require("../../assets/user.png") , time: "5 minutes ago" , name: "Ahmet" ,newMessage: 1},
        { id: '6', text: 'Selam',  photouri: require("../../assets/user.png") , time: "5 minutes ago" , name: "Ahmet" ,newMessage: 1},
        { id: '7', text: 'Selam',  photouri: require("../../assets/user.png") , time: "5 minutes ago" , name: "Ahmet" ,newMessage: 1},
        { id: '8', text: 'Selam',  photouri: require("../../assets/user.png") , time: "5 minutes ago" , name: "Ahmet" ,newMessage: 1},
        { id: '9', text: 'Selam',  photouri: require("../../assets/user.png") , time: "5 minutes ago" , name: "Ahmet" ,newMessage: 1},
        { id: '10', text: 'Selam',  photouri: require("../../assets/user.png") , time: "5 minutes ago" , name: "Ahmet" ,newMessage: 1},
        { id: '11', text: 'Selam',  photouri: require("../../assets/user.png") , time: "5 minutes ago" , name: "Ahmet" ,newMessage: 1},
        { id: '12', text: 'Selam',  photouri: require("../../assets/user.png") , time: "5 minutes ago" , name: "Ahmet" ,newMessage: 1},
        { id: '13', text: 'Selam',  photouri: require("../../assets/user.png") , time: "5 minutes ago" , name: "Ahmet" ,newMessage: 1},
        { id: '14', text: 'Selam',  photouri: require("../../assets/user.png") , time: "5 minutes ago" , name: "Ahmet" ,newMessage: 1},
      ];
  
      const handleDelete = (id: string) => {
        console.log("Silinecek id:", id);
      };
    return(
        <SafeAreaView style={style.safeArea}>
        <StatusBar
        barStyle="light-content"   translucent backgroundColor="transparent"
      />
        <View style={style.HomePageMain}>
           <View style={style.HomePageSearchContainer}>
              <Pressable style={style.SearchButton}>
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "white"}}/>
              </Pressable>
              <Text style={[globalStyles.IbmBold , style.HomeText]}>Home</Text>
              <Image source={require("../../assets/user.png")}/>
           </View>
           <ScrollView contentContainerStyle={style.StoryScrollComponent} horizontal>
                <StoryComponent PhotoUri={require("../../assets/user.png")} BorderColor="#FBDC94"/>
                <StoryComponent PhotoUri={require("../../assets/user.png")} BorderColor="#FBDC94"/>
                <StoryComponent PhotoUri={require("../../assets/user.png")} BorderColor="#FBDC94"/>
                <StoryComponent PhotoUri={require("../../assets/user.png")} BorderColor="#FBDC94"/>
                <StoryComponent PhotoUri={require("../../assets/user.png")} BorderColor="#FBDC94"/>
                <StoryComponent PhotoUri={require("../../assets/user.png")} BorderColor="#FBDC94"/>
                <StoryComponent PhotoUri={require("../../assets/user.png")} BorderColor="#FBDC94"/>
                <StoryComponent PhotoUri={require("../../assets/user.png")} BorderColor="#FBDC94"/>
                <StoryComponent PhotoUri={require("../../assets/user.png")} BorderColor="#FBDC94"/>
           </ScrollView>
           <BottomSheet
                backgroundStyle={style.BottomSheet}
                ref={bottomSheetRef}
                index={0}
                snapPoints={snapPoints}
            >
                  <BottomSheetScrollView ref={scrollViewRef} contentContainerStyle={{ paddingBottom: 30 }}>
                 {messages.map((item) => (
                <MessageItem key={item.id} message={item} onDelete={handleDelete}   simultaneousHandlers={scrollViewRef} />
                 ))}
                 </BottomSheetScrollView>
            </BottomSheet>
        </View>
    </SafeAreaView>
    )
}
const style = StyleSheet.create({
    safeArea:{
        flex: 1,
        width:"100%",
        backgroundColor:"#000E08",
        paddingTop: StatusBar.currentHeight || 0,
    },
    HomePageMain:{
        width: "100%",
        backgroundColor: "#000E08",
        alignItems:"center",
        paddingTop: 20,
        flex:1,
    },
    HomePageSearchContainer:{
        width: "80%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    SearchButton:{
        width: 50,
        height: 50,
        borderRadius: "50%",
        borderWidth: 1,
        borderColor: "white",
        alignItems:"center",
        justifyContent:"center"
    },
    HomeText:{
        color:"white",
        fontSize: 20
    },
    StoryScrollComponent:{
        minWidth: "100%",
        height: 60,
        alignItems: "center",
        paddingLeft: 30,
        paddingRight: 30,
        flexDirection:"row",
        gap: 20,
        marginTop: 30
    },
    BottomSheet:{
        backgroundColor: "white",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    MessageItemView:{
        flexDirection:"row",
        justifyContent:"space-between",
        width: "100%",
        height: 72,
        alignItems:"center",
        backgroundColor:"white"
    },
    MessageItemLeftView:{
        flexDirection:"row",
        gap: 20
    },
    Image:{
        width: 50,
        height:50,
        borderRadius: 25      
    },
    NameAndTextView:{
        height: 45,
        justifyContent:"space-between"
    },
    NewMessageContainer:{
        height: 20,
        width:20,
        backgroundColor:"#F04A4C",
        borderRadius: 10,
        alignItems:"center",
        justifyContent:"center"
    }
})
export default HomePage