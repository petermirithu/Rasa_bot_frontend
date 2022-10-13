import React, { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground, Image, Text, TextInput, View, Pressable, Alert } from 'react-native';
import ChatMsg from "../Components/ChatMsg";

function ChatScreen({ navigation }, props) {
    const [messageType, setMessageType] = useState('');

    return (
        //I'm going to make a component for Chat messages so that I only need to pass in a message and sender and it renders dynamically in a list
        <View style={styles.container}>
            <ChatMsg msgType= "bot" message="Thankyou for using the USIU Buzzbot. Please ask me anything!"/>
            <ChatMsg msgType= "user" message="Hey Buzzbot. What classes do I have today?"/>
            <ChatMsg msgType= "bot" message={"You have the following classes:\n\nF 9.00AM NIRO FS LAB4 - APT3010\n"}/>
            <ChatMsg msgType= "user" message="Thanks Buzzbot!"/>
        </View>
    );
}

export default ChatScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#21265E",
        fontFamily: 'Playfair',
        paddingTop: 20,
    },
});