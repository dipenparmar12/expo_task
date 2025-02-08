// app/auth/signIn.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator } from 'react-native';
import { useAuth } from '../../contexts/AuthContext'; // Adjust path
import { Link } from 'expo-router';
import { PaperProvider, TextInput as PaperTextInput, Button as PaperButton, ActivityIndicator as PaperActivityIndicator } from 'react-native-paper'; // Using react-native-paper

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, isLoading } = useAuth();

  const handleSignIn = async () => {
    if (!email || !password) {
      alert('Please enter email and password.');
      return;
    }
    await signIn(email, password);
  };

  return (
    <PaperProvider>
    <View className="flex-1 justify-center items-center p-4 bg-white">
      <Text className="text-2xl font-bold mb-4">Sign In</Text>

      <PaperTextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        mode="outlined"
        className="w-full mb-2"
      />
      <PaperTextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        mode="outlined"
        className="w-full mb-4"
      />

      <PaperButton
        mode="contained"
        onPress={handleSignIn}
        loading={isLoading}
        className="w-full mb-2"
      >
        Sign In
      </PaperButton>

      <View className="flex-row mt-4">
        <Text>Don't have an account? </Text>
        <Link href="/auth/signUp" className="text-blue-500">Sign Up</Link>
      </View>
    </View>
    </PaperProvider>
  );
};

export default SignInScreen;