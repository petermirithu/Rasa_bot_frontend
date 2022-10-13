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
            <ChatMsg msgType= "bot" message="You have the following classes:{'\n\n'}F 9.00AM NIRO FS LAB4 - APT3010{'\n'}"/>
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
    botLogo: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        height: 35,
        width: 35,
        marginStart: 10,
        marginEnd: 10,
        borderRadius: 100,
        backgroundColor: "#FCCC06",
    },
    userLogo: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        height: 35,
        width: 35,
        marginStart: 10,
        borderRadius: 100,
        backgroundColor: "#B0B5F5",
    },
    botMsg: {
        marginTop: 10,
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'flex-start',
        height: 'auto',
        width: "70%",
    },
    userMsg: {
        marginTop: 10,
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginEnd: 25,
        height: 'auto',
        width: "70%",
    },
    userChat: {
        backgroundColor: "#FFE372",
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15,
        fontSize: 10,
        width: "90%",
        minHeight: 50,
        padding: 15,
    },
    botChat: {
        backgroundColor: "#B0B5F5",
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        fontSize: 10,
        width: "90%",
        minHeight: 50,
        padding: 15,
    },
    inputView: {
        backgroundColor: "#FFE372",
        borderRadius: 10,
        fontSize: 10,
        width: "75%",
        height: 50,
        marginTop: 20,
        marginBottom: 10,
    },
    buttonView: {
        backgroundColor: "#FCCC06",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        width: "75%",
        height: 50,
        marginTop: 30,
        marginBottom: 10,
        alignItems: "center",
    },
    buttonText: {
        textAlign: "center",
        color: "#000",
        fontSize: 20,
        fontFamily: 'Playfair',
        alignItems: "center",
    },
    TextInput: {
        height: 'auto',
        fontSize: 16,
        fontFamily: 'Playfair',
    }
});