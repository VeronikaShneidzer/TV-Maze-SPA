import axios from 'axios';

import { HTTP_METHODS } from '../constants/APIConstants';

const call = (options) =>
    axios(options)
        .then(
            (response) => response,
            (error) => Promise.reject(error),
        )
        .catch((error) => ({ error }));

const get = (url, responseType = 'json') => {
    const options = {
        method: HTTP_METHODS.GET,
        url,
        responseType,
    };

    return call(options).then((response) => response.data);
};

// eslint-disable-next-line import/prefer-default-export
export { get };
