function rand_string() {
    let result = '';
    const characters = '0123456789qwertyuiopsdsfjdfhdskfzxcxzvncxbxbnxc';
    const charactersLength = characters.length;
    for (var i = 0; i < 12; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

function sha256(plain) {
    const encoder = new TextEncoder();
    const data = encoder.encode(plain);
    return crypto.subtle.digest('SHA-256', data);
}

function base64UrlEncode(a) {
    console.log('PRIJE SKIDANJA: ', btoa(String.fromCharCode.apply(null, new Uint8Array(a))));
    return btoa(String.fromCharCode.apply(null, new Uint8Array(a))).replace(/\+/g, '-').replace(/\//g, '_').replace(
        /=+$/, ''
    );
}

function parseURL(url) {
    if (url == undefined) return undefined;
    let code = url.split('=')[1].split('&')[0];
    return code;
}

export {sha256, base64UrlEncode, rand_string, parseURL}
