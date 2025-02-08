// app/auth/signUp.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator } from 'react-native';
import { useAuth } from '../../contexts/AuthContext'; // Adjust path
import { Link, useRouter } from 'expo-router';
import { PaperProvider, TextInput as PaperTextInput, Button as PaperButton, ActivityIndicator as PaperActivityIndicator } from 'react-native-paper'; // Using react-native-paper


const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUp, isLoading } = useAuth();
  const router = useRouter();

  const handleSignUp = async () => {
    if (!email || !password) {
      alert('Please enter email and password.');
      return;
    }
    await signUp(email, password);
    router.replace('/'); // Redirect to home after signup
  };

  return (
    <PaperProvider>
    <View className="flex-1 justify-center items-center p-4 bg-white">
      <Text className="text-2xl font-bold mb-4">Sign Up</Text>

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
        onPress={handleSignUp}
        loading={isLoading}
        className="w-full mb-2"
      >
        Sign Up
      </PaperButton>

      <View className="flex-row mt-4">
        <Text>Already have an account? </Text>
        <Link href="/auth/signIn" className="text-blue-500">Sign In</Link>
      </View>
    </View>
    </PaperProvider>
  );
};

export default SignUpScreen;