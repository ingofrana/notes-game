import axios from 'axios'
import join from 'url-join'

export const Request = async<T = any> (url: string, data?: any) => {
    return await axios.post<T>(join(process.env.REACT_APP_SERVER_URL, url), data, {
        withCredentials: true
    })
}

export default Request