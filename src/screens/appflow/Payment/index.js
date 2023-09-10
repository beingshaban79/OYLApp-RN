import { View, Modal, Text, StatusBar, Image, ImageBackground, ScrollView, TouchableWithoutFeedback, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { AppStyles } from '../../../services/utilities/appstyles'
import PaymentView from '../../../components/paymentview'
import CustomTextInput from '../../../components/textInput'
import { Images } from '../../../services/utilities/assets'
import CustomHeader from '../../../components/header'
import { fontFamily } from '../../../services/utilities/fonts'
import CustomGradientButton from '../../../components/gradientbutton'
import { colors } from '../../../services/utilities/colors'

const Payment = ({ navigation }) => {

    const [isModalVisible, setModalVisible] = useState(false);
    const [isSecondModalVisible, setSecondModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const toggleSecondModal = () => {
        setSecondModalVisible(!isSecondModalVisible);
    };

    const handleSaveButtonPress = () => {
        toggleModal();
        toggleSecondModal();
    };

    const TY = () => {
        navigation.navigate('Thankyou');
    };

    return (
        <SafeAreaView style={{ flex: 1 }} >
            <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />

            <CustomHeader
                text={'Select Price & Payment Method'}
                imageSource={Images.backbtn}
                // onPress={navigation.navigate('Vehicle') }
                flex={0.1}
                backgroundColor={'#FFFFFF'}
                flexDirection={'row'}
                justifyContent={'center'}
                ViewStyling={AppStyles.HeaderText}
            />

            <ImageBackground source={Images.background} style={{ flex: 1 }}>

                <View style={AppStyles.paymentview1}>
                    <View style={AppStyles.paymentview2}>
                        <View style={AppStyles.paymentview3}>
                            <View>
                                <Text style={AppStyles.smalltext}>YOUR OYL AND FYLTER CHANGE WILL BE</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

                                <Text style={AppStyles.bigdollar}>$</Text>
                                <Text style={AppStyles.bigtext} >87</Text>

                            </View>

                            <Text style={AppStyles.smalltext}>THIS WILL HAVE YOU ROLLIN FOR 10,000 MILES - SHOOT WE'LL EVEN TOP OFF YOUR WASHER FLUID AND AIR UP YOUR TIRES</Text>
                        </View>

                    </View>
                </View>

                <View style={{ flex: 0.1 }}>

                    <Text style={AppStyles.paymenttextview}>Payment Methods</Text>

                </View>

                <View style={{ flex: 0.5 }}>

                    <View style={AppStyles.paymentview4}>
                        <PaymentView

                            imagesource={Images.stripeimg}
                            ViewStyling={AppStyles.stripe}
                            ImageStyling={AppStyles.androidpayimg}
                            onPress={toggleModal}
                        />

                        <PaymentView

                            imagesource={Images.androidpayimg}
                            ViewStyling={AppStyles.stripe}
                            ImageStyling={AppStyles.androidpayimg}
                            onPress={toggleModal}
                        />

                        <PaymentView

                            imagesource={Images.applepayimg}
                            ViewStyling={AppStyles.stripe}
                            ImageStyling={AppStyles.androidpayimg}
                            onPress={toggleModal}
                        />

                    </View>

                    <View style={AppStyles.paymentview5}>

                        <PaymentView

                            imagesource={Images.bitpayimg}
                            ViewStyling={AppStyles.stripe}
                            ImageStyling={AppStyles.androidpayimg}
                            onPress={toggleModal}
                        />


                        <PaymentView

                            imagesource={Images.affirmimg}
                            ViewStyling={AppStyles.stripe}
                            ImageStyling={AppStyles.affirmimg}
                            onPress={toggleModal}
                        />

                        <PaymentView

                            imagesource={Images.klarnaimg}
                            ViewStyling={AppStyles.stripe}
                            ImageStyling={AppStyles.androidpayimg}
                            onPress={toggleModal}
                        />

                    </View>
                </View>
            </ImageBackground>


            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={toggleModal}
            >
                <TouchableWithoutFeedback onPress={toggleModal}>
                    <View style={AppStyles.modalbgchange2}>

                        <View style={AppStyles.paymentmodalview}>

                            <View style={AppStyles.modalcard} >

                                <Image style={AppStyles.paymentcardimg} source={Images.paymentcard} />

                            </View>

                            <View style={{ flex: 0.5, justifyContent: 'center' }}>


                                <View style={{ justifyContent: 'center' }} >

                                    <Text style={AppStyles.paymentmodaltext}>Add New Details</Text>

                                </View>

                                <View style={{ justifyContent: 'center' }} >

                                    <Text style={AppStyles.paymentmodaltext}>Please enter your Payment Details</Text>

                                </View>

                            </View>

                            <View style={AppStyles.modalcardview}>
                                <View style={{ flex: 0.22, justifyContent: 'center' }}>
                                    <CustomTextInput

                                        placeholder={'Card holder name'}
                                        ViewStyling={AppStyles.CustomInputView}
                                    />

                                </View>

                                <View style={{ flex: 0.22, justifyContent: 'center' }}>

                                    <CustomTextInput
                                        keyboardType={'number-pad'}
                                        placeholder={'Number of card'}
                                        ViewStyling={AppStyles.CustomInputView}
                                        maxLength={16}
                                    />
                                </View>

                                <View style={{ flex: 0.1, }}>

                                    <Text style={AppStyles.modalcardtext}>VALID THRU</Text>

                                </View>

                                <View style={AppStyles.modalcardtime}>

                                    <View style={AppStyles.modalcardmonth}>

                                        <CustomTextInput
                                            placeholder={'MM'}
                                            keyboardType={'number-pad'}
                                            maxLength={2}
                                        />
                                    </View>
                                    <View>

                                        <Text style={{ fontFamily: fontFamily.Montserrat_Regular }}>/</Text>

                                    </View>

                                    <View style={AppStyles.modalcardyear}
                                    >
                                        <CustomTextInput
                                            placeholder={'YY'}
                                            keyboardType={'number-pad'}
                                            maxLength={2}
                                        />
                                    </View>

                                    <View style={AppStyles.modalcardcode}>

                                        <CustomTextInput
                                            placeholder={'CVV'}
                                            keyboardType={'number-pad'}
                                            maxLength={3}

                                        />
                                    </View>
                                </View>

                            </View>

                            <View style={AppStyles.modalcardbtnview}>
                                <CustomGradientButton
                                    colors={colors.Gradientcolor3}
                                    start={{ x: 1, y: 0 }}
                                    end={{ x: 0, y: 0 }}
                                    btntext="Save"
                                    btnstyle={AppStyles.btn5}
                                    textstyle={AppStyles.btntext3}
                                    onPress={handleSaveButtonPress}

                                />

                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={isSecondModalVisible}
                onRequestClose={toggleSecondModal}
            >

                <TouchableWithoutFeedback onPress={toggleSecondModal}>
                    <View style={AppStyles.modalbgchange3}>

                        <View style={AppStyles.modalview}>

                            <View style={AppStyles.modaltickview2} >

                                <Image style={AppStyles.modaltick} source={Images.modaltick} />

                            </View>

                            <View style={AppStyles.congratsview}>

                                <Text style={AppStyles.modaltext}>Congratulations!</Text>
                            </View>
                            <View style={{ flex: 0.3, }}>
                                <Text style={AppStyles.modaltext2}>We will see you on{'\n'}[DATE SCHEDULED]</Text>
                            </View>


                            <View style={AppStyles.modalbtnview2}>

                                <CustomGradientButton
                                    colors={colors.Gradientcolor1}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 0.7, y: 0 }}
                                    btntext="CONTINUE"
                                    btnstyle={AppStyles.btn1}
                                    textstyle={AppStyles.btntext}
                                    onPress={TY}

                                />
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>

            </Modal>

        </SafeAreaView>

    )
}
export default Payment