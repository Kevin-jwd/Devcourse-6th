function main() {
    console.log('main');
}

function login() {
    console.log('login');
}

let handle = {};            // key:value
handle['/'] = main;
handle['/login'] = login;

handle['/favicon.ico'] = function(){};

exports.handle = handle;