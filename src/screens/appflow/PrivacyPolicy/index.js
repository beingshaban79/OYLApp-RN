import { View, Text, StatusBar, ImageBackground, ScrollView, TouchableOpacity, } from 'react-native'
import React, { useEffect } from 'react'
import { AppStyles } from '../../../services/utilities/appstyles'
import { Images } from '../../../services/utilities/assets'
import CustomText from '../../../components/text'
import CustomHeader from '../../../components/header'

const PrivacyPolicy = ({ navigation }) => {

    useEffect(() => {
        navigation.getParent().setOptions({ tabBarStyle: { display: 'none' } })
        return () => {
            navigation.getParent().setOptions({ tabBarStyle: { display: 'flex' } })
        }
    });

    return (

        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />

            <CustomHeader
                ViewStyling={AppStyles.text3}
                text={'Privacy Policy'}
                imageSource={Images.backbtn}
                // onPress={Nav}
                flex={0.1}
                flexDirection={'row'}
                justifyContent={'space-evenly'}
                backgroundColor={'#FFFFFF'}
            />

            <ImageBackground style={AppStyles.bgimg} source={Images.background}>

                <CustomText />

            </ImageBackground>
        </View>

    )
}
export default PrivacyPolicy