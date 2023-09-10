import { View, Text, Modal, StatusBar, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { AppStyles } from '../../../services/utilities/appstyles'
import TextTouchables from '../../../components/texttouchables'
import { Images } from '../../../services/utilities/assets'
import { fontFamily, fontSize } from '../../../services/utilities/fonts'
import auth from '@react-native-firebase/auth';

const Account = ({ navigation }) => {

  const [isModalVisible, setModalVisible] = useState(false);

  const EP = () => {
    navigation.navigate('AccountStack', { screen: 'EditProfile' });
  };

  const TY = () => {
    navigation.navigate('Thankyou');
  };

  const TOS = () => {
    navigation.navigate('TermsOfService');
  };

  const PP = () => {
    navigation.navigate('PrivacyPolicy');
  };

  const Logout = async () => {
    try {
      await auth().signOut();
      navigation.navigate('Splash');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);


  return (

    <View style={AppStyles.accountview1}>
      <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
      <TouchableOpacity onPress={toggleModal}>
        <View style={{ backgroundColor: 'white' }} >
          <Text style={AppStyles.accounttext}>Account</Text>
        </View>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}

      >
        <TouchableWithoutFeedback onPress={toggleModal}>
          <View style={AppStyles.modalbgchange6}>

            <View style={AppStyles.Accountmodalview}>

              <View style={AppStyles.modalinsideview}>

                <TextTouchables

                  text={'Edit Profile'}
                  fontFamily={fontFamily.RobotoRegular}
                  image={Images.nextbtn}
                  borderbottomwidth={1}
                  justifycontent={'space-between'}
                  flexdirection={'row'}
                  onpress={EP}
                />

                <TextTouchables

                  text={'Share Your Feedback'}
                  fontFamily={fontFamily.RobotoRegular}
                  image={Images.nextbtn}
                  borderbottomwidth={1}
                  justifycontent={'space-between'}
                  flexdirection={'row'}
                  onpress={TY}
                />


                <TextTouchables

                  text={'Terms of Service'}
                  fontFamily={fontFamily.RobotoRegular}
                  image={Images.nextbtn}
                  borderbottomwidth={1}
                  justifycontent={'space-between'}
                  flexdirection={'row'}
                  onpress={TOS}
                />


                <TextTouchables

                  text={'Privacy Policy'}
                  fontFamily={fontFamily.RobotoRegular}
                  image={Images.nextbtn}
                  borderbottomwidth={1}
                  justifycontent={'space-between'}
                  flexdirection={'row'}
                  onpress={PP}
                />


                <TextTouchables

                  text={'About Us'}
                  fontFamily={fontFamily.RobotoRegular}
                  image={Images.nextbtn}
                  borderbottomwidth={1}
                  justifycontent={'space-between'}
                  flexdirection={'row'}
                  onpress={TY}
                />


                <TextTouchables

                  text={'Logout'}
                  fontFamily={fontFamily.RobotoBold}
                  justifycontent={'space-between'}
                  image={Images.nextbtn}
                  flexdirection={'row'}
                  onpress={Logout}

                />

              </View>

            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>


    </View>
  )

}

export default Account