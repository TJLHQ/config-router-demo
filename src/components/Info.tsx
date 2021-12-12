import React,{useContext} from 'react'
import {Context} from '../pages/one'
interface AxiosProps{
    headers?:{
        name:string
        age:number
    }
}
const Info=(config:AxiosProps)=>{
    const {age,name,setAge,setName}=useContext(Context)
    return (
        <div>
            info
        </div>
    )
}
export default Info