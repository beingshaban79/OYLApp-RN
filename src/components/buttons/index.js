import React from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import { AppStyles } from '../../services/utilities/appstyles';
import { fontFamily } from '../../services/utilities/fonts';

const CustomButton = ({ textcolor, btntext, onPress, btncolor, borderRadius, fontFamily, btnheight, btnwidth }) => {
    return (
        <View>
            <TouchableOpacity style={[AppStyles.CustomButtonView,
            { backgroundColor: btncolor, borderRadius: borderRadius, height: btnheight, width: btnwidth }]}
                onPress={onPress}>

                <Text style={[AppStyles.btntext, { color: textcolor, fontFamily: fontFamily }]}>{btntext}</Text>

            </TouchableOpacity>
        </View>
    );
};


export default CustomButton;

