import React,  { useState } from 'react'

function Stringlivetask() {
    // const abc="ABCDEF"
    const [abc, setAbc] = useState("ABCDEF")
    const [remaining, setRemaining] = useState("")

    const change=(e)=>{
            setAbc(abc.slice(e.target.value))
            setRemaining(abc.slice(0,e.target.value))
    //   console.log ("bakina",abc.slice(e.target.value))
    //   console.log ("niklela",abc.slice(0,e.target.value))
    }
    console.log("abc",abc)
    console.log("remaining",remaining)
    
    return (
        <div>
            <input onChange={(e)=>change(e)}/>
            <input onChange={(e)=>change(e)}/>
        </div>
    )
}

export default Stringlivetask
