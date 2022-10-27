import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

export default function ChatMsg(props) {
    const msgType = props.msgType;
    const message = props.message;

    const botView = () => {
        return (
            <View style={styles.botMsg}>
                <View style={styles.botLogo}>
                    <Image source={require('../Images/chatbot-64.png')} style={{ height: 20, width: 20 }} />
                </View>
                <View style={styles.botChat}>
                    <Text style={styles.TextInput}>{message}</Text>
                </View>
            </View>
        )
    };

    const userView = () => {
        return (
            <View style={styles.userMsg}>
                <View style={styles.userChat}>
                    <Text style={styles.TextInput}>{message}</Text>
                </View>
                <View style={styles.userLogo}>
                    <Image source={require('../Images/user.png')} style={{ height: 20, width: 20 }} />
                </View>
            </View>
        )
    };

    return (
        <View>
            {msgType === "bot"
                ? botView()
                : userView()}
        </View>
    )

}

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