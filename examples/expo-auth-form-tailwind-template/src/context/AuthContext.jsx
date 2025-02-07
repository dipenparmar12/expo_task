import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null); // Example user info

    const login = async (email, password) => { // Basic example - replace with real auth logic
        setIsLoading(true);
        // Simulate API call (replace with your actual authentication)
        setTimeout(async () => {
            const fakeToken = 'fakeUserToken123'; // Replace with token from API
            const fakeUserInfo = { email }; // Replace with user data from API

            await AsyncStorage.setItem('userToken', fakeToken);
            await AsyncStorage.setItem('userInfo', JSON.stringify(fakeUserInfo));

            setUserToken(fakeToken);
            setUserInfo(fakeUserInfo);
            setIsLoading(false);
        }, 1000); // Simulate loading time
        };
         const logout = async () => {
        setIsLoading(true);
        setUserToken(null);
        setUserInfo(null);
        await AsyncStorage.removeItem('userToken');
        await AsyncStorage.removeItem('userInfo');
        setIsLoading(false);
    };

    const signup = async (email, password) => { // Basic example - replace with real signup logic
        setIsLoading(true);
        // Simulate API call (replace with your actual signup process)
        setTimeout(async () => {
            const fakeToken = 'newUserToken456'; // Replace with token from API
            const fakeUserInfo = { email }; // Replace with user data from API

            await AsyncStorage.setItem('userToken', fakeToken);
            await AsyncStorage.setItem('userInfo', JSON.stringify(fakeUserInfo));

            setUserToken(fakeToken);
            setUserInfo(fakeUserInfo);
            setIsLoading(false);
        }, 1000); // Simulate loading time
    };

    const isLoggedIn = async () => {
        try {
            setIsLoading(true);
            let storedToken = await AsyncStorage.getItem('userToken');
            let storedUserInfo = await AsyncStorage.getItem('userInfo');
            storedUserInfo = storedUserInfo ? JSON.parse(storedUserInfo) : null;

            if (storedToken) {
                setUserToken(storedToken);
                setUserInfo(storedUserInfo);
            }
        } catch (e) {
            console.log(`isLoggedIn error ${e}`);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        isLoggedIn();
    }, []);

    return (
        <AuthContext.Provider value={{ login, logout, signup, isLoading, userToken, userInfo }}>
            {children}
        </AuthContext.Provider>
    );
};