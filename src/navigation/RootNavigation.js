import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import Appnavigation from './appNavigation'
import Authnavigation from './authNavigation'


const Stack = createNativeStackNavigator();
const RootNavigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen name='auth' component={Authnavigation} options={{ headerShown: false }} />
                <Stack.Screen name='app' component={Appnavigation} options={{ headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer>

    )
};

export default RootNavigation