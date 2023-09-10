
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from '../../screens/authflow/Splash';
import CreateAccount from '../../screens/authflow/CreateAccount';
import Profile from '../../screens/authflow/Profile';
import HandelUser from '../../screens/authflow/HandelUser';

const Stack = createNativeStackNavigator();
const Authnavigation = () => {

  return (

    <Stack.Navigator>
      <Stack.Screen name='HandelUser' component={HandelUser} options={{ headerShown: false }} />
      <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name='CreateAccount' component={CreateAccount} options={{ headerShown: false }} />
      <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
     
     
    </Stack.Navigator>

  )
}


export default Authnavigation;