import React, { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground, Image, Text, TextInput, View, Pressable, Alert } from 'react-native';

function ChatScreen({ navigation }, props) {
    const [messageType, setMessageType] = useState('');

    return (
        //I'm going to make a component for Chat messages so that I only need to pass in a message and sender and it renders dynamically in a list
        <View style={styles.container}>
            <View style={styles.botMsg}>
                <View style={styles.botLogo}>
                    <Image source={require('../Images/chatbot-64.png')} style={{ height: 20, width: 20 }} />
                </View>
                <View style={styles.botChat}>
                    <Text style={styles.TextInput}>Thankyou for using the USIU Buzzbot. Please ask me anything!</Text>
                </View>
            </View>

            <View style={styles.userMsg}>
                <View style={styles.userChat}>
                    <Text style={styles.TextInput}>Hey Buzzbot. What classes do I have today?</Text>
                </View>
                <View style={styles.userLogo}>
                    <Image source={require('../Images/user.png')} style={{ height: 20, width: 20 }} />
                </View>
            </View>

            <View style={styles.botMsg}>
                <View style={styles.botLogo}>
                    <Image source={require('../Images/chatbot-64.png')} style={{ height: 20, width: 20 }} />
                </View>
                <View style={styles.botChat}>
                    <Text style={styles.TextInput}>You have the following classes:{'\n\n'}F 9.00AM NIRO FS LAB4 - APT3010{'\n'}</Text>
                </View>
            </View>

            <View style={styles.userMsg}>
                <View style={styles.userChat}>
                    <Text style={styles.TextInput}>Thanks Buzzbot!</Text>
                </View>
                <View style={styles.userLogo}>
                    <Image source={require('../Images/user.png')} style={{ height: 20, width: 20 }} />
                </View>
            </View>
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