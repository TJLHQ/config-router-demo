import React,{useState,useEffect,useRef} from 'react'
const Two=()=>{
    const [state,setState]=useState(0)
    const ref=useRef(false)
    useEffect(()=>{
        if(!ref.current)return;
        console.log('state-two')
        return ()=>{
            console.log('clear')
        }
    },[state])
    useEffect(()=>{
        setState(val=>val+1)
        console.log('one')
        ref.current=true;
    },[])

    return (
        <div>
            <p onClick={(()=>setState(val=>val+1))}>点击{state}</p>
        </div>
    )
}
export default Two