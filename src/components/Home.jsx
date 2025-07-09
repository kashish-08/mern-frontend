// export default function Home({age}){
//     let name='John'
//     if(age>18)
//     return(
//         <>
//         <h3>Hi {name}. Your age is {age}</h3>
//         <p>how are you?!</p>
//         </>
//     )
//     else return <h2>Oops! Not Allowed</h2>


//     // return age>18 ? <h1>Welcome..</h1>: <h2>Not Allowed</h2>

//     // return age>18 || <h3>Can't enter</h3>
// }

// export default function Home() {
//     const handleClick = () => {
//         alert("Hiiii")
//     }
//     const handleSubmit = (name) => {
//         alert(`Hiiii ${name}`)
//     }
//     return(
//         <>
//         <h2>Hello</h2>
//         <button onClick={handleClick}>Click</button><br /><br />
//         <button onClick={()=> handleSubmit('snow')}>Submit</button>
//         </>
//     );
// }

import { useState } from "react";
export default function Home() {
    // const [score, setScore] = useState(0);
    // const increment = () => {
    //     setScore(score+1);
    // }
    // const decrement = () => {
    //     setScore(score-1);
    // }

    const [runs, setRun] = useState(0);
    const [wickets, setWicket] = useState(0);
    const [message, setMessage] = useState();

    const run = () => {
        if(wickets<11) {setRun(runs+1); setMessage("Well Done!!")};
    }
    const wicket = () => {
        setWicket(wickets+1);
        if(wickets>10) {setMessage("Game Over..Better luck next time")};
    }

    return(
        <>
        <p>Runs: {runs} </p>
        <p>Wickets: {wickets}</p>

        {/* <button onClick={increment} style={{cursor:'pointer'}}>Increment Score</button>
        <button onClick={decrement} style={{cursor:'pointer'}}>Decrement Score</button> */}
        {/* {runs>1 && <h2>Well done!</h2>}
        {wickets>10 && <h2>Oops! Game over</h2>}
        <h3>Your Final Score is: {runs}</h3> */}
        <button onClick={run}>Run</button>
        <button onClick={wicket}>Wicket</button>
        <hr />
        {message}
        </>
    );
}