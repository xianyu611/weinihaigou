import React, { component } from "react"
import Loadable from 'react-loadable';

const Home = Loadable({
    loader: () => import('../components/home'),
    loading: () => <div>loading...</div>,
});
const ClassIfy = Loadable({
    loader: () => import('../components/classify'),
    loading: () => <div>loading...</div>,
});
const Cart = Loadable({
    loader: () => import('../components/cart'),
    loading: () => <div>loading...</div>,
});
const Person = Loadable({
    loader: () => import('../components/person'),
    loading: () => <div>loading...</div>,
});

const HotSale = Loadable({
    loader: () => import('../components/home/navComRouter/hotSale'),
    loading: () => <div>loading...</div>,
});

const Trademark = Loadable({
    loader: () => import('../components/home/navComRouter/trademark'),
    loading: () => <div>loading...</div>,
});

const NationalPavilion = Loadable({
    loader: () => import('../components/home/navComRouter/nationalPavilion'),
    loading: () => <div>loading...</div>,
});


const Datails = Loadable({
    loader: () => import('../components/details'),
    loading: () => <div>loading...</div>,
});

const NewProduct = Loadable({
    loader: () => import('../components/home/navComRouter/newProduct'),
    loading: () => <div>loading...</div>,
});

const Login = Loadable({
    loader: () => import('../components/person'),
    loading: () => <div>loading...</div>,
});

const Register = Loadable({
    loader: () => import('../components/person/register'),
    loading: () => <div>loading...</div>,
});
export const routes = [
    {
        path: "/home",
        component: Home
    },
    {
        path: "/classify",
        component: ClassIfy
    },
    {
        path: "/cart",
        component: Cart
    },
    {
        path: "/person",
        component: Person
    },
    {
        //热卖
        path: "/hotSale",
        component: HotSale
    },
    {
        //品牌街道=
        path: "/trademark",
        component: Trademark
    },
    {
        //热卖=
        path: "/nationalPavilion",
        component: NationalPavilion
    },
    {
        //详情=
        path: "/datails",
        component: Datails
    },
    {
        //新品=
        path: "/newProduct",
        component: NewProduct
    },
    {
        //登录=
        path: "/login",
        component: Login
    },
    {
        //注册=
        path: "/register",
        component: Register
    }
]


//trademark   Choiceness

// export const homeChild=[
//     {
//         //热卖
//         path: "/home/trademark",
//         component: Trademark
//     }
// ]newProduct