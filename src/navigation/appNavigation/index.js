import { Image } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { EditProfile, Vehicle } from '../../screens/authflow';
import Account from '../../screens/appflow/Account';
import PrivacyPolicy from '../../screens/appflow/PrivacyPolicy';
import TermsOfService from '../../screens/appflow/TermsOfService';
import Home from '../../screens/appflow/Home';
import Payment from '../../screens/appflow/Payment';
import Thankyou from '../../screens/appflow/Thankyou';
import { scale } from 'react-native-size-matters';
import { AppStyles } from '../../services/utilities/appstyles';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Appnavigation = () => {
  return (

    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === 'HomeStack') {
            iconName = focused ? require('../../assets/images/home2.png') : require('../../assets/images/home.png');
          } else if (route.name === 'AccountStack') {
            iconName = focused ? require('../../assets/images/profile2.png') : require('../../assets/images/profile.png');
          }

          return <Image source={iconName} style={AppStyles.tab1} />;
        },
        tabBarLabelStyle: { color: 'black' },
      })}

    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          headerShown: false
        }}
      />
      <Tab.Screen
        name="AccountStack"
        component={AccountStack}
        options={{
          tabBarLabel: 'Account',
          headerShown: false
        }}
      />

    </Tab.Navigator>

  )

}

const HomeStack = () => {
  return (

    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
      <Stack.Screen name='Vehicle' component={Vehicle} options={{ headerShown: false }} />
      <Stack.Screen name='Payment' component={Payment} options={{ headerShown: false }} />

    </Stack.Navigator>
  )
}

const AccountStack = () => {
  return (

    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Account'>
      <Stack.Screen name='Account' component={Account} options={{ headerShown: false }} />
      <Stack.Screen name='PrivacyPolicy' component={PrivacyPolicy} options={{ headerShown: false }} />
      <Stack.Screen name='TermsOfService' component={TermsOfService} options={{ headerShown: false }} />
      <Stack.Screen name='Thankyou' component={Thankyou} options={{ headerShown: false }} />
      <Stack.Screen name='EditProfile' component={EditProfile} options={{ headerShown: false }} />

    </Stack.Navigator>
  )
}

export default Appnavigation;


