import React, { Component } from 'react'
import { Route, NavLink, Redirect, Switch,withRouter} from "react-router-dom"

import "./appNav.scss"
import {
    HomeOutlined,
    ProfileOutlined ,
    ShoppingCartOutlined ,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined,
} from '@ant-design/icons';
@withRouter
class appNav extends Component {
    render() {
        let {pathname}=this.props.location
        console.log(pathname)
        // console.log(["/hotSale"].includes(2,"/hotSale"))
        return (
            //includes
            <div className="footer" style={{display:["/cart","/login","/hotSale",'/trademark','/nationalPavilion',"/datails","/newProduct"].includes(pathname)?"none":""}}>
                <ul>
                    <li>

                        <NavLink to="/home">
                            <div className="icons-list">
                                <HomeOutlined style={{fontSize:18}}/>
                            </div>
                            首页
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/classify">
                            <div className="icons-list">
                                <ProfileOutlined style={{fontSize:18}}/>
                            </div>
                            分类
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart">
                        <div className="icons-list">
                                <ShoppingCartOutlined style={{fontSize:18}}/>
                            </div>
                            购物车
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/person">
                        <div className="icons-list">
                        <SmileOutlined  spin style={{fontSize:18}}/>
                            </div>
                            我的
                        </NavLink>
                    </li>
                </ul>





            </div>
        )
    }
}
export default  appNav