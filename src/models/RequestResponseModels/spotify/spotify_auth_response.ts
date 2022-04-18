import {BaseResponse} from "../../BaseResponse";

export interface SpotifyAuthResponse extends BaseResponse {
    access_token: string,
    playlists: any
}
