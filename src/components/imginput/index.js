import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { AppStyles } from '../../services/utilities/appstyles';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { scale } from 'react-native-size-matters';
import { fontFamily } from '../../services/utilities/fonts';

const CustomImgTextInput = ({
    label,
    placeholder,
    keyboardType,
    value,
    onChangeText,
    secureTextEntry,
    image,
    onPress,
    ViewStyling,
}) => {
    return (
        <View style={ViewStyling}>
            <Text style={AppStyles.phonetext}>{label}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                <TextInput
                    style={{
                        fontFamily: fontFamily.RobotoBold,
                        fontSize: responsiveFontSize(1.6),
                        marginLeft: responsiveWidth(3),
                        height: responsiveHeight(5),
                        width: responsiveWidth(60),
                    }}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={secureTextEntry}
                />
                <TouchableOpacity onPress={onPress}>
                    <Image style={{ marginRight: responsiveWidth(4), height: scale(20), width: scale(20) }} source={image} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CustomImgTextInput;


