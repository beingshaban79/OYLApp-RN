import React from 'react';
import { View, Text, TouchableOpacity, Image, } from 'react-native';
import { AppStyles } from '../../services/utilities/appstyles';

const CustomModal = ({ modaltext1, modaltext2, modalimg, modalbtn, modalonpress }) => {

    return (
        <TouchableWithoutFeedback onPress={toggleModal2}>
            <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>

                <View style={AppStyles.modalview}>

                    <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center' }} >

                        <Image source={modalimg} />

                    </View>

                    <View style={{ flex: 0.4, alignItems: 'center', justifyContent: 'center' }} >

                        <Text style={AppStyles.modaltext}>{modaltext1}</Text>

                    </View>

                    <View style={{ flex: 0.4, alignItems: 'center', justifyContent: 'center' }}>

                        <CustomButton onPress={modalonpress}>{modalbtn}</CustomButton>

                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default CustomModal
