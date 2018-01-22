import { Comlink } from 'https://cdn.jsdelivr.net/npm/comlinkjs@2.3/comlink.global.min.js';

const worker = new Worker('./../src/fetch.worker.js');

const proxy = Comlink.proxy(worker);

async function init() {
    const API = await new proxy.Fetch();

    API.setBaseUrl("https://jsonplaceholder.typicode.com/");
    API.setDefaultHeaders({'Content-Type': 'application/json'});
    API.setDefaultBody({lang: 'en'});

    API.get('users/1');
    API.get('users/2');
    API.post('posts/3');
    API.put('posts/4');
    API.delete('posts/5');
};


init();
