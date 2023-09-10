import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { AppStyles } from '../../services/utilities/appstyles';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { fontFamily } from '../../services/utilities/fonts';

const LabelTextInput = ({
    label,          
    placeholder,
    keyboardType,
    value,
    onChangeText,
    secureTextEntry,
    ViewStyling,
    marginTop,
}) => {
    return (
        <View style={ViewStyling}>
            <Text style={AppStyles.phonetext}>{label}</Text>
            <TextInput
                style={{
                    fontFamily: fontFamily.RobotoRegular,
                    fontSize: responsiveFontSize(1.6),
                    marginLeft: responsiveWidth(3),
                    height: responsiveHeight(5),
                }}
                placeholder={placeholder}
                keyboardType={keyboardType}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

export default LabelTextInput;
