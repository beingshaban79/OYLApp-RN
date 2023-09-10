import { View, Text, Modal, KeyboardAvoidingView, StatusBar, ImageBackground, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Image, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { AppStyles } from '../../../services/utilities/appstyles';
import CustomButton from '../../../components/buttons';
import { responsiveHeight, responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import BlackHeader from '../../../components/blackheader';
import LabelTextInput from '../../../components/labelinput';
import CustomGradientButton from '../../../components/gradientbutton';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'
import { Images } from '../../../services/utilities/assets';
import { fontFamily } from '../../../services/utilities/fonts';

const Vehicle = ({ navigation }) => {

  const [isChecked, setIsChecked] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [hasUserEditedData, setHasUserEditedData] = useState(false);

  const [vehicleData, setVehicleData] = useState({
    VehicleYear: '',
    VehicleMake: '',
    VehicleModel: '',
    VehicleColor: '',
    VehicleMileage: '',
  });

  const thankyounav = () => {
    navigation.navigate('Payment')
  }

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };


  const fetchUserProfileData = async (userId) => {
    try {
      const userRef = firestore().collection('Users').doc(userId);
      const doc = await userRef.get();
      if (doc.exists) {
        return doc.data();
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  };

  useEffect(() => {
    const currentUser = auth().currentUser;
    if (isChecked && !hasUserEditedData && currentUser) {
      const userId = currentUser.uid;
      fetchUserProfileData(userId)
        .then((userData) => {
          if (userData && userData.Vehicleinfo) {
            setVehicleData(userData.Vehicleinfo);
          } else {
          }
        })
        .catch((error) => {
        });
    }
  }, [isChecked, hasUserEditedData]);

  const updateFirestoreData = async () => {
    try {
      const currentUser = auth().currentUser;
      if (currentUser) {
        const userId = currentUser.uid;
        const userRef = firestore().collection('Users').doc(userId);
        await userRef.update({
          Vehicleinfo: vehicleData,
        });
      }
    } catch (error) {
    }
  };

  return (

    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={'black'} barStyle={'dark-content'} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

        <BlackHeader

          text1={'Vehicle Info'}
          imageSource={Images.background}
          text2={'Please Enter Details'}
          flex={1}
        />

        <View style={AppStyles.vehicleview1}>

          <LabelTextInput
            ViewStyling={AppStyles.Vehicleinputview}
            label={'Vehicle Year'}
            placeholder={'Enter the year of your Vehicle'}
            keyboardType={'number-pad'}
            value={vehicleData.VehicleYear}
            onChangeText={(text) => {
              setVehicleData({ ...vehicleData, VehicleYear: text });
              setHasUserEditedData(true);
            }}
          />

          <LabelTextInput
            ViewStyling={AppStyles.Vehicleinputview}
            label={'Vehicle Make'}
            placeholder={'Enter make of your Vehicle'}
            value={vehicleData.VehicleMake}
            onChangeText={(text) => {
              setVehicleData({ ...vehicleData, VehicleMake: text });
              setHasUserEditedData(true);
            }}

          />

          <LabelTextInput
            ViewStyling={AppStyles.Vehicleinputview}
            label={'Vehicle Model'}
            placeholder={'Enter model of your Vehicle'}
            value={vehicleData.VehicleModel}
            onChangeText={(text) => {
              setVehicleData({ ...vehicleData, VehicleModel: text });
              setHasUserEditedData(true);
            }}
          />

          <LabelTextInput
            ViewStyling={AppStyles.Vehicleinputview}
            label={'Vehicle Color'}
            placeholder={'Enter color of your Vehicle'}
            value={vehicleData.VehicleColor}
            onChangeText={(text) => {
              setVehicleData({ ...vehicleData, VehicleColor: text });
              setHasUserEditedData(true);
            }}
          />

          <LabelTextInput
            ViewStyling={AppStyles.Vehicleinputview}
            label={'Vehicle Mileage'}
            placeholder={'If unknown enter approximate'}
            value={vehicleData.VehicleMileage}
            onChangeText={(text) => {
              setVehicleData({ ...vehicleData, VehicleMileage: text });
              setHasUserEditedData(true);
            }}
          />

        </View>

        <View style={AppStyles.vehiclecheckboxview}>
          <TouchableOpacity onPress={handleToggle}>
            <View style={[AppStyles.checkbox, isChecked && AppStyles.checkboxChecked]}>
              {isChecked && <Image source={Images.checkboxtick} style={AppStyles.tick} />}
            </View>
          </TouchableOpacity>

          <Text style={AppStyles.checkboxtext}>Pull info from profile here</Text>
        </View>

        <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>

          <CustomGradientButton
            colors={['#514B46', '#000000']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1.5, y: 0 }}
            btntext="ADD"
            btnstyle={AppStyles.vehiclebtn}
            textstyle={AppStyles.btntext2}
            onPress={() => {
              updateFirestoreData();
              toggleModal();
            }}
          />

        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={toggleModal}

        >
          <TouchableWithoutFeedback onPress={toggleModal}>
            <View style={AppStyles.modalbgchange}>

              <View style={AppStyles.modalview}>

                <View style={AppStyles.modaltickview}>

                  <Image style={AppStyles.modaltick} source={Images.modaltick} />

                </View>

                <View style={AppStyles.modaltextview}>

                  <Text style={AppStyles.modaltext}>Vehicle has been added successfully! One step left!</Text>

                </View>

                <View style={AppStyles.modalbtnview}>

                  <CustomButton
                    btntext={'CONTINUE'}
                    fontFamily={fontFamily.RobotoBold}
                    btnheight={responsiveHeight(6)}
                    btnwidth={responsiveWidth(60)}
                    borderRadius={30}
                    btncolor={'#FFFFC8'}
                    onPress={thankyounav}

                  />
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

      </ScrollView>
    </SafeAreaView>
  )
}
export default Vehicle