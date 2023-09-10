import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CustomGradientButton = ({
    onPress,
    colors,
    start,
    end,
    btntext,
    btnstyle,
    textstyle,
}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <LinearGradient
                style={btnstyle}
                colors={colors}
                start={start}
                end={end}
            >
                <Text style={textstyle}>{btntext}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};



export default CustomGradientButton;
