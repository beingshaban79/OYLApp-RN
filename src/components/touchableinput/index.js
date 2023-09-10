import React, {useState} from 'react';
import { TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import CustomTextInput from '../textInput';
import { AppStyles } from '../../services/utilities/appstyles';

const CustomTouchableInput = ({ onChangeText,onBlur, onFocus, onPress, ViewStyling, keyboardType, placeholder, maxLength, value }) => {

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={AppStyles.hourview}>
        <CustomTextInput onBlur={onBlur} onFocus={onFocus} onChangeText={onChangeText} maxLength={maxLength} value={value} keyboardType={keyboardType} placeholder={placeholder} ViewStyling={ViewStyling} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CustomTouchableInput;