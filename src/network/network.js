import { doPost, doGet, doPostProfilePictureUpload, doPostCommonApi, doGetCommonApi, doPut, doPostSignup } from './config';

export const doLogin = (data) => {
    console.warn('Login Data ', data);
    return doPost('login', data)
}

export const doSignup = (data) => {
    console.warn('Signup Data ', data);
    return doPostSignup('signup', data)
}

export const doVerification = (data) => {
    return doPost('verify', data)
}

export const resendVerification = (data) => {
    return doPostCommonApi('verify/resend', data)
}

export const doForgotPassword = (data) => {
    console.warn('Forgot Password ', data);
    return doPost('password/forget', data)
}

// change password
// export const changePassword = (data) => {
//     return doPost('forget/ChangePassword', data)
// }

// logout api
export const doLogout = ( token ) => {
    console.warn('Api Token ', token)
    return doGet('logout', token)
}


// image upload
export const imageUpload = (data) => {
    return doPostProfilePictureUpload('upload/file?type=driver', data)
}

export const updateProfile= (data,token) => {
    console.warn('in network',data)
    return doPut('update/profile', data,token)
}

export const getCarTypes = () => {
    return doGetCommonApi('car-types')
}

