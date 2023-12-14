import AsyncStorage from "@react-native-async-storage/async-storage"
import axios, { Method } from "axios"

const URL = 'https://devagram-react-next-kappa.vercel.app/api'

const instance = axios.create({
    baseURL: URL,
    timeout: 30000
})

export const api = async (endpoint: string, metodo: Method, body? : any, newHeaders?: any) => {
    const token = await AsyncStorage.getItem('token')

    let headers: any = newHeaders? newHeaders: {'Content-type' : 'application/json'}

    if(token) {
        headers['Authorization'] = 'Bearer ' + token
    }

    console.log(`executando: ${URL}${endpoint}, metodo ${metodo}, body ${JSON.stringify(body)}, headers ${JSON.stringify(headers)}`)

    return instance.request({
        url: endpoint,
        method: metodo,
        data: body? body : '',
        headers: headers
    })
}

const post = async (url: string, data?: any, headers?: any) => {
    return api(url, "POST", data, headers)
}
const put = async (url: string, data?: any, headers?: any) => {
    return api(url, "PUT", data, headers)
}
const get = async (url: string, headers?: any) => {
    return api(url, "GET", headers)
}

export {post, get, put}