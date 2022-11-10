import axios from 'axios';
import { BehaviorSubject } from 'rxjs';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Variables
 */
const rasaServerUrl = `https://048c-197-237-181-157.ap.ngrok.io`;
const backendServerUrl = 'https://rasa-bot-backend-petermirithu.cloud.okteto.net';


/**
 * Observable section
 */

const messages = new BehaviorSubject([]);
export const messages$=messages.asObservable();
export const updateMessages = (data)=>{
    messages.next(data);
};

const getCachedProfile=async ()=>{    
    const data=await AsyncStorage.getItem("profile");      
    if(data){
        const profile=JSON.parse(data)
        return profile
    }
    else{
        return null
    }
}

/**
 * API Requests
 */
export const signInUser = async (payload) => {    
    const config = {
        headers: {                
            "Content-Type":"multipart/form-data",            
        }
    }        
    return axios.post(backendServerUrl+"/login_user", payload, config)    
}


export const postMessageToServer = async (payload) => {
    let profile=null;
    
    await getCachedProfile().then(data => {
        profile = data;        
    });

    const config = {
        headers: {                
            "Content-Type":"application/json",            
        }
    }    
    const rasa_data={
        sender: profile?.stdId, 
        message: payload?.message, 
        token: profile?.stdToken,
        metadata:{
            firstname:profile?.stdFName,     
            sender: profile?.stdId,        
            token: profile?.stdToken,
        }
    }
    return axios.post(rasaServerUrl+"/webhooks/RasaIO/webhook", rasa_data, config)    
}