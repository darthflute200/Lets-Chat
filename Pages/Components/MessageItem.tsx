import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { View, Text, StyleSheet, Pressable, Dimensions, Image } from 'react-native';
import React from 'react';

type Message = {
  id: string;
  text: string;
  photouri: any;
  newMessage: number;
  time: string;
  name: string;
};

const SCREEN_WIDTH = Dimensions.get("window").width;
const SWIPE_THRESHOLD = -100;

interface Props {
  message: Message;
  onDelete: (id: string) => void;
  simultaneousHandlers: any
}

const MessageItem: React.FC<Props> = ({ message, onDelete , simultaneousHandlers}) => {
  const translateX = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      translateX.value = Math.max(-150, event.translationX);
    })
    .onEnd(() => {
      if (translateX.value < SWIPE_THRESHOLD) {
        translateX.value = withSpring(-150);
      } else {
        translateX.value = withSpring(0);
      }
    })
    .simultaneousWithExternalGesture(simultaneousHandlers)
    .activeOffsetX([-10, 10]);

  const rStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View style={styles.container}>
      <View style={styles.deleteButtonContainer}>
        <Pressable style={styles.deleteButton} onPress={() => onDelete(message.id)}>
          <Text style={{ color: "white" }}>Sil</Text>
        </Pressable>
      </View>
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.messageContainer, rStyle]}>
          <View style={styles.MessageItemLeftView}>
            <Image style={styles.Image} source={message.photouri} />
            <View style={styles.NameAndTextView}>
              <Text>{message.name}</Text>
              <Text>{message.text}</Text>
            </View>
          </View>
          <View style={styles.NameAndTextViewRight}>
            <Text>{message.time}</Text>
            <View style={styles.NewMessageContainer}>
              <Text style={{color: "white"}}>{message.newMessage}</Text>
            </View>
          </View>
        </Animated.View>
      </GestureDetector>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 72,
    backgroundColor: "white",
    borderRadius: 20,
    overflow: "hidden"
  },
  deleteButtonContainer: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: 150,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  deleteButton: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  messageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    height: "100%",
    backgroundColor: "white",
  },
  MessageItemLeftView: {
    flexDirection: "row",
    gap: 20,
  },
  Image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  NameAndTextView: {
    height: 45,
    justifyContent: "space-between",
  },
  NameAndTextViewRight: {
    height: 45,
    justifyContent: "space-between",
    alignItems:"center"
  },
  NewMessageContainer: {
    height: 20,
    width: 20,
    backgroundColor: "#F04A4C",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MessageItem;

