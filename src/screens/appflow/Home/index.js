import { View, Text, Alert, Modal, KeyboardAvoidingView, StatusBar, ImageBackground, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { AppStyles } from '../../../services/utilities/appstyles'
import CustomView from '../../../components/view'
import CustomGradientButton from '../../../components/gradientbutton';
import CustomTextInput from '../../../components/textInput'
import TextTouchables from '../../../components/texttouchables'
import CustomTouchableItem from '../../../components/cardview'
import CustomTouchableInput from '../../../components/touchableinput'
import BlackHeader from '../../../components/blackheader';
import CustomImgTextInput from '../../../components/imginput';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { Images } from '../../../services/utilities/assets';
import Toast from 'react-native-simple-toast';
import { colors } from '../../../services/utilities/colors';


const Home = ({ navigation }) => {

  const [isModalVisible, setModalVisible] = useState(false);
  const [isOilModalVisible, setOilModalVisible] = useState(false);
  const [selectedView, setSelectedView] = useState(null);
  const [textInputValue, setTextInputValue] = useState('');
  const [locationInputValue, setLocationInputValue] = useState('');
  const [oilTypeInputValue, setOilTypeInputValue] = useState('');
  const [selectedOilType, setSelectedOilType] = useState('');
  const [selected, setSelected] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isFocused, setIsFocused] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const oilModal = () => {
    setOilModalVisible(!isOilModalVisible);
  };

  const handleViewPress = (date) => {
    if (selectedView === date) {
      setSelectedView(null);
    } else {
      setSelectedView(date);
    }
  };


  const handleTextInputChange = (text) => {
    setTextInputValue(text);
  };

  const handleTimeInputChange = (text, inputType) => {

    const hourPattern = /^(0?[1-9]|1[0-2])$/;
    const minutePattern = /^[0-5]?[0-9]$/;

    if (inputType === 'hours') {

      if (hourPattern.test(text)) {
        setHours(text);
      }
    } else if (inputType === 'minutes') {

      if (minutePattern.test(text)) {
        setMinutes(text);
      }
    }
  };

  const handleSubmit = () => {

    setLocationInputValue(textInputValue);

    toggleModal();
  };

  const handleOilTypeSelection = (oilType) => {
    setSelectedOilType(oilType);
    setOilModalVisible(false);

    setOilTypeInputValue(oilType);
  };

  const handleSelection = (option) => {
    setSelected(option);
  };

  const backgroundColorAM = selected === 'AM' ? '#FFFFC8' : 'transparent';
  const backgroundColorPM = selected === 'PM' ? '#FFFFC8' : 'transparent';

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {

    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);


    return () => clearInterval(intervalId);
  }, []);


  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);


  const startDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate()
  );


  const daysInMonth = [];
  let currentDatePointer = startDate;

  while (currentDatePointer <= lastDayOfMonth) {
    daysInMonth.push(new Date(currentDatePointer));
    currentDatePointer.setDate(currentDatePointer.getDate() + 1);
  }

  const saveDateInfoToFirestore = () => {
    const user = auth().currentUser;

    if (!user) {
      Alert.alert('Authentication Required', 'Please log in before saving data.');
      return;
    }

    if (selectedDate && hours && minutes && selected && locationInputValue && selectedOilType) {
      const selectedDateObject = new Date(currentDate.getFullYear(), currentDate.getMonth(), selectedDate);
      const time = hours + ':' + minutes + ' ' + selected;
      const formattedDate = `${selectedDateObject.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })}`;

      const dateInfo = {
        Date: formattedDate,
        Time: time,
        Location: locationInputValue,
        'Oil Type': selectedOilType,
        UID: user.uid,
      };

      firestore()
        .collection('Schedule')
        .doc(user.uid)
        .set(dateInfo)
        .then(() => {
          navigation.navigate('Vehicle');
        })
        .catch((error) => {
        });
    } else {
      Toast.show('Please fill in all required fields and select a date.', Toast.SHORT);
    }
  };

  return (

    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}>

        <StatusBar backgroundColor={'black'} barStyle={'dark-content'} />

        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>

          <BlackHeader
            text1={'Schedule a Time'}
            imageSource={Images.background}
            text2={'Please Enter Details'}
            flex={0.5}
          />

          <View style={AppStyles.daysview}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>

              {daysInMonth.map((date) => (

                <CustomTouchableItem
                  key={date.getDate()}
                  text1={date.toLocaleDateString('en-US', { weekday: 'short' }).slice(0, 3)}
                  text2={date.getDate()}
                  text3={date.toLocaleDateString('en-US', { month: 'long' })}
                  isSelected={selectedDate === date.getDate()}
                  onPress={() => {
                    setSelectedDate(date.getDate());
                    setSelectedTime(null);
                  }}
                />
              ))}

            </ScrollView>
          </View>

          <View style={{ flex: 0.05, justifyContent: 'center' }}>

            <Text style={AppStyles.timetext}>Enter Time</Text>

          </View>

          <View style={AppStyles.timeview}>

            <CustomTouchableInput
              ViewStyling={AppStyles.timeinputs}
              keyboardType={'number-pad'}
              placeholder={'05'}
              maxLength={2}
              value={hours}
              onChangeText={(text) => handleTimeInputChange(text, 'hours')}
            />

            <View style={AppStyles.colonview}>

              <Text style={AppStyles.colon}>:</Text>
            </View>

            <CustomTouchableInput
              ViewStyling={AppStyles.timeinputs}
              keyboardType={'number-pad'}
              placeholder={'00'}
              maxLength={2}
              value={minutes}
              onChangeText={(text) => handleTimeInputChange(text, 'minutes')}
            />

            <View style={AppStyles.timeformat}>
              <TouchableOpacity onPress={() => handleSelection('AM')}>
                <View style={[AppStyles.border, AppStyles.optionContainer, { backgroundColor: backgroundColorAM }]}>
                  <Text style={[AppStyles.format]}>AM</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleSelection('PM')}>
                <View style={[AppStyles.optionContainer, { backgroundColor: backgroundColorPM }]}>
                  <Text style={[AppStyles.format]}>PM</Text>
                </View>
              </TouchableOpacity>
            </View>

          </View>

          <View style={AppStyles.home1stinput}>

            <CustomImgTextInput
              ViewStyling={AppStyles.Homeinputview}
              label={'Enter Location'}
              placeholder={'Please enter your address'}
              image={Images.locationIcon}
              onPress={toggleModal}
              value={textInputValue}
              onChangeText={handleTextInputChange}
            />

          </View>

          <View style={AppStyles.home2ndinput}>

            <CustomImgTextInput
              ViewStyling={AppStyles.Homeinputview}
              label={'Oil type'}
              placeholder={'Please select Oil type from here'}
              image={Images.dropdownIcon}
              onPress={oilModal}
              value={oilTypeInputValue}
              onChangeText={(text) => setOilTypeInputValue(text)}
            />

          </View>
          <View style={AppStyles.homebtnmain}>

            <CustomGradientButton
              colors={[colors.appColor1, colors.appColor1]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.7, y: 0 }}
              btntext="Lock it in!"
              btnstyle={AppStyles.btn1}
              textstyle={AppStyles.btntext}
              onPress={() => saveDateInfoToFirestore(selectedDate, selectedTime)}
            />

          </View>

          <Modal
            animationType="slide"
            backdropColor='transparent'
            visible={isModalVisible}
            onRequestClose={toggleModal}
          >
            <TouchableWithoutFeedback onPress={toggleModal}>
              <View style={AppStyles.modalbgchange4}>

                <View style={AppStyles.locationmodalview}>

                  <View style={AppStyles.modallocationview} >

                    <Image style={AppStyles.locationmodalicon} source={Images.locationmodalIcon} />

                  </View>

                  <View style={AppStyles.locationtextview} >

                    <Text style={AppStyles.locationmodaltext}>Add Location</Text>

                  </View>
                  <View style={AppStyles.locationinputview} >
                    <CustomTextInput

                      placeholder={'Search here'}
                      ViewStyling={AppStyles.CustomInputView}
                      value={textInputValue}
                      onChangeText={handleTextInputChange}
                    />
                  </View>
                  <View style={AppStyles.locationbtnview}>

                    <CustomGradientButton
                      colors={['#293D3D', '#000000']}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1.5, y: 0 }}
                      btntext="Submit"
                      btnstyle={AppStyles.modalbtn}
                      textstyle={AppStyles.btntext2}
                      onPress={handleSubmit}
                    />

                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>

          <Modal
            animationType="slide"
            backdropColor='transparent'
            visible={isOilModalVisible}
            onRequestClose={oilModal}
          >
            <TouchableWithoutFeedback onPress={oilModal}>
              <View style={AppStyles.modalbgchange5}>

                <View style={AppStyles.oilmodalview}>
                  <CustomView
                    label1={'Oil type'}
                    label2={'Please select Oil type from here\n(All Oil High Quality Synthetic)'}
                    onPress={oilModal}
                    imageSource={Images.dropdownIcon}
                  />
                  <View style={{ flex: 1, justifyContent: 'center', }}>
                    <View style={AppStyles.oilselectionview}>

                      <TextTouchables

                        text={'Manufacturers Recommendation'}
                        borderbottomwidth={0.5}
                        onpress={() => handleOilTypeSelection('Manufacturers Recommendation')}
                      />

                      <TextTouchables

                        text={'------- OR -------'}
                        alignItems={'center'}
                        borderbottomwidth={0.5}

                      />

                      <TextTouchables
                        text={'0W-20'}
                        borderbottomwidth={0.5}
                        onpress={() => handleOilTypeSelection('0W-20')}
                      />

                      <TextTouchables

                        text={'5W-20'}
                        borderbottomwidth={0.5}
                        onpress={() => handleOilTypeSelection('5W-20')}
                      />

                      <TextTouchables
                        text={'5W-30'}
                        borderbottomwidth={0.5}
                        onpress={() => handleOilTypeSelection('5W-30')}

                      />

                      <TextTouchables
                        text={'10W-30'}
                        borderbottomwidth={0.5}
                        onpress={() => handleOilTypeSelection('10W-30')}
                      />


                      <TextTouchables
                        text={'10W-40'}
                        onpress={() => handleOilTypeSelection('10W-40')}
                      />

                    </View>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>


        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}
export default Home