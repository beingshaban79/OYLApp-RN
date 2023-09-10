import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, StatusBar, ScrollView, SafeAreaView, KeyboardAvoidingView, TextInput, } from 'react-native';
import { AppStyles } from '../../../services/utilities/appstyles';
import LabelTextInput from '../../../components/labelinput';
import CustomGradientButton from '../../../components/gradientbutton';
import auth from '@react-native-firebase/auth';
import CustomImgTextInput from '../../../components/imginput';
import Toast from 'react-native-simple-toast';
import { ActivityIndicator } from 'react-native';
import { Images } from '../../../services/utilities/assets';
import { colors } from '../../../services/utilities/colors';


const Splash = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [loading, setLoading] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const userlogin = () => {
        if (email === '' || password === '') {
            Toast.show('Enter All Details', Toast.SHORT);
            return;
        }

        setLoading(true);

        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                setLoading(false);
                Toast.show('Logged in Successfully', Toast.SHORT);
                navigation.navigate('auth', { screen: 'Profile' });
            })
            .catch((error) => {
                setLoading(false);
                if (error.code === 'auth/user-not-found') {
                } else {
                    Toast.show('User not found,Please check your credentials', Toast.SHORT);
                }
            });
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'android'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}
            >
                <ImageBackground style={AppStyles.bgimg} source={Images.background}>
                    <ScrollView
                        contentContainerStyle={{ flexGrow: 1 }}
                        keyboardShouldPersistTaps="always"
                    >
                        <View style={{ flex: 1 }}>
                            <View style={AppStyles.SplashView1}>
                                <Image style={AppStyles.logo} source={Images.logo} />
                            </View>
                            <View style={AppStyles.SplashView2}>
                                <Text style={AppStyles.text1}>
                                    Enter your phone number to log in!
                                </Text>
                            </View>
                            <View style={AppStyles.SplashView3}>
                                <LabelTextInput
                                    label={'Email'}
                                    placeholder={'shaban@gmail.com'}
                                    keyboardType={'email-address'}
                                    ViewStyling={AppStyles.Splashinputview}
                                    value={email}
                                    onChangeText={(input) => setEmail(input)}
                                />
                            </View>

                            <View style={AppStyles.SplashView4}>
                                <CustomImgTextInput
                                    label={'Password'}
                                    secureTextEntry={showPassword}
                                    image={Images.eyeIcon}
                                    onPress={togglePasswordVisibility}
                                    keyboardType={'name-phone-pad'}
                                    ViewStyling={AppStyles.Splashinputview}
                                    value={password}
                                    onChangeText={(input) => setPassword(input)}
                                />
                            </View>

                            <View style={AppStyles.SplashView5}>
                                <Text style={AppStyles.text2}>Do not have an account?</Text>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('CreateAccount')}
                                >
                                    <Text style={AppStyles.touchabletext}>Create</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={AppStyles.SplashView6}>
                                {loading ? (
                                    <ActivityIndicator size="large" color={colors.appColor3} />
                                ) : (
                                    <CustomGradientButton
                                        colors={colors.Gradientcolor1}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 0.7, y: 0 }}
                                        btntext="LUBE ME UP!"
                                        btnstyle={AppStyles.btn1}
                                        textstyle={AppStyles.btntext}
                                        onPress={userlogin}

                                    />
                                )}
                            </View>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );

};

export default Splash;
