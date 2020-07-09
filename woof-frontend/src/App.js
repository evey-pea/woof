import React, {useState} from 'react'
import Auth from './Auth'
import ViewPosts from './ViewPosts'

const App = () => {

    const [user, setUser] = useState(null)

    return (
        <div> 
            {user ? (
                <div>
                    logged in as {user.email}
                    <button onClick={() => setUser(null)}>logout</button>
                    <ViewPosts userToken={user.userToken}/>
                </div>
            ): (
                <Auth onAuth={user => setUser(user)} />
            )}
        </div>
    )
}

export default App
