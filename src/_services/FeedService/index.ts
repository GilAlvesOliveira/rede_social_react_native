import * as RedeSocialApiService from '../RedeSocialApiService';

const getPosts = async (id?: string) => {
    let url = '/feed'
    if(id) {
        url = `/feed?id${id}`
    }
    return await RedeSocialApiService.get(url)
}

const alternarCurtida = async (postId: string) => {
    return await RedeSocialApiService.put(`/like?id=${postId}`)
}

export {getPosts, alternarCurtida}