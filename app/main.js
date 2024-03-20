let topicos = []
const endpointDaAPI = './requisicao.json'
getBuscarTopicosDaAPI()

async function getBuscarTopicosDaAPI() {
    const res = await fetch(endpointDaAPI)
    topicos = await res.json()
    inserirTopicos(topicos)
}