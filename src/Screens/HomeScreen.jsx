import React, { useState } from 'react';
import { StyleSheet, ImageBackground, Image, Text, TextInput, View, Pressable, Alert } from 'react-native';

function HomeScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async () => {
        //Alert.alert("Login Successful", "You have successfully logged in.");
        //navigation.navigate('Chat');
        navigation.navigate('Chat');
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../Images/bg.png')} resizeMode={'cover'} style={{
                flex: 1, width: '100%', justifyContent: 'center',
                alignItems: 'center'
            }}>
                <View style={styles.logo}>
                    <Image source={require('../Images/chatbot-64.png')} style={{ height: 64, width: 64 }} />
                </View>
                <View>
                    <Text style={styles.welcome}>Welcome to USIU BuzzBot</Text>
                </View>
                <View>
                    <Text style={{ fontFamily: "Playfair", fontSize: 14, color: "#FCCC06", marginTop: 10, marginBottom: 5 }}>Please login with your CX credentials</Text>
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Email"
                        placeholderTextColor="#003f5c"
                        onChangeText={(email) => setEmail(email)}
                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Password"
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>

                <Pressable style={styles.buttonView}
                    title="Login"
                    onPress={loginUser}
                ><Text style={styles.buttonText}>Login</Text></Pressable>
            </ImageBackground>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: 'Playfair',
    },
    logo: {
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      height: 125,
      width: 125,
      borderRadius: 100,
      backgroundColor: "#FCCC06",
    },
    welcome: {
      fontSize: 30,
      alignItems: "center",
      justifyContent: "center",
      margin: 20,
      color: "#fff",
      fontFamily: 'Playfair',
    },
    inputView: {
      backgroundColor: "#FFE372",
      borderRadius: 10,
      fontSize: 10,
      width: "75%",
      height: 50,
      marginTop: 20,
      marginBottom: 10,
      textAlign: "center",
      alignItems: "center"
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
      height: 50,
      flex: 1,
      fontSize: 20,
      fontFamily: 'Playfair',
    }
  });