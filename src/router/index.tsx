import  React from "react";
import { RouteConfig } from 'react-router-config';
import Home from '../components/Home';
import {Redirect} from 'react-router-dom'
import OnlyHead from '../components/OnlyHead';
import One from '../pages/one';
import Two from '../pages/two';
import Three from '../pages/three';
import Detail from '../pages/detail';
import Share from '../pages/share';

export const routes: RouteConfig[] = [
    {path:'/',exact:true,render:()=><Redirect to={'/one'} />},
    {
        path:'/share',
        component:Share
    },
    {
        component:OnlyHead,
        path:'/de',
        routes:[
            {
                path:'/de',
                render:()=><Redirect to={'/de/detail'} />
            },
            {
                path:'/de/detail',
                component:Detail
            }
        ]
    },
    {
        component: Home,
        routes: [
            {
                path: '/one',
                component: One
            },
            {
                path: '/two',
                component: Two
            },
            {
                path: '/three',
                component: Three
            },
        ]
    },
]
