import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { AppStyles } from '../../services/utilities/appstyles';

const CustomHeader = ({ text, imageSource, backgroundColor, onPress, flex, flexDirection, justifyContent, ViewStyling }) => {
  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        flex: flex,
        alignItems: 'center',
        justifyContent: justifyContent,
        flexDirection: flexDirection,
      }}
    >
      <TouchableOpacity onPress={onPress}>
        {imageSource && (
          <Image style={AppStyles.backbtn} source={imageSource} />
        )}
      </TouchableOpacity>

      {text && <Text style={ViewStyling}>{text}</Text>}
    </View>
  );
};

export default CustomHeader;
