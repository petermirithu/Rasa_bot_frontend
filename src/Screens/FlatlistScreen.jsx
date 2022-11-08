import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Keyboard, Image, Text, TextInput, Pressable, FlatList } from 'react-native';
import ChatMsg from "../Components/ChatMsg";
import axios from 'axios';

//const url = 'https://e360-41-89-4-199.in.ngrok.io/webhooks/rest/webhook';
const baseURL = `http://192.168.0.11:4000/message`;

function FlatlistScreen({ navigation }, props) {
    const [msg, setMsg] = useState('');
    const [messages, setMessages] = useState([]);
    const [botMsg, setBotMsg] = useState('');
    const scrollViewRef = useRef();
    const myTextInput = useRef();



    useEffect(() => {
        const msgs = [
            { key: 101, msgType: "bot", message: "Thankyou for using the USIU Buzzbot. Please ask me anything!" },
            // { key: 102, msgType: "user", message: "Hey Buzzbot. What classes do I have today?" },
            // { key: 103, msgType: "bot", message: "You have the following classes:\n\nF 9.00AM NIRO FS LAB4 - APT3010\n" },
            // { key: 104, msgType: "user", message: "Thanks Buzzbot!" },
            // { key: 105, msgType: "bot", message: "Anytime!" },
            // { key: 106, msgType: "user", message: "Hey Buzzbot." },
            // { key: 107, msgType: "bot", message: "Good evening. How may I help you?" },
            // { key: 108, msgType: "user", message: "I was wondering what assignments I have due this week?" },
            // { key: 109, msgType: "bot", message: "You have the following assignments due this week:\n\nSEN4800C - PERSONALITY EVALUATION is due on 28-OCT-2022 at 11:59PM.\n\nAPT3010 - PROJECT PRESENTATION is due on 27-OCT-2022 at 5:45PM." }
        ];
        setMessages(msgs);
    }, []);

    const renderItem = ({ item }) => (
        <ChatMsg key={item.key} msgType={item.msgType} message={item.message} />
    );

    const sendMsg = async () => {
        Keyboard.dismiss();
        let mymsgs = messages;

        let kay = 101 + mymsgs.length;
        mymsgs.push({ key: kay, msgType: "user", message: msg });
        setMessages(mymsgs);
        myTextInput.current.clear();

        axios
            .post(baseURL, {
                sender: "Mich",
                message: msg
            })
            .then((response) => {
                //console.log(response.data[0].text);
                setBotMsg(response.data[0].text);
                let botkay = 101 + mymsgs.length;
                mymsgs.push({ key: botkay, msgType: "bot", message: botMsg });
                botMsg.clear;
                setMessages(mymsgs);
            });
    }

    return (
        <View style={styles.container}>
            <FlatList contentContainerStyle={{ paddingBottom: 10 }}
                ref={scrollViewRef}
                onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
                data={messages}
                extraData={messages}
                renderItem={renderItem}
                keyExtractor={item => item.key}
            />
            <View style={styles.messageBar}>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Please type your message here"
                        placeholderTextColor="#003f5c"
                        onChangeText={(msg) => setMsg(msg)}
                        ref={myTextInput}
                    />
                </View>
                <Pressable style={styles.botLogo} onPress={sendMsg}>
                    <Image source={require('../Images/send.png')} style={{ height: 32, width: 32 }} /></Pressable>
            </View>
        </View>
    );
}

export default FlatlistScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#21265E",
        fontFamily: 'Playfair',
    },
    messageBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        height: 'auto',
        marginTop: 'auto',
        alignItems: 'center',
        backgroundColor: "#FCCC06",
        fontFamily: 'Playfair',
    },
    botLogo: {
        alignItems: 'center',
        height: 50,
        width: 50,
        borderRadius: 100,
        padding: 2,
        marginLeft: 5,
        justifyContent: 'center',
        backgroundColor: "#B0B5F5",
    },
    inputView: {
        backgroundColor: "#FFF",
        borderRadius: 10,
        fontSize: 10,
        width: "83%",
        height: 50,
        padding: 10,
        textAlignVertical: 'center'
    },
    TextInput: {
        height: 'auto',
        fontSize: 16,
        fontFamily: 'Playfair',
    }
});