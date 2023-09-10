import { StyleSheet } from 'react-native'
import { scale } from 'react-native-size-matters';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { fontFamily } from '../fonts';
import { colors } from '../colors';

export const AppStyles = StyleSheet.create({

  handeluserlogo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.appColor5,
  },

  SplashView1: {
    flex: 0.55,
    alignItems: 'center',
    justifyContent: 'center'
  },

  SplashView2: {
    flex: 0.04,
    alignItems: 'center',
    justifyContent: 'center'
  },

  SplashView3: {
    flex: 0.04,
    alignItems: 'center',
    justifyContent: 'center'
  },


  SplashView4: {
    flex: 0.04,
    alignItems: 'center',
    justifyContent: 'center'
  },

  SplashView5: {
    flex: 0.04,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },


  SplashView6: {
    flex: 0.32,
    alignItems: 'center',
    justifyContent: 'center'
  },

  imageview: {
    flex: 1,
  },

  logo: {
    height: scale(110),
    width: scale(210)

  },

  bgimg: {
    flex: 1,
  },

  bgimg2: {
    flex: 0.8,
  },

  bgimg3: {
    flex: 0.9,
  },


  CAView1: {
    flex: 0.07,
    alignItems: 'center',
    justifyContent: 'center'
  },

  CAView2: {
    flex: 0.07,
    alignItems: 'center',
    justifyContent: 'center'
  },


  CAView3: {
    flex: 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  CAView4: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text1: {
    color: colors.appColor1,
    fontSize: responsiveFontSize(1.9),
    fontFamily: fontFamily.RobotoMedium
  },

  inputview: {
    marginTop: responsiveHeight(1),
    backgroundColor: colors.appColor1,
    height: responsiveHeight(8),
    width: responsiveWidth(80),
    borderRadius: responsiveFontSize(1.5),
    justifyContent: 'center',
    elevation: 10,
  },

  Splashinputview: {
    backgroundColor: colors.appColor1,
    height: responsiveHeight(8),
    width: responsiveWidth(80),
    borderRadius: responsiveFontSize(1.5),
    justifyContent: 'center',
  },

  CAinputview: {
    backgroundColor: colors.appColor1,
    height: responsiveHeight(8),
    width: responsiveWidth(80),
    borderRadius: responsiveFontSize(1.5),
    justifyContent: 'center',
    elevation: 10,
  },

  Vehicleinputview: {
    marginTop: responsiveHeight(1),
    backgroundColor: colors.appColor22,
    height: responsiveHeight(8),
    width: responsiveWidth(80),
    borderRadius: responsiveFontSize(1.5),
    justifyContent: 'center',
  },

  Homeinputview: {
    backgroundColor: colors.appColor22,
    height: responsiveHeight(8),
    width: responsiveWidth(80),
    borderRadius: responsiveFontSize(1.5),
    justifyContent: 'center',
    elevation: 10,

  },

  phonetext: {
    fontFamily: fontFamily.RobotoBold,
    fontSize: responsiveFontSize(1.6),
    marginLeft: responsiveWidth(4),
    color: colors.appColor9,

  },

  text2: {
    color: colors.appColor2,
    fontSize: responsiveFontSize(1.6),
    fontFamily: fontFamily.Poppins_Regular

  },

  touchabletext: {
    color: colors.appColor1,
    marginRight: responsiveWidth(13),
    fontSize: responsiveFontSize(1.6),
    fontFamily: fontFamily.Poppins_SemiBold
  },

  btntext: {
    color: colors.appColor6,
    textAlign: 'center',
    fontFamily: fontFamily.RobotoBold,
    fontSize: responsiveFontSize(2),
  },

  btntext2: {
    color: colors.appColor10,
    fontFamily: fontFamily.RobotoBold,
    textAlign: 'center',
    fontSize: responsiveFontSize(1.6),
  },

  btntext3: {
    color: colors.appColor10,
    fontFamily: fontFamily.Poppins_Regular,
    textAlign: 'center',
    fontSize: responsiveFontSize(1.6),
  },

  btn1: {
    backgroundColor: colors.appColor3,
    height: responsiveHeight(6),
    width: responsiveWidth(65),
    justifyContent: 'center',
    borderRadius: responsiveFontSize(3),
    elevation: 10,
  },

  btn5: {
    height: responsiveHeight(4.5),
    width: responsiveWidth(33),
    justifyContent: 'center',
    borderRadius: responsiveFontSize(3),
    elevation: 10,
  },

  btn6: {
    height: responsiveHeight(6),
    width: responsiveWidth(45),
    justifyContent: 'center',
    borderRadius: responsiveFontSize(3),
    elevation: 10,
  },


  modalbtn: {
    backgroundColor: colors.appColor3,
    height: responsiveHeight(5),
    width: responsiveWidth(35),
    justifyContent: 'center',
    borderRadius: responsiveFontSize(3),
  },

  text3: {
    color: colors.appColor7,
    fontSize: responsiveFontSize(2.2),
    fontFamily: fontFamily.RobotoBold,
    textAlign: 'center',
    marginRight: responsiveWidth(19),
  },

  EditProfileHeader: {
    color: colors.appColor1,
    fontFamily: fontFamily.RobotoBold,
    fontSize: responsiveFontSize(2.2),
    textAlign: 'center',
    marginRight: responsiveWidth(19),
  },

  HeaderText: {
    color: colors.appColor7,
    fontFamily: fontFamily.RobotoBold,
    fontSize: responsiveFontSize(2.2),
    textAlign: 'center',
  },

  backbtn: {
    height: scale(17),
    width: scale(10),
    marginRight: responsiveWidth(4),
  },

  paymentbackbtn: {
    height: scale(17),
    width: scale(10),
    marginRight: responsiveWidth(10),
  },

  inputview2: {

    backgroundColor: colors.appColor1,
    height: responsiveHeight(8.5),
    width: responsiveWidth(85),
    alignSelf: 'center',
    borderRadius: 15,
    marginTop: responsiveHeight(5)
  },

  emailtext: {
    marginLeft: responsiveWidth(5),
    fontWeight: 'bold',
  },

  emailinput: {
    marginLeft: responsiveWidth(4),
  },


  inputview3: {

    backgroundColor: colors.appColor21,
    height: responsiveHeight(8.5),
    width: responsiveWidth(85),
    alignSelf: 'center',
    borderRadius: 15,
    marginTop: responsiveHeight(3)
  },

  phonetext2: {
    marginLeft: responsiveWidth(5),
    fontWeight: 'bold',
  },

  phoneinput2: {
    marginLeft: responsiveWidth(4),
  },

  text4: {
    fontFamily: fontFamily.RobotoRegular,
    color: colors.appColor2,
    fontSize: responsiveFontSize(1.3),
    marginRight: responsiveWidth(1),
  },

  andtext: {
    color: colors.appColor2,
    fontFamily: fontFamily.RobotoRegular,
    fontSize: responsiveFontSize(1.3),
    marginLeft: responsiveWidth(1),
    marginRight: responsiveWidth(1),
  },

  touchablePP: {
    color: colors.appColor3,
    fontFamily: fontFamily.RobotoBold,
    fontSize: responsiveFontSize(1.3),
    marginRight: responsiveWidth(7),
  },

  touchableTOS: {
    color: colors.appColor3,
    fontFamily: fontFamily.RobotoBold,
    fontSize: responsiveFontSize(1.3),
  },

  btn2: {
    backgroundColor: colors.appColor3,
    height: responsiveHeight(6),
    width: responsiveWidth(65),
    justifyContent: 'center',
    borderRadius: responsiveFontSize(3),
  },

  vehiclebtn: {
    backgroundColor: colors.appColor3,
    height: responsiveHeight(6),
    width: responsiveWidth(65),
    justifyContent: 'center',
    borderRadius: responsiveFontSize(3),
  },


  text5: {
    color: colors.appColor7,
    fontFamily: fontFamily.RobotoBold,
    fontSize: responsiveFontSize(2.2),
    textAlign: 'center',

  },

  profileinputsview: {
    flex: 0.115,
    alignItems: 'center',
    justifyContent: 'center',

  },

  profilebtn: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  profile1stinput: {

    backgroundColor: colors.appColor1,
    height: responsiveHeight(7),
    width: responsiveWidth(82),
    borderRadius: 15,
  },


  profileinputs: {

    backgroundColor: colors.appColor1,
    height: responsiveHeight(7),
    width: responsiveWidth(82),
    alignSelf: 'center',
    borderRadius: 15,
    marginTop: responsiveHeight(1.3)
  },


  btn3: {
    marginTop: responsiveHeight(5),
    backgroundColor: colors.appColor3,
    height: responsiveHeight(6),
    width: responsiveWidth(65),
    justifyContent: 'center',
    borderRadius: responsiveFontSize(3),

  },

  calendar: {
    alignSelf: 'flex-end',
    marginTop: responsiveHeight(-5.8),
    marginRight: responsiveWidth(6)
  },

  text6: {
    marginTop: responsiveHeight(2),
    color: colors.appColor1,
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.3),
    justifyContent: 'center',
    textAlign: 'center',

  },

  btn4: {

    backgroundColor: colors.appColor3,
    height: responsiveHeight(6),
    width: responsiveWidth(65),
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 30,
    marginTop: responsiveHeight(2.5)
  },

  editprofileinputs: {
    flex: 0.115,
    alignItems: 'center',
    justifyContent: 'center',
  },

  editprofilebtn: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },


  backbtn2: {
    marginLeft: responsiveWidth(-75),
    marginTop: responsiveHeight(-2.5),
    alignSelf: 'center',

  },

  eye: {
    height: responsiveHeight(2),
    width: responsiveWidth(5),
    alignSelf: 'flex-end',
    marginTop: '-14%',
    marginRight: responsiveWidth(5)

  },

  eye2: {
    height: responsiveHeight(2),
    width: responsiveWidth(5),
    alignSelf: 'flex-end',
    marginTop: '-12%',
    marginRight: responsiveWidth(5)

  },


  PPview1: {
    backgroundColor: colors.appColor2,
    flex: 0.11, justifyContent:
      'center',
  },

  TOStext: {
    fontFamily: fontFamily.RobotoRegular,
    color: colors.appColor1,
    fontSize: responsiveFontSize(2.1),

  },

  homebtn: {
    height: responsiveHeight(5),
    width: responsiveWidth(10),
    marginTop: responsiveHeight(5),

  },

  homebtntext: {

    color: colors.appColor1,
    marginTop: responsiveHeight(0.5)
  },

  accountbtn: {
    marginLeft: responsiveWidth(2),
    marginTop: responsiveHeight(6),
    height: responsiveHeight(5),
    width: responsiveWidth(10),
  },

  accounttext: {
    color: colors.appColor1,
    textAlign: 'center',
    marginTop: responsiveHeight(0.3),
    fontFamily: fontFamily.RobotoBold
  },

  tab1: {
    width: scale(20),
    height: scale(20)
  },


  tab2: {
    marginTop: responsiveHeight(1),
  },

  homebgimg: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
    overflow: 'hidden',
  },


  homeimgtext: {
    color: colors.appColor2,
    fontFamily: fontFamily.RobotoBold,
    fontSize: responsiveFontSize(3.5),
  },

  hometext: {
    color: colors.appColor7,
    fontSize: responsiveFontSize(2.7),
    fontFamily: fontFamily.RobotoBold,
  },

  home1stinput: {
    flex: 0.05,
    alignItems: 'center',
    justifyContent: 'center',

  },

  home2ndinput: {
    flex: 0.05,
    alignItems: 'center',
    justifyContent: 'center',

  },

  homebtnmain: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  daysview: {
    flexDirection: 'row',
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  daysview1: {
    backgroundColor: colors.appColor2,
    height: responsiveHeight(12),
    width: responsiveWidth(25),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.8,
    borderRadius: scale(8),
    marginLeft: responsiveWidth(2),
    elevation: 5,
  },

  modalbgchange4: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.appColor40,
  },

  modallocationview: {
    backgroundColor: 'black',
    marginTop: responsiveHeight(-7),
    height: scale(80),
    width: scale(80),
    borderRadius: scale(50),
    alignItems: 'center',
    justifyContent: 'center'
  },

  locationtextview: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  locationinputview: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },

  locationbtnview: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalbgchange5: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.appColor40,
  },

  oilselectionview: {
    backgroundColor: colors.appColor22,
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
    borderBottomRightRadius: scale(20),
    borderBottomLeftRadius: scale(20),
    height: responsiveHeight(35),
    width: responsiveWidth(88),
    elevation: 10,
  },


  timetext: {
    marginLeft: responsiveWidth(5),
    color: colors.appColor9,
    fontFamily: fontFamily.RobotoBold,
    textAlign: 'left',
  },

  timeview: {
    flex: 0.05,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  hourview: {
    backgroundColor: colors.appColor10,
    height: responsiveHeight(12),
    width: responsiveWidth(25),
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: fontFamily.RobotoRegular,
    borderRadius: 10,
    elevation: 10,
  },


  digits: {
    fontSize: responsiveFontSize(5),
    color: colors.appColor9,
    padding: responsiveHeight(1.6),
    fontFamily: fontFamily.RobotoRegular,
  },

  colon: {
    fontSize: responsiveFontSize(8),
    color: colors.appColor9,
    fontFamily: fontFamily.RobotoBold,
    justifyContent: 'center',
    marginBottom: responsiveHeight(2),
  },

  colonview: {
    flex: 0.15,
    alignItems: 'center',

  },

  minutesview: {
    backgroundColor: colors.appColor1,
    height: responsiveHeight(11),
    width: responsiveWidth(25),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 10,
  },

  timeformat: {
    backgroundColor: colors.appColor2,
    height: responsiveHeight(11),
    width: responsiveWidth(13),
    alignItems: 'center',
    fontWeight: 'bold',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.appColor6,
    elevation: 10,
  },

  format: {
    color: colors.appColor9,
    padding: responsiveHeight(1.6),
    fontWeight: 'bold',
  },

  border: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },

  optionContainer: {

    borderRadius: 8,
    height: responsiveHeight(5.3),
    width: responsiveWidth(12.5),
  },

  CustomView: {
    backgroundColor: colors.appColor22,
    height: responsiveHeight(8),
    width: responsiveWidth(82),
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    elevation: 10,
  },

  CustomImgView: {
    marginBottom: responsiveHeight(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  CustomViewlabel1: {
    marginTop: responsiveHeight(5),
    marginLeft: responsiveWidth(4),
    fontWeight: 'bold',
    color: colors.appColor9,
  },
  CustomViewlabel2: {
    marginTop: responsiveHeight(1),
    marginLeft: responsiveWidth(4),
    fontWeight: 'bold',
    color: colors.appColor23
  },

  CustomViewlabel3: {
    marginTop: responsiveHeight(1),
    marginLeft: responsiveWidth(4),
    fontWeight: 'bold',
    color: colors.appColor23,
  },

  CustomViewImg: {
    marginRight: responsiveWidth(4),
    marginBottom: responsiveHeight(5),
    height: scale(30),
    width: scale(30),
  },


  locationmodalicon: {
    height: scale(40),
    width: scale(30),
  },

  CustomButtonView: {

    backgroundColor: colors.appColor3,
    height: responsiveHeight(6),
    width: responsiveWidth(60),
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: scale(30),
    elevation: 10,
  },

  vehicleview1: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  modalbgchange: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: colors.appColor40,
  },

  modalbtnview: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  modaltextview: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center'
  },

  modaltickview: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  vehicle1stinput: {

    backgroundColor: colors.appColor22,
    height: responsiveHeight(7),
    width: responsiveWidth(82),
    alignSelf: 'center',
    borderRadius: 12,
    elevation: 7
  },

  vehicleinputs: {
    backgroundColor: colors.appColor22,
    height: responsiveHeight(7),
    width: responsiveWidth(82),
    alignSelf: 'center',
    borderRadius: 12,
    marginTop: responsiveHeight(1.5),
    elevation: 7
  },


  checkbox: {
    marginRight: responsiveWidth(3),
    width: scale(20),
    height: scale(20),
    borderWidth: 1.5,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tick: {
    width: responsiveWidth(4),
    height: responsiveHeight(2),
  },

  modaltick: {

    height: scale(60),
    width: scale(60),
  },

  modalbgchange3: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: colors.appColor41,
  },

  modaltickview2: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
  },

  congratsview: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center'
  },

  modalbtnview2: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkboxtext: {
    fontFamily: fontFamily.RobotoMedium,
    marginRight: responsiveWidth(23)
  },

  vehiclecheckboxview: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  smalltext: {
    color: colors.appColor6,
    fontSize: responsiveFontSize(1.5),
    textAlign: 'center',
    fontFamily: fontFamily.RobotoRegular,
  },

  paymentview1: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  paymentview2: {
    justifyContent: 'center',
    backgroundColor: colors.appColor1,
    height: responsiveHeight(37),
    width: responsiveWidth(75),
    borderRadius: scale(20)
  },

  paymentview3: {
    alignItems: 'center',
    flex: 0.7,
    backgroundColor: colors.appColor2,
    justifyContent: 'center',
  },

  paymentview4: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row'
  },

  paymentview5: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row'
  },

  modalbgchange2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.appColor40,
  },

  modalcard: {
    backgroundColor: 'black',
    marginTop: responsiveHeight(-6),
    height: scale(80),
    width: scale(80),
    borderRadius: scale(50),
    alignItems: 'center',
    justifyContent: 'center'
  },

  paymentcardimg: {
    height: scale(28),
    width: scale(42),
  },

  modalcardview: {
    backgroundColor: colors.appColor2,
    elevation: 10,
    justifyContent: 'center',
    height: responsiveHeight(28),
    width: responsiveWidth(80),
    borderRadius: 10,
  },

  modalcardtext: {
    fontSize: responsiveFontSize(1.5),
    textAlign: 'left',
    marginLeft: responsiveWidth(4),
    fontFamily: fontFamily.Montserrat_Medium,
  },

  modalcardtime: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row'
  },

  modalcardmonth: {
    backgroundColor: colors.appColor27,
    height: responsiveHeight(5),
    width: responsiveWidth(20),
    borderRadius: scale(5),
    fontFamily: fontFamily.Montserrat_Regular,
  },

  modalcardyear: {
    backgroundColor: colors.appColor27,
    height: responsiveHeight(5),
    width: responsiveWidth(20),
    borderRadius: scale(5),
    fontFamily: fontFamily.Montserrat_Regular,
  },

  modalcardcode: {
    backgroundColor: colors.appColor27,
    height: responsiveHeight(5),
    width: responsiveWidth(20),
    borderRadius: scale(5),
    fontFamily: fontFamily.Montserrat_Regular,
  },

  modalcardbtnview: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bigtext: {
    color: colors.appColor6,
    fontFamily: fontFamily.RobotoBold,
    fontSize: responsiveFontSize(10),
  },

  paymenttextview: {
    textAlign: 'center',
    color: colors.appColor1,
    fontFamily: fontFamily.RobotoMedium,
  },


  bigdollar: {
    color: colors.appColor6,
    fontFamily: fontFamily.RobotoBold,
    fontSize: responsiveFontSize(5),
    marginBottom: responsiveHeight(5),
  },

  stripe: {
    backgroundColor: colors.appColor2,
    height: responsiveHeight(11),
    width: responsiveWidth(23),
    borderRadius: 15,
    alignSelf: 'center',
    justifyContent: 'center',

  },

  androidpayimg: {
    alignSelf: 'center',
    height: scale(30),
    width: scale(60),
  },

  affirmimg: {
    alignSelf: 'center',
    height: scale(22),
    width: scale(54),
  },

  modalview: {

    backgroundColor: colors.appColor5,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: responsiveHeight(45),
  },

  modaltext: {
    color: 'white',
    fontFamily: fontFamily.RobotoBold,
    fontSize: responsiveFontSize(3.6),
    textAlign: 'center',
  },

  TYview1: {
    flex: 0.5,
    backgroundColor: '#FFFFC8',
    alignItems: 'center',
    justifyContent: 'center'
  },

  TYview2: {
    flex: 0.5,
    width: responsiveWidth(50),
    backgroundColor: colors.appColor2,
    alignItems: 'center',
    borderRadius: scale(100),
    elevation: 10,
  },

  TYtext: {
    fontSize: responsiveFontSize(4),
    color: colors.appColor2,
    fontFamily: fontFamily.RobotoBold,
  },

  TYtext2: {
    fontSize: responsiveFontSize(2.9),
    color: colors.appColor2,
    textAlign: 'center',
    fontFamily: fontFamily.RobotoRegular,
  },

  TYimageview: {
    flex: 0.25,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  fbimg: {
    marginRight: responsiveWidth(2),
    height: scale(55),
    width: scale(55),
  },

  instaimg: {
    height: scale(50),
    width: scale(50),
  },

  thumbsupimg: {
    height: scale(150),
    width: scale(150)
  },

  TYtextview1: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  TYtextview2: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },

  TYbtnview: {
    flex: 0.25,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },


  TOSview1: {
    backgroundColor: '#FFFFFF',
    flex: 0.11,
    justifyContent: 'center',
  },


  locationmodalview: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    height: responsiveHeight(30),
    width: responsiveWidth(90),
    alignItems: 'center',
    justifyContent: 'center'


  },

  locationmodaltext: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.4),
  },

  paymentmodalview: {

    backgroundColor: colors.appColor2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    height: responsiveHeight(55),
    width: responsiveWidth(90),
    alignItems: 'center',
    justifyContent: 'center',
  },

  paymentmodaltext: {
    textAlign: 'center',
    color: 'black',
    fontSize: responsiveFontSize(2),
    fontFamily: fontFamily.Poppins_Medium
  },

  accountview1: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },

  Accountmodalview: {

    backgroundColor: colors.appColor2,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: responsiveHeight(50),
    alignItems: 'center',
    justifyContent: 'center'

  },

  accounttext: {
    fontSize: responsiveFontSize(3),
    textAlign: 'center',
  },

  Accountmodaltext: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(3.4),
    textAlign: 'center'
  },

  modalbgchange6: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: colors.appColor42,
  },

  modalinsideview: {
    flex: 0.75,
    borderRadius: scale(20),
    borderWidth: 1,
    width: responsiveWidth(90),
  },

  CustomInputView: {

    backgroundColor: colors.appColor27,
    height: responsiveHeight(5),
    width: responsiveWidth(75),
    alignSelf: 'center',
    borderRadius: 10,
    fontFamily: fontFamily.Montserrat_Regular,
  },

  modaltext2: {
    color: colors.appColor2,
    fontFamily: fontFamily.RobotoMedium,
    fontSize: responsiveFontSize(2.6),
    textAlign: 'center',
  },

  timeinputs: {
    fontSize: responsiveFontSize(5),
    fontFamily: fontFamily.RobotoRegular,
  },

  oilmodalview: {
    backgroundColor: colors.appColor22,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    height: responsiveHeight(45),
    width: responsiveWidth(90),
    alignItems: 'center',

  },

  CustomHomeView: {
    backgroundColor: colors.appColor22,
    height: responsiveHeight(9),
    width: responsiveWidth(88),
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    elevation: 10,
  },

})