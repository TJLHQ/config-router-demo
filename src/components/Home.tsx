import React, {FC, ReactNode} from 'react'
import {renderRoutes, RouteConfig} from 'react-router-config';
import HeadComponent from './Head'
import AsideComponent from './Aside'
interface HomeProps {
    route?:RouteConfig
}
const Home:FC<HomeProps>=({route})=>{
    return (
        <div>
            <HeadComponent />
            <AsideComponent />
                {renderRoutes(route?.routes)}
        </div>
    )
}
export default Home