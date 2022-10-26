import React, { useState } from 'react';
import { StyleSheet, Keyboard, Image, Text, TextInput, View, Pressable, Alert } from 'react-native';

export default function MsgBar() {
    const [msg, setMsg] = useState('');

    const sendMsg = async () => {
        Keyboard.dismiss();
        setMsg(msg);
        Alert.alert("Your msg is", msg);
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Please type your msg here"
                    placeholderTextColor="#003f5c"
                    onChangeText={(msg) => setMsg(msg)}
                />
            </View>
            <Pressable style={styles.botLogo} onPress={sendMsg}>
                <Image source={require('../Images/send.png')} style={{ height: 32, width: 32 }} /></Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
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