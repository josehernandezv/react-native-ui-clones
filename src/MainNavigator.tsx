import {
    createNativeStackNavigator,
    NativeStackScreenProps,
} from '@react-navigation/native-stack';

import Facebook from './Facebook';
import HomeScreen from './HomeScreen';

export type StackParamList = {
    Home: undefined;
    Facebook: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export type HomeProps = NativeStackScreenProps<StackParamList, 'Home'>;

export default function MainNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Facebook"
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: true,
                    headerTitle: 'RN UI Clones',
                }}
            />
            <Stack.Screen component={Facebook} name="Facebook" />
        </Stack.Navigator>
    );
}
