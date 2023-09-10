import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { AppStyles } from '../../services/utilities/appstyles';

const CustomView = ({ label1, label2, label3, customTextInput, onPress, imageSource, }) => {
    return (
        <View style={[AppStyles.CustomHomeView]}>
            <Text style={AppStyles.CustomViewlabel1}>{label1}</Text>
            <View style={AppStyles.CustomImgView}>
                <Text style={AppStyles.CustomViewlabel2}>{label2}</Text>
                <Text style={AppStyles.CustomViewlabel3}>{label3}</Text>
                <TouchableOpacity onPress={onPress}>
                    <Image style={AppStyles.CustomViewImg} source={imageSource} />
                </TouchableOpacity>
            </View>
            <View>
                {customTextInput}

            </View>
        </View>
    );
};

export default CustomView;
