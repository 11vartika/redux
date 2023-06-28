import axios from 'axios'
import React, { useState } from 'react'

function Register
() {
    const dataa = {naame: '',city: ''};
    const [user, setUser] = useState(dataa)
    const handleData = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleClick = (e) => {
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/users',user)
            .then((resp) => {
                console.log(resp)
               
            })
    }
    return (
        <div>Register page 

            <form>

                <input type='text' placeholder='name' name='naame' value={user.naame} onChange={handleData} />

                <input type='text' placeholder='city' name='city' value={user.city} onChange={handleData} />
                <button onClick={handleClick}>submit</button>
            </form>
        </div>
    )
}

export default Register
