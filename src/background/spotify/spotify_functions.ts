import {SpotifyAuthResponse} from "../../models/RequestResponseModels/spotify/spotify_auth_response";
import {base64UrlEncode, parseURL, rand_string, sha256} from "./crypto_functions";

const CLIENT_ID = '4a65d485ff78488bbde6376e8305893a';
const RESPONSE_TYPE = encodeURIComponent('code');
const CLIENT_SECRET = encodeURIComponent('8de1ba2021694dee9a92a1612654d2cb');
const REDIRECT_URI = encodeURI(chrome.identity.getRedirectURL() + 'spotify');
const CODE_CHANLAGE_METHOD = encodeURIComponent('S256');
const SCOPE = encodeURIComponent('user-library-read user-modify-playback-state user-read-playback-state streaming user-read-email user-read-private playlist-read-collaborative user-read-currently-playing user-library-modify user-library-read');
const SHOW_DIALOG = encodeURIComponent('true');
let CODE_VERIFIER = '',
    STATE = '';


async function authSpotify(sendResponse) {
    let url = 'https://open.spotify.com/get_access_token';
    let res = await fetch(url, {
        method: 'GET',
    })
    let msg = await res.json();
    if (msg.isAnonymous) {
        sendResponse({
            message: 'Failed',
            status: 1,
        } as SpotifyAuthResponse);
        return;
    }
    const lists = await getPlaylists(msg.accessToken);
    sendResponse({
        message: 'Success',
        status: 0,
        access_token: msg.accessToken,
        playlists: lists
    } as SpotifyAuthResponse);
    chrome.storage.sync.set({
        spotify_access: msg.access_token,
    }, () => {
    });

    // chrome.storage.sync.get(['spotify_access', 'spotify_refresh', 'spotify_verified', 'spotify_expires_in'], async items => {
    //     if (items.spotify_refresh) {
    //         if (items.spotify_access) {
    //             const lists = await getPlaylists(items.spotify_access);
    //             sendResponse({
    //                 message: 'Success',
    //                 status: 0,
    //                 access_token: items.spotify_access,
    //                 playlists: lists
    //             } as SpotifyAuthResponse);
    //         } else {
    //             refreshToken(sendResponse)
    //         }
    //     } else {
    //         get_auth_code_endpoint().then(async res => {
    //                 chrome.identity.launchWebAuthFlow({
    //                     url: res,
    //                     interactive: true
    //                 }, async function (redirect_url) {
    //                     let code = parseURL(redirect_url);
    //                     await getTokens(code, sendResponse);
    //                 });
    //             }
    //         ).catch(
    //             err => sendResponse({message: 'failed', status: 1})
    //         )
    //     }
    // });
}


async function getTokens(code, sendResponse) {
    let url = 'https://accounts.spotify.com/api/token';
    let redirectURI = chrome.identity.getRedirectURL() + "spotify";
    let authURL = url + '?grant_type=authorization_code' + '&code=' + code + '&redirect_uri=' + encodeURI(redirectURI) + '&code_verifier=' + encodeURIComponent(CODE_VERIFIER);
    let res = await fetch(authURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET)
        }
    });
    let msg = await res.json();
    const lists = await getPlaylists(msg.access_token);
    sendResponse({
        message: 'Success',
        status: 0,
        access_token: msg.access_token,
        playlists: lists
    } as SpotifyAuthResponse);
    chrome.storage.sync.set({
        spotify_access: msg.access_token,
        spotify_refresh: msg.refresh_token,
        spotify_verified: CODE_VERIFIER,
        spotify_expires_in: msg.expires_in
    }, () => {
    });

}

async function getPlaylists(token) {
    let url = 'https://api.spotify.com/v1/me/playlists?limit=50';
    let res = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + token
        }
    });
    let msg = await res.json();
    return msg.items;
}


//CONTINUE

async function refreshToken(sendResponse) {
    chrome.storage.sync.get(['spotify_refresh'], async (val) => {
        let url = 'https://accounts.spotify.com/api/token';
        let authURL = url + '?grant_type=refresh_token' + '&refresh_token=' + val.spotify_refresh;
        let res = await fetch(authURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET)
            }
        });
        let msg = await res.json();
        if (msg.error) {
            chrome.storage.sync.remove(['spotify_access', 'spotify_refresh']);
            sendResponse({
                message: 'Failed',
                status: 1
            } as SpotifyAuthResponse);
        } else {
            const lists = await getPlaylists(msg.access_token);
            sendResponse({
                message: 'Success',
                status: 0,
                access_token: msg.access_token,
                playlists: lists
            } as SpotifyAuthResponse);
            chrome.storage.sync.set({
                spotify_access: msg.access_token,
                spotify_refresh: msg.refresh_token,
                spotify_verified: CODE_VERIFIER,
                spotify_expires_in: msg.expires_in
            }, () => {
            });
        }
    });
}

function get_auth_code_endpoint() {
    return new Promise<string>(async (resolve, reject) => {
        CODE_VERIFIER = rand_string().repeat(5);
        const otisak = await sha256(CODE_VERIFIER);
        const code_challenge = base64UrlEncode(otisak);
        STATE = encodeURIComponent('meet' + rand_string());
        const oauth_endpoint = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=${RESPONSE_TYPE}&code_challenge_method=${CODE_CHANLAGE_METHOD}&code_challenge=${encodeURIComponent(code_challenge)}&state=${STATE}&show_dialogs=${SHOW_DIALOG}`;
        resolve(oauth_endpoint);
    });
}

export {getTokens, getPlaylists, refreshToken, authSpotify, get_auth_code_endpoint}
