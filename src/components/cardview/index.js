import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { AppStyles } from '../../services/utilities/appstyles';
import { fontFamily } from '../../services/utilities/fonts';

const CustomTouchableItem = ({ text1, text2, text3, isSelected, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[AppStyles.daysview1, isSelected ? { backgroundColor: '#FFFFC8', } : null]}>
        <Text style={{ fontFamily: fontFamily.RobotoBold }}>{text1}</Text>
        <Text style={{ fontFamily: fontFamily.RobotoBold }}>{text2}</Text>
        <Text style={{ fontFamily: fontFamily.RobotoBold }}>{text3}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};


export default CustomTouchableItem;
