import {Comlink} from './../node_modules/comlinkjs/comlink.es6.js';

const fetchWorker = new Worker('./../src/fetch.worker.js');

const api = Comlink.proxy(fetchWorker);

async function init() {
    const backend = await new api.Backend();

    backend.setBaseUrl("https://jsonplaceholder.typicode.com/");
    backend.setDefaultHeaders({'Content-Type': 'application/json'});
    backend.setDefaultBody({lang: 'en'});

    backend.get('users/1');
    backend.get('users/2');
    backend.post('posts/3');
    backend.put('posts/4');
    backend.delete('posts/5');
};


init();
