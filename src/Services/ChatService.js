import axios from 'axios';
import { BehaviorSubject } from 'rxjs';

/**
 * Variables
 */

//const url = 'https://e360-41-89-4-199.in.ngrok.io/webhooks/RasaIO/webhook';
// const baseURL = `http://192.168.0.11:4000/message`;
const baseURL = `https://0bee-197-232-61-215.in.ngrok.io/webhooks/RasaIO/webhook`;


/**
 * Observable section
 */

const messages = new BehaviorSubject([{ key: 101, msgType: "bot", message: "Thank you for using the USIU Buzzbot. Please ask me anything!" }]);
export const messages$=messages.asObservable();
export const updateMessages = (data)=>{
    messages.next(data);
};

/**
 * API Requests
 */
export const postMessageToServer = (payload) => {
    const config = {
        headers: {                
            "Content-Type":"application/json"
        }
    }    
    return axios.post(baseURL, {sender: payload?.sender,message: payload?.message}, config)    
}