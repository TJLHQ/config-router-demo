import React,{useEffect,useState,useCallback,createContext} from 'react'
import Info from '../components/Info'
interface InfoContext {
    name:string
    age:number,
    setName:(val:string)=>void
    setAge:(val:number)=>void
}
export const Context=createContext<InfoContext>({} as InfoContext)
const One=()=>{
    const [count,setCount]=useState(0)
    const [name,setName]=useState('')
    const [age,setAge]=useState(0)
    const [num,setNum]=useState(0)
    const add=useCallback(()=>{
        console.log(num)
        setCount((val)=>val+1)
    },[num])
    useEffect(()=>{
        console.log(count)
    },[add])
    return (
        <Context.Provider value={{name,setName,age,setAge}}>
            <p onClick={add}>增加</p>
            <p>{count}</p>
            <p onClick={()=>setNum((val)=>val-1)}>减少</p>
            <p>{num}</p>
            <Info />
        </Context.Provider>
    )
}
export default One