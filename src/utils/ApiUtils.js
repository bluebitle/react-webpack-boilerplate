import axios from 'axios';
import _ from 'lodash';


const getAxios = ( headers, timeout, withCredentials, respnseType) =>{
    const HEADERS = _.isUndefined( headers ) ? {} : headers;
    const TIMEOUT = _.isUndefined( timeout ) ? 500000 : timeout;
    const WITH_CREDENTIALS =  _.isUndefined( withCredentials ) ? true : withCredentials;
    const RESPONSE_TYPE =  _.isUndefined( respnseType ) ? 'json' : respnseType;


    const Axios = axios.create( {
        headers: HEADERS,
        timeout: TIMEOUT,
        withCredentials: WITH_CREDENTIALS,
        respnseType: RESPONSE_TYPE,
    })

    return Axios;
}

export default {
    getAxios
}