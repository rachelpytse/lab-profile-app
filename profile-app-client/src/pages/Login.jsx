import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { AuthContext } from "../context/auth.context.js"

const API_URL = "http://localhost:5005"

function Login (props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState(undefined)

    const navigate = useNavigate()

    const { storeToken, authenticateUser, user } = useContext(AuthContext)

    const handleLoginSubmit = (e) => {
        e.preventDefault()

        const requestBody = {username, password}

        axios
        .post(`${API_URL}/auth/login`, requestBody)
        .then((response) => {
            console.log('JWT token', response.data.authToken)

            storeToken(response.data.authToken)

            authenticateUser()
            navigate(`/profile`)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    return(
        <div>
            <form onSubmit={handleLoginSubmit}>
                <label htmlFor="">Username
                    <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </label>

                <label htmlFor="">Password
                    <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>

                <button type="submit">Log in</button>
            </form>
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    )
}

export default Login