import { View, Text, } from 'react-native'
import React from 'react'
import { AppStyles } from '../../services/utilities/appstyles';

const CustomText = ({ text }) => {
    return (
        
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Text style={AppStyles.TOStext}>Integer at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc a leo imperdiet, nec elementum diam elementum. Etiam elementum euismod commodo. Proin eleifend eget quam ut efficitur. Mauris a accumsan mauris.
                {'\n'}{'\n'} Phasellus egestas et risus sit amet hendrerit. Nulla facilisi. Cras urna sem, vulputate sed condimentum a, posuere vel enim.
                {'\n'}{'\n'}Integer at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc a leo imperdiet, nec elementum diam elementum. Etiam elementum euismod commodo.
                {'\n'}{'\n'}Proin eleifend eget quam ut efficitur. Mauris a accumsan mauris. Phasellus egestas et risus sit amet hendrerit. Nulla facilisi. Cras urna sem, vulputate sed condimentum a, posuere vel enim.
                {'\n'}{'\n'}Integer at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc a leo imperdiet, nec elementum diam elementum. Etiam elementum euismod commodo. Proin eleifend eget quam ut efficitur. Mauris a accumsan mauris.
                {'\n'}{'\n'}Phasellus egestas et risus sit amet hendrerit. Nulla facilisi. Cras urna sem, vulputate sed condimentum a, posuere vel enim.</Text>

        </View>
    );
};


export default CustomText