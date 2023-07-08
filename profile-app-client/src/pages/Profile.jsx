import { useContext } from "react"
import { AuthContext } from "../context/auth.context"


function Profile () {
    const { user, logOutUser } = useContext(AuthContext)
    

    return(
        <div>
            <h1>Profile</h1>
            <div>
                Username
                <p>{user.username}</p>
            </div>

            <div>
                Campus
                <p>{user.campus}</p>
            </div>

            <div>
                Web Development
                <p>{user.course}</p>
            </div>

            <button onClick={logOutUser}>Logout</button>
        </div>
    )
}

export default Profile