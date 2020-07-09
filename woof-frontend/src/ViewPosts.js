import React, {useState, useEffect} from 'react'
import {getPosts} from './utils'
import CreatePosts from './CreatePost'

const ViewPosts = ({userToken}) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts(userToken)
        .then(setPosts)
    }, [])

    return (
        <div>
            {posts.map(post => <li>{post.text}</li>)} 
            <CreatePosts onCreate={newPost => setPosts([...posts, newPost])} userToken={userToken}/>
        </div>
    )
}

export default ViewPosts