import React, { useState } from 'react';
import { View, Text, ImageBackground, StatusBar, ScrollView, TouchableOpacity, Alert } from 'react-native';
import LabelTextInput from '../../../components/labelinput';
import CustomImgTextInput from '../../../components/imginput';
import CustomGradientButton from '../../../components/gradientbutton';
import CustomHeader from '../../../components/header';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { AppStyles } from '../../../services/utilities/appstyles';
import { firebase } from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import { Images } from '../../../services/utilities/assets';
import Toast from 'react-native-simple-toast';


const Profile = ({ navigation }) => {
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [VehicleMake, setVehicleMake] = useState('');
  const [VehicleModel, setVehicleModel] = useState('');
  const [VehicleYear, setVehicleYear] = useState('');
  const [VehicleColor, setVehicleColor] = useState('');
  const [VehicleMileage, setVehicleMileage] = useState('');


  const updateProfileData = async () => {
    try {
      const user = firebase.auth().currentUser;
      if (user) {
        if (
          !FirstName ||
          !LastName ||
          !selectedDay ||
          !selectedMonth ||
          !selectedYear ||
          !VehicleMake ||
          !VehicleModel ||
          !VehicleYear ||
          !VehicleColor ||
          !VehicleMileage
        ) {
          Toast.show('Please fill out all fields', Toast.SHORT);
          return;
        }

        const profileData = {
          Vehicleinfo: {
            VehicleMake,
            VehicleModel,
            VehicleYear,
            VehicleColor,
            VehicleMileage,
          },
          FirstName,
          LastName,
          Birthday: `${selectedMonth}/${selectedDay}/${selectedYear}`,
        };

        const userRef = firestore().collection('Users').doc(user.uid);

        await userRef.set(profileData, { merge: true });

        Toast.show('Profile Data Added Successfully!', Toast.SHORT);
        navigation.navigate('app', { screen: 'Home' });
      }
    } catch (error) {
    }
  };

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

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />

      <CustomHeader
        ViewStyling={AppStyles.HeaderText}
        text={'Set Up Your Profile'}
        flex={0.1}
        justifyContent={'center'}
        textalign={'center'}
        backgroundColor={'#FFFFFF'}

      />
      <ImageBackground
        style={AppStyles.bgimg3}
        source={Images.background}
      >
        <ScrollView style={{ flex: 1 }}>


          <View style={AppStyles.profileinputsview}>
            <LabelTextInput
              label={'First Name'}
              placeholder={'Mick'}
              ViewStyling={AppStyles.inputview}
              onChangeText={(text) => setFirstName(text)}
            />
          </View>

          <View style={AppStyles.profileinputsview}>
            <LabelTextInput

              label={'Last Name'}
              placeholder={'Tason'}
              ViewStyling={AppStyles.inputview}
              onChangeText={(text) => setLastName(text)}
            />
          </View>

          <View style={AppStyles.profileinputsview}>
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

          <View style={AppStyles.profileinputsview}>

            <LabelTextInput
              label={'Vehicle Make'}
              placeholder={'Enter the make of your Vehicle'}
              ViewStyling={AppStyles.inputview}
              onChangeText={(text) => setVehicleMake(text)}
            />
          </View>

          <View style={AppStyles.profileinputsview}>
            <LabelTextInput

              label={'Vehicle Model'}
              placeholder={'Enter model of your Vehicle'}
              ViewStyling={AppStyles.inputview}
              onChangeText={(text) => setVehicleModel(text)}
            />
          </View>

          <View style={AppStyles.profileinputsview}>

            <LabelTextInput
              label={'Vehicle Year'}
              placeholder={'Enter year of your Vehicle'}
              keyboardType={'number-pad'}
              ViewStyling={AppStyles.inputview}
              onChangeText={(text) => setVehicleYear(text)}
            />
          </View>
          <View style={AppStyles.profileinputsview} >
            <LabelTextInput

              label={'Vehicle Color'}
              placeholder={'Enter color of your Vehicle'}
              ViewStyling={AppStyles.inputview}
              onChangeText={(text) => setVehicleColor(text)}

            />
          </View>
          <View style={AppStyles.profileinputsview}>
            <LabelTextInput

              label={'Vehicle Mileage'}
              placeholder={'If unknown enter approximate'}
              ViewStyling={AppStyles.inputview}
              onChangeText={(text) => setVehicleMileage(text)}
            />
          </View>


          <View style={AppStyles.profilebtn}>
            <CustomGradientButton
              colors={['#FFFFFF', '#FFFFCC']}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.7, y: 0 }}
              btntext="DONE"
              btnstyle={AppStyles.btn3}
              textstyle={AppStyles.btntext}
              onPress={updateProfileData}

            />
          </View>
        </ScrollView>
      </ImageBackground>


    </View>
  );
};

export default Profile;
