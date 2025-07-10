//useState
import "./Register.css"
import { useState } from "react";;
import axios from "axios";

export default function Register(){
    const [user, setUser] = useState({});
    const [error, setError] = useState();
    const handleSubmit = async () => {
        try {
            const url = "http://localhost:8080/api/users/register";
            const result = await axios.post(url, user);
            setError("data saved successfully");
        } catch (err) {
            console.log(err);
            setError("something went wrong!")
        }
    }
    return (
        <div className="App-register-row">
            <div>
            <h2>Registration Form</h2>
            {error}
            <p>
                <input type="text" onChange={(e)=>setUser({...user, firstName:e.target.value})} placeholder="Enter First Name" />
            </p>
            <p>
                <input type="text" onChange={(e)=>setUser({...user, lastName:e.target.value})} placeholder="Enter Last Name" />
            </p>
            <p>
                <input type="email" onChange={(e)=>setUser({...user, email:e.target.value})} placeholder="Enter Email" />
            </p>
            <p>
                <input type="password" onChange={(e)=>setUser({...user, password:e.target.value})} placeholder="Enter Password" />
            </p>
            <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

//useRef
// import "./Register.css"
// import {useRef } from "react";;

// export default function Register(){
//     const firstName = useRef();
//     const lastName = useRef();
//     const email = useRef();
//     const password = useRef();
    
//     const handleSubmit = () => {
//         const user = {
//             firstName: firstName.current.value,
//             lastName: lastName.current.value,
//             email: email.current.value,
//             password: firstName.current.value,
//         };
//         console.log(user)
//     }
//     return (
//         <div className="App-register-row">
//             <div>
//             <h2>Registration Form</h2>
//             <p>
//                 <input type="text" ref={firstName} placeholder="Enter First Name" />
//             </p>
//             <p>
//                 <input type="text" ref={lastName} placeholder="Enter Last Name" />
//             </p>
//             <p>
//                 <input type="email" ref={email} placeholder="Enter Email" />
//             </p>
//             <p>
//                 <input type="password" ref={password} placeholder="Enter Password" />
//             </p>
//             <button onClick={handleSubmit}>Submit</button>
//             </div>
//         </div>
//     )
// }