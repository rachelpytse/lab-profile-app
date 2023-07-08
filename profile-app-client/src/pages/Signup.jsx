import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const API_URL = "http://localhost:5005"

function Signup (props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [campus, setCampus] = useState("")
    const [course, setCourse] = useState("")
    // const [image, setImage] = useState("")

    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()

        
        const requestBody = { username, password, campus, course}
        axios
        .post(`${API_URL}/auth/signup`, requestBody)
        .then((response) => {
            setUsername("")
            setPassword("")
            setCampus("")
            setCourse("")
            // setImage("")


            // props.refreshUsers()

            navigate("/login")
        })
        .catch((error) => console.log(error))
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Username
                    <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </label>

                <label htmlFor="">Password
                    <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>

                <label htmlFor="">Campus
                    <input type="text" name="campus" value={campus} onChange={(e) => setCampus(e.target.value)}/>
                </label>

                <label htmlFor="">Course
                    <input type="text" name="course" value={course} onChange={(e) => setCourse(e.target.value)}/>
                </label>

                <button type="submit">Create the account</button>
            </form>
        </div>
    )
}

export default Signup