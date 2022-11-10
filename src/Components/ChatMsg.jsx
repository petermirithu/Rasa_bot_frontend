import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, View, Keyboard } from 'react-native';
import { Button } from 'react-native-paper';
import { messages$, postMessageToServer, updateMessages } from '../Services/ChatService';

export default function ChatMsg({ msgType, message, buttons = [] }) {
    const [messages, setMessages] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const submitResponse = (data) => {
        Keyboard.dismiss();

        let mymsgs = [...messages];

        let kay = 101 + mymsgs.length;
        mymsgs.push({ key: kay, msgType: "user", message: data});
        updateMessages(mymsgs);        

        mymsgs.push({ key: (kay+mymsgs.length), msgType: "bot", message: "Typing" });        
        updateMessages(mymsgs);

        const payload = {
            sender: "Mich",
            message: data,
        }

        const index=mymsgs.findIndex(x=>x?.message=="Typing");

        postMessageToServer(payload).then((response) => {
            if(index>=0){
                mymsgs.splice(index,1);
                updateMessages(mymsgs);      
            }
            for (let item of response.data) {
                if (item?.text) {
                    let botkay = 101 + mymsgs.length;
                    mymsgs.push({ key: botkay, msgType: "bot", message: item.text });
                }
                if (item?.buttons) {
                    let botkay = 101 + mymsgs.length;
                    mymsgs.push({ key: botkay, msgType: "bot", buttons: item.buttons });
                }
                updateMessages(mymsgs);
            }
        }).catch(error => {            
            if(index>=0){
                mymsgs.splice(index,1);
                updateMessages(mymsgs);      
            }
            alert("An error occured while sending your message")
        });
    }

    const renderButton = (datum, index) => {
        return (
            <Button style={styles.button} key={index} onPress={() => submitResponse(datum.payload)}>{datum.title}</Button>
        )
    }

    const botView = () => {
        return (
            <View style={styles.botMsg} key="bot message">
                <View style={styles.botLogo}>
                    <Image key={"Bot Logo"} source={require('../Images/chatbot-64.png')} style={{ height: 20, width: 20 }} />
                </View>
                {buttons?.length == 0 ?
                    <View style={styles.botChat}>
                        {(message=="Typing")?
                            <Image key={"loader"} source={require('../Images/loader.gif')} style={{ height: 20, width: 50 }} />
                        :
                            <Text style={styles.TextInput}>{message}</Text>
                        }
                    </View>
                    :
                    <View style={styles.botButtonView}>
                        <View style={{ flexDirection: "row" }}>
                            {
                                buttons.map((datum, index) => {
                                    return renderButton(datum, index);
                                })
                            }
                        </View>
                    </View>
                }
            </View >
        )
    };

    const userView = () => {
        return (
            <View style={styles.userMsg} key="user message">
                <View style={styles.userChat}>
                    <Text style={styles.TextInput}>{message}</Text>
                </View>
                <View style={styles.userLogo}>
                    <Image source={require('../Images/user.png')} style={{ height: 20, width: 20 }} />
                </View>
            </View>
        )
    };

    useEffect(() => {
        if(loaded==false){
            setLoaded(true)
            messages$.subscribe(data=>{
                setMessages([...data]);
            });
        }
    }, [messages]);

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
    botButtonView: {
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
    },
    button: {
        backgroundColor: "#fff",
        marginRight: 20,
    }
});