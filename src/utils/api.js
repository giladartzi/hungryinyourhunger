const MOCK = {
    '/businessEntities': [{
        id: 0,
        name: 'Miki',
        address: '23 Haroe st. Ramat Gan'
    }, {
        id: 1,
        name: 'Gilad',
        address: '27 Bloch st. Tel Aviv'
    }]
};

export function request(path) {
    if (MOCK[path]) {
        return new Promise(resolve => resolve(MOCK[path]));
    }

    return fetch(path).then(response => response.json());
}