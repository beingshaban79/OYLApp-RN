import { View, Text, StatusBar, ImageBackground, ScrollView, TouchableOpacity, SafeAreaView, } from 'react-native'
import React, { useEffect } from 'react'
import { AppStyles } from '../../../services/utilities/appstyles'
import { Images } from '../../../services/utilities/assets'
import CustomText from '../../../components/text'
import CustomHeader from '../../../components/header'

const TermsOfService = ({ navigation }) => {

    useEffect(() => {
        navigation.getParent().setOptions({ tabBarStyle: { display: 'none' } })
        return () => {
            navigation.getParent().setOptions({ tabBarStyle: { display: 'flex' } })
        }
    });

    return (

        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />

            <CustomHeader
                ViewStyling={AppStyles.text3}
                text={'Terms Of Service'}
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

        </SafeAreaView>
    )
}
export default TermsOfService