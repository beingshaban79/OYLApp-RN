import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { AppStyles } from '../../services/utilities/appstyles';

const LabelTextInput = ({ value, placeholder, keyboardType, onChangeText, secureTextEntry }) => {
    return (

        
      <TextInput
        style={AppStyles.phoneinput}
        value={value}
        secureTextEntry = {secureTextEntry}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
      />
      
    );

    };


export default LabelTextInput