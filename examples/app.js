import { Comlink } from 'https://cdn.jsdelivr.net/npm/comlinkjs@2.3/comlink.global.min.js';

const worker = new Worker('./../src/fetch.worker.js');

const proxy = Comlink.proxy(worker);

async function init() {
    const Fetch = await new proxy.Fetch();

    Fetch.setBaseUrl("https://jsonplaceholder.typicode.com/");
    Fetch.setDefaultHeaders({'Content-Type': 'application/json'});
    Fetch.setDefaultBody({lang: 'en'});

    Fetch.get('users/1');
    Fetch.get('users/2');
    Fetch.post('posts/3');
    Fetch.put('posts/4');
    Fetch.delete('posts/5');
};


init();
