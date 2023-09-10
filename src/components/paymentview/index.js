import React from 'react';
import { View, Image, TouchableOpacity} from 'react-native';

const PaymentView = ({ imagesource, ViewStyling, ImageStyling, onPress }) => {
  return (
    
    <View style={ViewStyling}>
        <TouchableOpacity onPress={onPress}>
      <Image style={ImageStyling} source={imagesource} />
      </TouchableOpacity>
    </View>
  );
};

export default PaymentView;
