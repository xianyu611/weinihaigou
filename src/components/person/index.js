import React, { Component } from 'react'
import { MobileOutlined ,LockOutlined } from '@ant-design/icons';
import "./index.scss"

export default class person extends Component {
    go=(path)=>{
        this.props.history.push(path)
    }
    render() {
        return (
            <div>
                <div className="login-header">
                    <img src="http://www.weinihaigou.com/m-images/login-bg.jpg"></img>
                </div>
                <div className="login-main">
                    <div className="phone-pwd">
                        <div className="phone">
                        <MobileOutlined style={{position:"absolute",left:"0",top:"6px"}}/>
                            <input type="tel" placeholder="请输入账号"></input>
                        </div>
                        <div className="pwd">
                        <LockOutlined style={{position:"absolute",left:"0",top:"14px"}}/>
                            <input type="password" placeholder="请输入密码"></input>
                        </div>
                    </div>
                    <div className="com-next">登录</div>
                    <p className="p">
                        <span onClick={this.go.bind(this,"/register")} style={{color:" #9f2e33"}}>注册账号</span>
                        <span>忘记密码?</span>
                    </p>
                    <div className="other-login">
                        <img src="http://www.weinihaigou.com/m-images/other-login.jpg"></img>
                        <ul className="login-mian">
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
