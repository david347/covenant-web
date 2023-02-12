const url = 'http://192.168.68.150:3001';

const getHeader = () => {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Credentials", "true" );
    return headers;
};

const reqInfo = {
    method: 'GET',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json',
        'Accept':'application/json',
        'Access-Control-Allow-Origin': '*'
    }
};


const getQuestion = (pollName, id) => {
    return fetch(`${url}/${pollName}/question/${id}`, reqInfo)
    .then(res => res.json())
    .then(data => data);
};

const getQuorum = (pollName) => {
    return fetch(`${url}/${pollName}/quorum`, reqInfo)
    .then( response => response.json())
    .then( data => data);
};

export { getQuestion, getQuorum };