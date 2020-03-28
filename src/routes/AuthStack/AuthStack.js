import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Login, Signup, VerifyCode, ForgotPassword, Intro } from '../../screens';

export const authStack = createStackNavigator({
    Intro,
    Login,
    Signup,
    VerifyCode,
    ForgotPassword
}, {
    defaultNavigationOptions: {
        header: null,
        gesturesEnabled: true,
    }
})

export default AuthStack = createAppContainer(authStack)