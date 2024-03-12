import {ITokens} from "../intterfaces";

const accessTokenKey  = 'access'
const refreshTokenKey = 'refresh'

const authService = {
    setTokens({access, refresh}:ITokens):void{
        localStorage.setItem(accessTokenKey, access)
        localStorage.setItem(refreshTokenKey, refresh)
    },
    getAccessToken():string{
        return localStorage.getItem(accessTokenKey)
    },

}