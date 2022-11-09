import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Keyboard, Image, Text, TextInput, Pressable, FlatList } from 'react-native';
import ChatMsg from "../Components/ChatMsg";
import { useIsFocused } from '@react-navigation/native';
import { messages$, postMessageToServer, updateMessages } from '../Services/ChatService';

function FlatlistScreen({ navigation }, props) {
    const [msg, setMsg] = useState('Hello');
    const [messages, setMessages] = useState([]);
    const scrollViewRef = useRef();
    const myTextInput = useRef();
    const [loaded, setLoaded] = useState(false);


    const renderItem = (data) => {
        return <ChatMsg key={data.item.key} msgType={data.item.msgType} message={data?.item?.message} buttons={data?.item?.buttons} />
    };

    const sendMsg = async () => {
        Keyboard.dismiss();
        let mymsgs = [...messages];

        let kay = 101 + mymsgs.length;
        mymsgs.push({ key: kay, msgType: "user", message: msg });        
        updateMessages(mymsgs);
        myTextInput.current.clear();
        
        mymsgs.push({ key: (kay+mymsgs.length), msgType: "bot", message: "Typing" });        
        updateMessages(mymsgs);

        const payload = {
            sender: "435253",
            message: msg,
        }        
                
        const index=mymsgs.findIndex(x=>x?.message=="Typing");

        postMessageToServer(payload).then((response) => {     
            if(index>=0){
                mymsgs.splice(index,1);
                updateMessages(mymsgs);      
            }            
            for (let item of response.data) {                
                if(item?.text){
                    let botkay = 101 + mymsgs.length;
                    mymsgs.push({ key: botkay, msgType: "bot", message: item.text });
                }
                if(item?.buttons){                   
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
            console.log(error);
            alert("An error occured while sending your message")
        });
    }

    useIsFocused();

    useEffect(() => {
        if(loaded==false){
            setLoaded(true)
            messages$.subscribe(data=>{
                setMessages([...data]);
            });            
            sendMsg();
        }        
    }, [messages, msg]);

    return (
        <View style={styles.container}>
            <FlatList contentContainerStyle={{ paddingBottom: 10 }}
                ref={scrollViewRef}
                onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
                data={messages}
                extraData={messages}
                renderItem={item => renderItem(item)}
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