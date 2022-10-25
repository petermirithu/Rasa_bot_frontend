import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, ImageBackground, Image, Text, TextInput, View, Pressable, Alert, ScrollView } from 'react-native';
import ChatMsg from "../Components/ChatMsg";
import MessageBar from "../Components/MessageBar";

function ChatScreen({ navigation }, props){
    const [messageType, setMessageType] = useState('');
    const scrollViewRef = useRef();

    return (
        //I'm going to make a component for Chat messages so that I only need to pass in a message and sender and it renders dynamically in a list
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{paddingBottom: 10}} ref={scrollViewRef}
                        onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}>
                <ChatMsg msgType= "bot" message="Thankyou for using the USIU Buzzbot. Please ask me anything!"/>
                <ChatMsg msgType= "user" message="Hey Buzzbot. What classes do I have today?"/>
                <ChatMsg msgType= "bot" message={"You have the following classes:\n\nF 9.00AM NIRO FS LAB4 - APT3010\n"}/>
                <ChatMsg msgType= "user" message="Thanks Buzzbot!"/>
                <ChatMsg msgType= "bot" message={"Anytime!"}/>
                <ChatMsg msgType= "user" message="Hey Buzzbot."/>
                <ChatMsg msgType= "bot" message={"Good evening, Michelle. How may I help you?"}/>
                <ChatMsg msgType= "user" message="I was wondering what assignments I have due this week?"/>
                <ChatMsg msgType= "bot" message={"You have the following assignments due this week:\n\nSEN4800C - PERSONALITY EVALUATION is due on 28-OCT-2022 at 11:59PM.\n\nAPT3010 - PROJECT PRESENTATION is due on 27-OCT-2022 at 5:45PM."}/>
            </ScrollView>
            <MessageBar/>
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
    myScrollView: {
        paddingBottom: 200,
    }
});