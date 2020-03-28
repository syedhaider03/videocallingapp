import Environment from './baseUrl';
import { Platform } from 'react-native';
import axios from 'axios';
import { IS_IOS } from '../utils/contants';

const getHeaders = async (token) => {
    if (token) {
        return {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Client-id': IS_IOS ? Environment.clientIdIOS : Environment.clientIdAndroid,
        }
    }
    else {
        console.warn('App Headers ', Environment.IosBasicToken)
        return {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': IS_IOS ? Environment.IosBasicToken : Environment.AndroidBasicToken,
            'Client-id': IS_IOS ? Environment.clientIdIOS : Environment.clientIdAndroid,
        }
    }
}
const getHeadersSignup = async (token) => {
    // console.warn('App Headers ', Environment.IosBasicToken)
    return {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': IS_IOS ? Environment.IosBasicToken : Environment.AndroidBasicToken,
        'Client-id': IS_IOS ? Environment.clientIdIOS : Environment.clientIdAndroid,
    }
}


const getProfilePictureUploadHeaders = () => {
    if (token) {
        return {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json',
        }
    }
    else {
        return {
            'Authorization': (IS_IOS === 'ios') ? Environment.IosBasicToken : Environment.AndroidBasicToken,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Client-id': (IS_IOS === 'ios') ? Environment.clientIdIOS : Environment.clientIdAndroid,

        }
    }

}

var profilePictureOptions = {
    method: null,
    data: null,
    headers: null
}

var authOptions = {
    method: null,
    data: null,
    headers: getHeaders(),
    // timeout: 500
};

export const doPost = async (url, data, token) => {
    authOptions.method = 'POST';
    authOptions.data = data;
    authOptions.headers = await getHeaders(token)
    console.warn({ authOptions });
    return axios(Environment.API_BASE_URL + url, authOptions)
}
export const doPostSignup = async (url, data, token) => {
    authOptions.method = 'POST';
    authOptions.data = data;
    authOptions.headers = await getHeaders()
    console.warn({ authOptions });
    return axios(Environment.API_BASE_URL + url, authOptions)
}
export const doPostCommonApi = async (url, data, token) => {
    authOptions.method = 'POST';
    authOptions.data = data;
    authOptions.headers = await getHeaders(token)
    console.warn('URL IS ', url);
    return axios('' + url, authOptions)
}

export const doGetCommonApi = async (url, token) => {
    authOptions.headers = await getHeaders(token)
    authOptions.method = 'GET'
    authOptions.data = null
    console.warn('token is in doget', token)
    return axios('http://52.88.43.44/dineeasybackend/public/index.php/api' + url, authOptions)
}

export const doPut = async (url, data, token) => {
    authOptions.method = 'PUT'
    authOptions.data = data;
    authOptions.headers = await getHeaders(token)
    console.warn({ authOptions });
    return axios(Environment.API_BASE_URL + url, authOptions)
}

export const doPostProfilePictureUpload = (url, data, token) => {
    profilePictureOptions.method = 'POST'
    profilePictureOptions.data = data
    profilePictureOptions.headers = getProfilePictureUploadHeaders(token)
    return axios('' + url, profilePictureOptions)
}

export const doGet = async (url, token) => {
    authOptions.headers = await getHeaders(token)
    authOptions.method = 'GET'
    authOptions.data = null
    return axios(Environment.API_BASE_URL + url, authOptions)
}

export const doDelete = async (url, token) => {
    authOptions.method = 'DELETE'
    authOptions.data = null
    authOptions.headers = await getHeaders(token)
    return axios(Environment.API_BASE_URL + url, authOptions)
}

