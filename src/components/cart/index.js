import React, { Component } from 'react'
import { Button } from 'antd-mobile';
import { connect } from "react-redux"
import actioncreator from "./actioncreator"
import "./index.scss"
import { ArrowLeftOutlined, DeleteOutlined } from '@ant-design/icons'

class cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tag: false
        }
    }
    go = (path) => {
        this.props.history.push(path)
    }
    chenge = () => {

    }
    compile = () => {
        this.setState({
            tag: !this.state.tag
        })
    }
    render() {
        let { list, info } = this.props.shoppingCart
        // console.log(this.props.shoppingCart)
        return (
            <div className="shopping">
                <div className="cart-header">
                    <span className="deit" onClick={this.compile}>{this.state.tag && list.length ? "完成" : !list.length ? "" : "编辑"}</span>
                    <div className="titles">购物车</div>
                    <ArrowLeftOutlined onClick={this.go.bind(this, "/")} style={{ position: "absolute", left: "16px", top: "16px" }}></ArrowLeftOutlined>
                </div>


                <div className="shop-box" style={{ backgroundColor: list.length ? "#fff" : "" }}>

                    <div style={{ display: !list.length ? "none" : "block" }}>
                        {
                            list && list.map((item) => {
                                return (
                                    <div key={item.goodsId} className="goods-item">
                                        <div className="goods-show">
                                            <li onClick={this.props.all.bind(this, item.goodsId)} className="q" style={{ backgroundColor: item.info ? "" : "red" }}></li>
                                            <span className="goods-img">
                                                <img src={item.imgUrl} />
                                            </span>
                                            <div className="goods-link">
                                                <p className="p1">{item.goodsName}</p>
                                                <p className="p2">
                                                    <span>规格:</span>
                                                    <span>2件装</span>
                                                </p>
                                                <p className="p3 p2">
                                                    <span>保税区邮</span>
                                                </p>
                                                <p className="p4">
                                                    ${item.mallPrice}
                                                </p>
                                            </div>
                                            <div>
                                                <div className="quantity-selector" style={{ display: this.state.tag ? "none" : "block" }}>
                                                    <span className="reduce disable" onClick={this.props.change.bind(this, [0, item.goodsId])}>-</span>
                                                    <input type="number" readOnly value={item.sun} />
                                                    <span className="add" onClick={this.props.change.bind(this, [1, item.goodsId])}>+</span>
                                                </div>


                                                <div onClick={this.props.del.bind(this, item.goodsId)} className="del" style={{ display: !this.state.tag ? "none" : "block" }}>

                                                    <span className="delete">
                                                        <DeleteOutlined style={{ fontSize: "20px" }}></DeleteOutlined>
                                                    </span>
                                                    <span>删除</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="no-shop" style={{ display: list.length ? "none" : "block" }}>
                        <img src="http://www.weinihaigou.com/m-images/no-shop.png"></img>
                        <div onClick={this.go.bind(this, "/")}>去逛逛把!</div>
                    </div>
                </div >

                <div className="account" style={{ display: !list.length ? "none" : "block" }}>
                    <div className="makes-box">
                        <div className="all-choose-box" onClick={this.props.all.bind(this, "all")}>
                            <li className="q" style={{ backgroundColor: info ? "" : "red" }}></li>
                            &nbsp;
                                全选
                        </div>
                        <div className="all-money">
                            <p className="">
                                <span>
                                    合计
                                    <span className="money-tips">
                                        (含税)
                                    </span>
                                    :
                                </span>
                                &nbsp;
                                &nbsp;
                                <span>$0.00</span>
                            </p>
                            <p className="money-tips">
                                <span>运费: &nbsp;
                                &nbsp;$</span>
                                <span>0.00</span>
                            </p>
                            <p className="money-tips">
                                <span>预计税费: &nbsp;
                                &nbsp;$</span>
                                <span>0.00</span>
                            </p>
                        </div>
                    </div>
                    <div className="makes-btn">去结算</div>
                </div>
            </div >
        )
    }
}
export default connect((state) => state, actioncreator)(cart)