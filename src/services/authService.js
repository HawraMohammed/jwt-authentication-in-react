import { preinitModule } from "react-dom";

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/auth`;

const signUp = async (formData) => {
    try {
        const res = await fetch(`${BASE_URL}/sign-up`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (data.err) {
            throw new Error(data.err);
        }
        if (data.token) {
            //save the raw token in local storage
            localStorage.setItem('token', data.token);
            const payload = data.token.split('.')[1];
            //atob is a browser library turns the payload into human readable text. 
            const decodedPayload = atob(payload);
            //turn decoded payload into a js object
            return JSON.parse(decodedPayload);
        }
        throw new Error('Invalid response from server');

    }
    catch (err) { console.log(err.message) }
}
const signIn = async (formData) => {
    try {
        const res = await fetch(`${BASE_URL}/sign-in`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (data.err) {
            throw new Error(data.err);
        }
        if (data.token) {
            //save the raw token in local storage
            localStorage.setItem('token', data.token);
            const payload = data.token.split('.')[1];
            //atob is a browser library turns the payload into human readable text. 
            const decodedPayload = atob(payload);
            //turn decoded payload into a js object
            return JSON.parse(decodedPayload);
        }
        throw new Error('Invalid response from server');

    }
    catch (err) { console.log(err.message) }
}
export { signUp, signIn };