import { View, Text, StatusBar, Image, ImageBackground, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { AppStyles } from '../../../services/utilities/appstyles'
import CustomGradientButton from '../../../components/gradientbutton'
import { Images } from '../../../services/utilities/assets'
import { colors } from '../../../services/utilities/colors'

const Thankyou = ({ navigation }) => {
    const TYnavigation = () => {
        navigation.navigate('Home');
    };
    useEffect(() => {
        navigation.getParent().setOptions({ tabBarStyle: { display: 'none' } })
        return () => {
            navigation.getParent().setOptions({ tabBarStyle: { display: 'flex' } })
        }
    });

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
            <View style={AppStyles.TYview1}>
                <View style={AppStyles.TYview2}>
                    <Image style={AppStyles.thumbsupimg} source={Images.thumbsupIcon} />
                </View>
            </View>
            <ImageBackground source={Images.background} style={{ flex: 0.5 }}>
                <View style={AppStyles.TYtextview1}>
                    <Text style={AppStyles.TYtext}>Thank You!</Text>
                </View>
                <View style={AppStyles.TYtextview2}>
                    <Text style={AppStyles.TYtext2}>Thanks for using our app, We hope you like it and use it again.</Text>
                </View>
                <View style={AppStyles.TYimageview}>
                    <TouchableOpacity>
                        <Image style={AppStyles.fbimg} source={Images.fbIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={AppStyles.instaimg} source={Images.InstaIcon} />
                    </TouchableOpacity>
                </View>
                <View style={AppStyles.TYbtnview}>
                    <CustomGradientButton
                        colors={colors.Gradientcolor1}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0.7, y: 0 }}
                        btntext="Go Home"
                        btnstyle={AppStyles.btn6}
                        textstyle={AppStyles.btntext}
                        onPress={TYnavigation}
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}
export default Thankyou