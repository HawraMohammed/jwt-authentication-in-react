import { createContext, useState } from 'react';

const UserContext = createContext();

const getUserFromToken = () => {
    //pull the raw token in local storage
    const token = localStorage.getItem('token');
    if (!token) return null;
    const payload = token.split('.')[1];
    //atob is a browser library turns the payload into human readable text. 
    const decodedPayload = atob(payload);
    //turn decoded payload into a js object
    return JSON.parse(decodedPayload);
}
function UserProvider({ children }) {
    const [user, setUser] = useState(getUserFromToken);
    const value = { user, setUser };
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider, UserContext };
