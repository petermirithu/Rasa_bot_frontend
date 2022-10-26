import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import ChatMsg from "../Components/ChatMsg";
import MessageBar from "../Components/MessageBar";

function ChatScreen({ navigation }, props) {
    const [messages, setMessages] = useState([]);
    const scrollViewRef = useRef();

    //LIST OF ALL MESSAGES, THIS WAY THE MESSAGES CAN BE AUTOMATICALLY LOADED INSTEAD OF INDIVIDUALLY TYPED
    const msgs = [{ key: 1, msgType: "bot", message: "Thankyou for using the USIU Buzzbot. Please ask me anything!" },
    { key: 2, msgType: "user", message: "Hey Buzzbot. What classes do I have today?" },
    { key: 3, msgType: "bot", message: "You have the following classes:\n\nF 9.00AM NIRO FS LAB4 - APT3010\n" },
    { key: 4, msgType: "user", message: "Thanks Buzzbot!" },
    { key: 5, msgType: "bot", message: "Anytime!" },
    { key: 6, msgType: "user", message: "Hey Buzzbot." },
    { key: 7, msgType: "bot", message: "Good evening. How may I help you?" },
    { key: 8, msgType: "user", message: "I was wondering what assignments I have due this week?" },
    { key: 9, msgType: "bot", message: "You have the following assignments due this week:\n\nSEN4800C - PERSONALITY EVALUATION is due on 28-OCT-2022 at 11:59PM.\n\nAPT3010 - PROJECT PRESENTATION is due on 27-OCT-2022 at 5:45PM." }];

    const msg = props.msg;
    if (msg != null) {
        msgs.push({ key: msgs.length, msgType: "user", message: msg });
        setMessages(msgs);
        msg = null;
    }

    const listMessages = msgs.map(messageItem => {
        return <ChatMsg msgType={messageItem.msgType} message={messageItem.message} />
    });

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingBottom: 10 }}
            ref={scrollViewRef}onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}>
                {listMessages}
            </ScrollView>
            <MessageBar />
        </View>
    );
}

export default ChatScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#21265E",
        fontFamily: 'Playfair',
    },
    myScrollView: {
        paddingBottom: 200,
    }
});