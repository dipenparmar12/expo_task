import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { tw } from 'tailwindcss-react-native';

const Button = ({ title, onPress, style = [], textStyle = [] }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[tw('bg-blue-500 py-2 px-4 rounded'), ...style]}>
            <Text style={[tw('text-white font-bold text-center'), ...textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;