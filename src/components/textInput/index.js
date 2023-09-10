import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { AppStyles } from '../../services/utilities/appstyles';

const CustomTextInput = ({ ViewStyling, onBlur, onFocus, maxLength, value, placeholder, keyboardType, onChangeText, secureTextEntry }) => {
  return (

    <TextInput
      onFocus={onFocus}
      onBlur={onBlur}
      style={ViewStyling}
      value={value}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      keyboardType={keyboardType}
      onChangeText={onChangeText}
      maxLength={maxLength}
    />
  );
};


export default CustomTextInput