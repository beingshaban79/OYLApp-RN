import { View, Text, SafeAreaView, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AppStyles } from '../../../services/utilities/appstyles';
import { firebase } from '@react-native-firebase/firestore';
import { colors } from '../../../services/utilities/colors';
import { Images } from '../../../services/utilities/assets';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HandelUser = ({ navigation }) => {
    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                navigation.navigate('app', { screen: 'Home' });
            } else {
                navigation.navigate('Splash');
            }
        });

        return () => unsubscribe();
    }, [navigation]);


    return (
        <View style={AppStyles.handeluserlogo}>

            <Image style={AppStyles.logo} source={Images.logo} />

        </View>
    );
}

export default HandelUser