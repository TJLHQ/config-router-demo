import React,{FC} from 'react'
import HeadComponent from './Head'
import {RouteConfig,renderRoutes} from "react-router-config";
interface OnlyHeadProps {
    route?:RouteConfig
}
const OnlyHead:FC<OnlyHeadProps>=({route})=>{
    return (
        <div>
            <HeadComponent />
            <div>
                {renderRoutes(route?.routes)}
            </div>
        </div>
    )
}
export default OnlyHead