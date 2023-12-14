import * as RedeSocialApiService from '../RedeSocialApiService';

const getPosts = async (id?: string) => {
    let url = '/feed'
    if(id) {
        url = `/feed?id${id}`
    }
    return await RedeSocialApiService.get(url)
}

export {getPosts}