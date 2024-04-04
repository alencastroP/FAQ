let topics = [];
const endpointAPI = './requisicao.json';
getSearchTopics()

async function getSearchTopics() {
    const res = await fetch(endpointAPI);
    topics = await res.json();
    insertTopics(topics);
}