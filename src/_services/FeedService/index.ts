import * as RedeSocialApiService from '../RedeSocialApiService';

const getPosts = async (id?: string) => {
    let url = '/feed'
    if(id) {
        url = `/feed?id=${id}`
    }
    return await RedeSocialApiService.get(url)
}

const alternarCurtida = async (postId: string) => {
    return await RedeSocialApiService.put(`/like?id=${postId}`)
}

const enviarComentario =async (postId: string, menssagem: string) => {
    return await RedeSocialApiService.put(`/comentario?id=${postId}`, {"comentario": menssagem})
}

const enviarPublicacao = async (body: FormData) => {
    await RedeSocialApiService.post('/publicacao', body, {"content-Type": "multipart/form-data"})
}


const excluirPost = async (postId: string) => {
    const url = `/publicacao?postId=${postId}`;
    console.log("URL da requisição DELETE:", url);
    return await RedeSocialApiService.deletar(url);
}

export {getPosts, alternarCurtida, enviarComentario, enviarPublicacao, excluirPost};
