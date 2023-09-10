import { scale } from "react-native-size-matters"
import { responsiveFontSize, responsiveScreenFontSize } from "react-native-responsive-dimensions"

const fontFamily = {
  RobotoLight: 'Roboto-Light',
  RobotoRegular: 'Roboto-Regular',
  RobotoMedium: 'Roboto-Medium',
  RobotoBold: 'Roboto-Bold',
  Poppins_Bold: 'Poppins-Bold',
  Poppins_Light: 'Poppins-Light',
  Poppins_Medium: 'Poppins-Medium',
  Poppins_Regular: 'Poppins-Regular',
  Poppins_SemiBold: 'Poppins-SemiBold',
  Montserrat_Medium: 'Montserrat-Medium',
  Montserrat_Regular: 'Montserrat-Regular'
}

const fontSize = {
  fontsize1: responsiveFontSize(2.3),
  fontsize2: responsiveFontSize(1.8),
  fontsize3: responsiveFontSize(1.7),
  fontsize4: responsiveFontSize(1.9),
  fontsize5: responsiveFontSize(2.2),
  fontsize6: responsiveFontSize(3),
  fontsize7: responsiveFontSize(4),
  fontsize8: responsiveFontSize(3.5),
  fontsize9: responsiveFontSize(5),
  fontsize10: responsiveFontSize(6),
  fontsize11: responsiveFontSize(2),
  fontsize10: responsiveScreenFontSize(3.7),
  fontsize13: responsiveScreenFontSize(3.2),
  fontsize14: responsiveFontSize(2.6),
  fontsize15: responsiveFontSize(1.6),
  fontsize16: responsiveFontSize(13),
  fontsize17: responsiveFontSize(2.5),
  fontsize18: responsiveFontSize(2.7),
  fontsize19: responsiveFontSize(2.4),
  fontsize20: responsiveFontSize(1.5),
  fontsize21: responsiveFontSize(3.3),
}


export { fontFamily, fontSize }
