import React from 'react';
import { TextInput } from 'react-native';
import { tw } from 'tailwindcss-react-native';

const Input = ({ placeholder, value, onChangeText, secureTextEntry, style = [] }) => {
    return (
        <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            style={[tw('border border-gray-300 rounded py-2 px-4 mb-2'), ...style]}
        />
    );
};

export default Input;