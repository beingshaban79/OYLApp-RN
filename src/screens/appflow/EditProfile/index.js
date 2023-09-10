import { View, Text, Alert, StatusBar, ImageBackground, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { AppStyles } from '../../../services/utilities/appstyles'
import LabelTextInput from '../../../components/labelinput';
import CustomImgTextInput from '../../../components/imginput';
import CustomGradientButton from '../../../components/gradientbutton';
import CustomHeader from '../../../components/header';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { firebase } from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import { Images } from '../../../services/utilities/assets';
import Toast from 'react-native-simple-toast';

const EditProfile = ({ navigation }) => {

    const [isDatePickerVisible, setDatePickerVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [vehicleMake, setVehicleMake] = useState('');
    const [vehicleModel, setVehicleModel] = useState('');
    const [vehicleYear, setVehicleYear] = useState('');
    const [vehicleColor, setVehicleColor] = useState('');
    const [vehicleMileage, setVehicleMileage] = useState('');

    const showDatePicker = () => {
        setDatePickerVisible(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisible(false);
    };

    const handleDateConfirm = (date) => {
        if (date) {
            setSelectedDate(date);
            setSelectedDay(date.getDate().toString());
            setSelectedMonth((date.getMonth() + 1).toString());
            setSelectedYear(date.getFullYear().toString());
        }
        hideDatePicker();
    };

    const user = firebase.auth().currentUser;

    useEffect(() => {
        if (user) {
            const userRef = firestore().collection('Users').doc(user.uid);

            userRef
                .get()
                .then((doc) => {
                    if (doc.exists) {
                        const userData = doc.data();
                        setFirstName(userData.FirstName);
                        setLastName(userData.LastName);
                        setBirthday(userData.Birthday);
                        setVehicleMake(userData.Vehicleinfo.VehicleMake);
                        setVehicleModel(userData.Vehicleinfo.VehicleModel);
                        setVehicleYear(userData.Vehicleinfo.VehicleYear);
                        setVehicleColor(userData.Vehicleinfo.VehicleColor);
                        setVehicleMileage(userData.Vehicleinfo.VehicleMileage);
                    } else {
                    }
                })
                .catch((error) => {
                });
        }
    }, [user]);

    const updateProfileData = () => {
        if (user) {
            const userRef = firestore().collection('Users').doc(user.uid);
            const profileData = {
                FirstName: firstName,
                LastName: lastName,
                Birthday: birthday,
                Vehicleinfo: {
                    VehicleMake: vehicleMake,
                    VehicleModel: vehicleModel,
                    VehicleYear: vehicleYear,
                    VehicleColor: vehicleColor,
                    VehicleMileage: vehicleMileage,
                },
            };

            userRef
                .set(profileData, { merge: true })
                .then(() => {
                    navigation.navigate('HomeStack', { screen: 'Home' })
                    Toast.show('Profile Data Updated Successfully!', Toast.SHORT);
                })
                .catch((error) => {
                });
        }
    };

    return (

        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
            <View style={{ flex: 1, }}>

                <ImageBackground style={AppStyles.bgimg} source={Images.background}>

                    <CustomHeader
                        ViewStyling={AppStyles.EditProfileHeader}
                        text={'Edit Profile'}
                        flex={0.1}
                        imageSource={Images.backbtn2}
                        flexDirection={'row'}
                        justifyContent={'space-evenly'}
                    />
                    <ScrollView style={{ flex: 1, }} >

                        <View style={AppStyles.editprofileinputs}>
                            <LabelTextInput
                                label={'First Name'}
                                placeholder={'Mick'}
                                ViewStyling={AppStyles.inputview}
                                value={firstName}
                                onChangeText={(text) => setFirstName(text)}
                            />

                        </View>

                        <View style={AppStyles.editprofileinputs}>
                            <LabelTextInput

                                label={'Last Name'}
                                placeholder={'Tason'}
                                ViewStyling={AppStyles.inputview}
                                value={lastName}
                                onChangeText={(text) => setLastName(text)}
                            />
                        </View>

                        <View style={AppStyles.editprofileinputs}>
                            <CustomImgTextInput
                                ViewStyling={AppStyles.inputview}
                                label={'Birthday'}
                                keyboardType={'number-pad'}
                                placeholder={'09 / 08 / 1996'}
                                image={Images.calendar}
                                onPress={showDatePicker}
                                value={`${selectedDay} / ${selectedMonth} / ${selectedYear}`}
                            />

                            <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode="date"
                                date={selectedDate}
                                onConfirm={handleDateConfirm}
                                onCancel={hideDatePicker}
                            />

                        </View>

                        <View style={AppStyles.editprofileinputs}>

                            <LabelTextInput

                                label={'Vehicle Make'}
                                placeholder={'Enter the make of your Vehicle'}
                                ViewStyling={AppStyles.inputview}
                                value={vehicleMake}
                                onChangeText={(text) => setVehicleMake(text)}
                            />
                        </View>

                        <View style={AppStyles.editprofileinputs}>
                            <LabelTextInput

                                label={'Vehicle Model'}
                                placeholder={'Enter model of your Vehicle'}
                                ViewStyling={AppStyles.inputview}
                                value={vehicleModel}
                                onChangeText={(text) => setVehicleModel(text)}

                            />
                        </View>

                        <View style={AppStyles.editprofileinputs}>

                            <LabelTextInput
                                label={'Vehicle Year'}
                                placeholder={'Enter year of your Vehicle'}
                                ViewStyling={AppStyles.inputview}
                                keyboardType={'number-pad'}
                                value={vehicleYear}
                                onChangeText={(text) => setVehicleYear(text)}

                            />
                        </View>
                        <View style={AppStyles.editprofileinputs} >

                            <LabelTextInput
                                label={'Vehicle Color'}
                                placeholder={'Enter color of your Vehicle'}
                                ViewStyling={AppStyles.inputview}
                                value={vehicleColor}
                                onChangeText={(text) => setVehicleColor(text)}

                            />
                        </View>
                        <View style={AppStyles.editprofileinputs}>

                            <LabelTextInput
                                label={'Vehicle Mileage'}
                                placeholder={'If unknown enter approximate'}
                                ViewStyling={AppStyles.inputview}
                                value={vehicleMileage}
                                onChangeText={(text) => setVehicleMileage(text)}
                            />
                        </View>

                        <View style={AppStyles.editprofilebtn}>
                            <CustomGradientButton

                                colors={['#FFFFFF', '#FFFFCC']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 0.7, y: 0 }}
                                btntext="SAVE CHANGES"
                                btnstyle={AppStyles.btn3}
                                textstyle={AppStyles.btntext}
                                onPress={updateProfileData}


                            />

                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>

        </View>
    )
}
export default EditProfile