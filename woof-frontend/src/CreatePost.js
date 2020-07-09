import React, {useState, useEffect} from 'react'
import {createPost} from './utils'

const CreatePosts = ({userToken, onCreate}) => {

    const [text, setText] = useState([])

    async function handleClick(){
        const post = await createPost(text, userToken)
        onCreate(post)
    }

    return (
        <div>
        <input
            value={text}
            onChange={e => setText(e.target.value)}
        />
        <button onClick={handleClick}>Create Post</button>
        </div>
    )
}

export default CreatePosts