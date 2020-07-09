import axios from 'axios'

const backendURL = `http://localhost:3000`

export async function signup(email, password){
    const res = await axios.post(`${backendURL}/users`, {user: {email, password}})
    return res.data
}

export async function login(email, password){
    const res = await axios.post(`${backendURL}/user_token`, {auth: {email, password}})
    return res.data.jwt
}

export async function getPosts(userToken){
    const res = await axios.get(`${backendURL}/posts`, {
        headers: {
            Authorization: `Bearer ${userToken}`
        }
    })
    return res.data
}

export async function createPost(text, userToken){
    const res = await axios.post(`${backendURL}/posts`, {

        post: {text}
    },         {headers: {
        Authorization: `Bearer ${userToken}`
    }})
    return res.data
}