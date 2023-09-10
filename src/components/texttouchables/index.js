import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { AppStyles } from '../../services/utilities/appstyles';
import { responsiveHeight, responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { fontFamily } from '../../services/utilities/fonts';

const TextTouchables = ({ text, alignItems, borderbottomwidth, justifycontent, flexdirection, elevation, fontFamily, styling, image, onpress }) => {
  return (
    <View style={[{ flex: 0.16, justifyContent: 'center', borderBottomWidth: borderbottomwidth, elevation: elevation }]}>
      <TouchableOpacity onPress={onpress}>
        <View style={{ justifyContent: justifycontent, alignItems: alignItems, flexDirection: flexdirection }}>
          <Text style={{ marginLeft: responsiveWidth(5), color: '#363636', fontFamily: fontFamily}}>{text}</Text>
          {image && <Image style={{ marginRight: responsiveWidth(5) }} source={image} />}
        </View>
      </TouchableOpacity>
    </View>
  );
};


export default TextTouchables