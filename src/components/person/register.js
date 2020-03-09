import React, { Component } from 'react'
import { LeftOutlined, MobileOutlined, LockOutlined } from '@ant-design/icons';
import "./register.scss"
import { connect } from 'react-redux';
import actioncreator from "./actioncreator"
import axios from "axios"

class register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            phone: "",
            pwd: "",
            index: 60,
            info: false,
            success: "",
            verification: "",
            password: false
        }
    }
    componentDidMount() {

    }

    phone = (e) => {
        this.txtSpan.classList.remove("demo")
        const phone = e.target.value
        this.setState({
            phone
        })
    }
    password = (e) => {
        const pwd = e.target.value
        this.setState({
            pwd
        })
    }
    yzm = (e) => {
        const verification = e.target.value
        this.setState({
            verification
        })
    }

    submie = () => {
        //校验密码：只能输入6-20个字母、数字、下划线  
        var patrn = /^(\w){6,20}$/;
        if (this.state.phone) {
            if (/^1[3456789]\d{9}$/.test(this.state.phone)) {
                if (this.state.pwd) {
                    if (patrn.exec(this.state.pwd)) {
                        console.log("正确")

                       axios.post("/api/user/userRegister.shtml?mobile="+15827018735+"&code="+7255+"&password="+'qwe123'+"").then((res)=>{
                           console.log(res)
                       })
                    } else {
                        console.log("不符合")
                    }
                } else {
                    console.log("空的")
                }
            } else {
                console.log("手机不正确")
            }

        } else {
            console.log("手机号空")
        }
    }


    verifications = (e) => {
        var phone = this.state.phone
        if (!(/^1[3456789]\d{9}$/.test(phone))) {
            this.txtSpan.classList.add("demo")
            return false;
        }
        axios.get("/api/user/sendMoRandmoCode.shtml?mobile=" + phone + "&type=2").then((res) => {

            if (res.data) {
                if (res.data.success) {
                    // console.log(e.target)
                    this.verification.setAttribute("class", "noclick")
                    setTimeout(() => {
                        this.verification.removeAttribute("class", "noclick")
                    }, 1000)
                    this.interval()
                } else {
                    console.log(res.data.message)
                }

            }
        })
    }

    interval = () => {
        if (this.state.index == 0) {
            this.setState({
                index: 60
            })
        }
        let a = setInterval(() => {
            if (this.state.index <= 1) {
                clearInterval(a)
            }
            var index = this.state.index
            index--
            this.setState({
                index
            })
        }, 100);
    }



    render() {
        console.log(this.state.pwd, this.state.phone, this.state.verification)
        return (
            <div>
                <div className="com-top">
                    唯妮用户注册
                    <span className="span">
                        <LeftOutlined /> 返回
                    </span>
                </div>
                <div className="register">
                    <div className="phone-pwd">
                        <div className="phone">
                            <MobileOutlined style={{ position: "absolute", left: "0", top: "6px" }} />
                            <input type="tel" value={this.state.phone} onChange={this.phone} placeholder="请输入手机号"></input>
                        </div>
                        <div className="pwd">
                            <LockOutlined style={{ position: "absolute", left: "0", top: "16px" }} />
                            <input onChange={this.password} value={this.state.pwd} type="password" placeholder="请输入密码"></input>
                            <span className="show-pwd">显&nbsp;示</span>
                        </div>
                    </div>
                    <div className="verification">
                        <input type="text" onChange={this.yzm} placeholder="请输入验证码"></input>
                        <span ref={(node) => this.verification = node} className="" onClick={this.verifications} >
                            {this.state.index == 60 || this.state.index == 0 ? "获取短信验证码" : this.state.index}
                        </span>
                    </div>
                    <p className="tips">
                        注册即视为同意
                    <span style={{ color: "red" }}>《唯妮海购用户注册协议》</span>
                    </p>
                    <div className="com-next" onClick={this.submie}>
                        立即注册
                    </div>
                    <div ref={(node) => this.txtSpan = node} className=" demo1  ">手机号为空或者不正确</div>
                    <span className="has-account">已有唯妮账户></span>
                </div>

            </div>
        )
    }
}
export default connect((state) => state, actioncreator)(register)