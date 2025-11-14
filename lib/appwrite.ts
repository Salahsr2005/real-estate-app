import {Account, Avatars, Client, OAuthProvider} from 'react-native-appwrite'
import * as linking from 'expo-linking'
import { openAuthSessionAsync } from "expo-web-browser";


export const config = {
    platform : 'com.parabex.diwana',
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectid: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID
}
export const client = new Client();
client
    .setEndpoint(config.endpoint!)
    .setProject(config.projectid!)
    .setPlatform(config.platform!)

export const avatar = new Avatars(client)
export const account = new Account(client)

export async function login(){
    try {
        const redirectUri = linking.createURL('/')
        const resopnse = await account.createOAuth2Token(OAuthProvider.Google,redirectUri)
        if(!resopnse) throw new Error ('Failed To Login')
        const browserResult = await openAuthSessionAsync(resopnse.toString(),redirectUri);
        if(browserResult.type !== 'success') throw new Error('Failed To Login');
        const url = new URL(browserResult.url);
        const secret = url.searchParams.get('secret')?.toString();
        const userId = url.searchParams.get('userId')?.toString();
        if(!secret || !userId) throw new Error('Failed To Login');
        const session = await account.createSession(userId,secret);
        if(!session) throw new Error('Failed to create a session');
        return true        
    } catch (error) {
        console.error(error);
        return false;    
    }


}
export async function logout () {
    try {
        await account.deleteSession('current');
        return true
    } catch (error) {
        return false
    }
}
export async function getUser() {
    try {
        const resopnse = await account.get();
        if(resopnse.$id){
            const userAvatar = avatar.getInitials(Response.name)
            return{
                ...resopnse,
                avatar:userAvatar.toString(),
            };

        }
        return null
    } catch (error) {
        return null
    }
}