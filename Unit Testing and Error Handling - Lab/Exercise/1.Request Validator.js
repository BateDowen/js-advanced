function requestValidator(object) {
    if (object.method) {
        if (object.method != 'GET' && object.method != 'POST' && object.method != 'DELETE' && object.method != 'CONNECT') {
            throw Error `Invalid request header: Invalid Method.`
        }
    }else {
        throw Error `Invalid request header: Invalid Method.`

    }
    if (object.uri) {
        if (object.uri != '' && object.uri != '*' && !object.uri.match(/([A-Za-z0-9]*\.*\s?)*/g)) {
        throw Error `Invalid request header: Invalid URI.`
            
        }
        
    } else {
        throw Error `Invalid request header: Invalid URI.`

    }
}
requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog&',
    version: 'HTTP/1.1',
    message: ''
  });
//   requestValidator({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
//   });