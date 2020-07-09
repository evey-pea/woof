import React, {useState} from 'react'
import {signup, login} from './utils'

const Auth = ({onAuth}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isNewUser, setIsNewUser] = useState(true)


    async function onButtonClick(){
        if(isNewUser) await signup(email, password)
        const userToken = await login(email, password)
        onAuth({email, userToken})
    }

    return (
        <div>
            <input 
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input 
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
            />
            <button onClick={onButtonClick}>{isNewUser ? "Signup" : "Login"}</button>
            <input
                type="checkbox"
                value={isNewUser}
                onChange={() => setIsNewUser(!isNewUser)}
            />
            I have an account
        </div>
    )
}

export default Auth