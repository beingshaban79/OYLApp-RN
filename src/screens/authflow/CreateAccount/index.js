import React, { useState } from 'react';
import { View, Alert, Text, KeyboardAvoidingView, StatusBar, Image, TouchableOpacity, ImageBackground, ScrollView, SafeAreaView, TouchableWithoutFeedback, } from 'react-native';
import { AppStyles } from '../../../services/utilities/appstyles';
import LabelTextInput from '../../../components/labelinput';
import CustomImgTextInput from '../../../components/imginput';
import CustomGradientButton from '../../../components/gradientbutton';
import CustomHeader from '../../../components/header';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import { Images } from '../../../services/utilities/assets';
import Toast from 'react-native-simple-toast';
import { ActivityIndicator } from 'react-native';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { scale } from 'react-native-size-matters';
import { colors } from '../../../services/utilities/colors';

const CreateAccount = ({ navigation }) => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(true);
    const [isCircleCheckboxChecked, setIsCircleCheckboxChecked] = useState(false);
    const [loading, setLoading] = useState(false);

    const Nav = () => {
        navigation.navigate('Splash');
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleCircleCheckbox = () => {
        setIsCircleCheckboxChecked(!isCircleCheckboxChecked);
    };

    const yellowViewStyle = {
        marginRight: responsiveWidth(2),
        borderRadius: scale(10),
        width: responsiveWidth(5),
        height: responsiveHeight(3),
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const usersignup = () => {

        if (email === '' || password === '') {
            Toast.show('Please Fill All The Fields', Toast.SHORT);
            return;
        }

        if (!isCircleCheckboxChecked) {
            Toast.show('Please Accept The Terms Of Service & Privacy Policy', Toast.SHORT);
            return;
        }

        setLoading(true);

        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(({ user }) => {
                setLoading(false);
                Toast.show('Registered Successfully', Toast.SHORT);
                navigation.navigate('Profile');
                firestore()
                    .collection('Users')
                    .doc(user.uid)
                    .set({
                        UID: user.uid,
                        Email: email,
                    })
                    .then(() => {
                    });
            })
            .catch((error) => {
                setLoading(false);
                if (error.code === 'auth/email-already-in-use') {
                    Toast.show('Email already exists', Toast.SHORT);
                }
                if (error.code === 'auth/invalid-email') {
                    Toast.show('Invalid Email Pattern', Toast.SHORT);
                }
            });
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'android'}
            >
                <View style={{ flex: 1 }}>
                    <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />

                    <CustomHeader
                        ViewStyling={AppStyles.text3}
                        text={'Create Account'}
                        imageSource={Images.backbtn}
                        onPress={Nav}
                        flex={0.1}
                        flexDirection={'row'}
                        justifyContent={'space-evenly'}
                        backgroundColor={'#FFFFFF'}
                    />

                    <ImageBackground style={AppStyles.bgimg3} source={Images.background}>
                        <ScrollView
                            contentContainerStyle={{ flexGrow: 1 }}
                            keyboardShouldPersistTaps="always"
                        >
                            <View style={AppStyles.CAView1}>
                                <LabelTextInput
                                    ViewStyling={AppStyles.inputview}
                                    label={'Email'}
                                    keyboardType={'email-address'}
                                    placeholder={'shaban@email.com'}
                                    value={email}
                                    onChangeText={input => setEmail(input)}
                                />
                            </View>

                            <View style={AppStyles.CAView2}>

                                <CustomImgTextInput
                                    ViewStyling={AppStyles.CAinputview}
                                    label={'Password'}
                                    keyboardType={'name-phone-pad'}
                                    secureTextEntry={showPassword}
                                    image={Images.eyeIcon}
                                    onPress={togglePasswordVisibility}
                                    value={password}
                                    onChangeText={input => setPassword(input)}
                                />
                            </View>

                            <View style={AppStyles.CAView3}>
                                <TouchableWithoutFeedback onPress={toggleCircleCheckbox}>
                                    <View style={yellowViewStyle}>
                                        {isCircleCheckboxChecked && (
                                            <Image
                                                source={Images.circlecheck}
                                                style={{ width: responsiveWidth(5), height: responsiveHeight(3) }}
                                            />
                                        )}
                                    </View>
                                </TouchableWithoutFeedback>
                                <Text style={AppStyles.text4}>I accept the</Text>
                                <TouchableOpacity>

                                    <Text style={AppStyles.touchableTOS}>Terms of Service</Text>

                                </TouchableOpacity>

                                <Text style={AppStyles.andtext}>and</Text>

                                <TouchableOpacity >

                                    <Text style={AppStyles.touchablePP}>Privacy Policy</Text>

                                </TouchableOpacity>

                            </View>

                            <View style={AppStyles.CAView4}>
                                {loading ? (
                                    <ActivityIndicator size="large" color="#FFFFC8" />
                                ) : (
                                    <CustomGradientButton
                                        colors={colors.Gradientcolor1}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 0.7, y: 0 }}
                                        btntext="Lets go!"
                                        btnstyle={AppStyles.btn2}
                                        textstyle={AppStyles.btntext}
                                        onPress={usersignup}
                                    />
                                )}
                            </View>

                        </ScrollView>
                    </ImageBackground>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default CreateAccount;
