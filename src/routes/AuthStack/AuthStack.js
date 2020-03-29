import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Login, Signup } from '../../screens';

export const authStack = createStackNavigator({
Login,
Signup
}, {
    defaultNavigationOptions: {
        header: null,
        gesturesEnabled: true,
    }
})

export default AuthStack = createAppContainer(authStack)