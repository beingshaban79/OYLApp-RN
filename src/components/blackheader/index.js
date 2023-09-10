import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { AppStyles } from '../../services/utilities/appstyles';

const BlackHeader = ({ text1, text2, imageSource, flex, ViewStyling }) => {
    return (
        <View style={{ flex: flex }}>
            {imageSource && (
                <ImageBackground style={AppStyles.homebgimg} source={imageSource}>
                    {text1 && <Text style={AppStyles.homeimgtext}>{text1}</Text>}
                </ImageBackground>
            )}

            {text2 && (
                <View
                    style={{   
                        flex: 0.2,
                        alignItems: 'center',
                        justifyContent: 'center',
                        
                    }}
                >
                    <Text style={AppStyles.hometext}>{text2}</Text>
                </View>
            )}
        </View>
    );
};

export default BlackHeader;
