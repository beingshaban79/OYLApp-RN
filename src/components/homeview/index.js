import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AppStyles } from '../../services/utilities/appstyles';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { scale } from 'react-native-size-matters';

const CustomHomeView = ({ label1, label2, label3, imageSource, onPress }) => {
    return (
        <View style={AppStyles.Homeinputview}>
            <Text style={AppStyles.phonetext}>{label1}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={AppStyles.phonetext}>{label2}</Text>
                <Text style={AppStyles.phonetext}>{label3}</Text>
                <TouchableOpacity onPress={onPress}>
                    <Image style={{ marginRight: responsiveWidth(4), height: scale(20), width: scale(20) }} source={imageSource} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CustomHomeView;
