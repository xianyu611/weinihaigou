import React, { Component } from 'react'
import { connect } from "react-redux"
import actioncreator from "./actioncreator"
import qs from 'querystring'
import "./index.scss"
import { ArrowLeftOutlined, ShoppingCartOutlined, BankOutlined, EnvironmentOutlined, RightOutlined } from '@ant-design/icons';
import Swiper from 'swiper'
import { ActionSheet } from 'antd-mobile';
// import { Badge } from 'antd';
// import { ClockCircleOutlined } from '@ant-design/icons';
// import { List, Badge } from 'antd-mobile';
import { stat } from 'fs'
import { runInThisContext } from 'vm'
import { Badge } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
let wrapProps;

class details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            showtip: true,
            value: 1,
            index: 0
        }
    }
    componentDidMount() {
        this.props.getDetails(qs.parse(this.props.location.search)['?goodsNo'])
    }
    componentDidUpdate() {
        this.init()
    }
    init = () => {
        var swiper = new Swiper('.swiper-container-details', {
            pagination: {
                el: '.swiper-pagination',
            },
            on: {
                touchEnd: function (event) {
                    //你的事件
                    console.log(event)

                }
            }
        });
    }
    go = (path) => {
        this.props.history.push(path)
    }

    showActionSheet = () => {
        const BUTTONS = ['商品税费', '商品运费', '正品保障', '假一赔十'];
        ActionSheet.showActionSheetWithOptions({
            options: BUTTONS,
            title: '商品说明',
            // message: '商品说明',
            maskClosable: true,
            'data-seed': 'logId',
            wrapProps,
        },
            (buttonIndex) => {
                console.log(buttonIndex)
                this.setState({ clicked: BUTTONS[buttonIndex] });
            });
    }

    changes = (e) => {
        const value = e.target.value
        this.setState({
            value
        })
    }

    itemTab = (index) => {
        this.setState({
            index
        })
    }
    car = (tag) => {
        var value = this.state.value
        if (tag) {
            this.setState({
                value: ++value
            })
        } else {
            if (value <= 0) {
                return
            }
            this.setState({
                value: --value
            })
        }
    }
    bgshow = (tag, i = 0) => {
        if (i == 1) {
            this.setState({
                showtip: false
            })
        }
        if (tag) {
            this.setState({
                show: false,
            })
        } else {
            if (i == 1) {
                this.setState({
                    showtip: true
                })
            }
            this.setState({
                show: true
            })
        }

    }
    a = (data) => {
        let sun = this.state.value
        let goods = { ...data, sun, info: true }
        this.props.addList(goods)
    }

    render() {
        let { detailsData } = this.props.details
        console.log(this.props.shoppingCart)
        return (
            <div className="details">
                <div className="title">
                    <ArrowLeftOutlined style={{ position: "absolute", left: "10px", top: "10px",fontSize:"20px" }} onClick={this.go.bind(this, "/")} />
                    <h1>商品详情</h1>
                    <BankOutlined style={{ position: "absolute", right: "60px", top: "10px" ,fontSize:"20px"}} onClick={this.go.bind(this, "/")}></BankOutlined>
                    <ShoppingCartOutlined style={{ position: "absolute", right: "10px", top: "10px" ,fontSize:"20px"}}></ShoppingCartOutlined>
                    <span className="inc" style={{display:this.props.shoppingCart.list.length?"block":"none"}}>
                        {this.props.shoppingCart.list.length}
                    </span>
                </div>


                <div className="bannee">
                    <div className="swiper-container-details">
                        <div className="swiper-wrapper">
                            {
                                detailsData.imgList && detailsData.imgList.filter(item => item.type === 1).map((item) => {
                                    return <div key={item.recId} className="swiper-slide">
                                        <img src={item.imgUrl} />
                                    </div>
                                })
                            }
                        </div>

                        <div className="swiper-pagination"></div>
                    </div>
                </div>


                <div className="price-box">
                    <p className="p">{detailsData.goods && detailsData.goods.goodsName}</p>
                    <div className="price-section-box">
                        <div className="price-section1">
                            <ins>$<span>{detailsData.goods && detailsData.goods.minPrice}</span></ins>
                            <ins>~<span>{detailsData.goods && detailsData.goods.maxPrice}</span></ins>
                        </div>
                        <p className="original-price-box">
                            价格:&nbsp;&nbsp;
                                <del>
                                ￥
                                    <span>{detailsData.goods && detailsData.goods.marketPrice}</span>
                            </del>
                        </p>
                        {/* goods.goodsCountry.countryImgUrl2 */}
                        <div className="address">
                            <img src={detailsData.goods && detailsData.goods.goodsCountry.countryImgUrl2} />
                            &nbsp;
                                <span>{detailsData.goods && detailsData.goods.goodsCountry.countryName}品牌</span>
                            <span></span>
                            &nbsp;
                                <span>, 预计7个工作日左右到达</span>
                        </div>
                    </div>
                </div>


                <div className="port-dispatch-box">
                    <div>
                        <span>配送至：</span>
                        <span className="port-dispatch">
                            <span>
                                <EnvironmentOutlined></EnvironmentOutlined>
                                浙江省</span>
                            &nbsp;
                            <span>杭周</span>
                            <RightOutlined style={{ position: "absolute", right: "20px", top: "18px" }}></RightOutlined>
                        </span>
                    </div>
                </div>

                <div className="goods-prams" onClick={this.showActionSheet}>
                    <div className="goods-pramsfix">
                        <div style={{ 'padding': '12px 0' }}>
                            <span style={{ fontSize: '12px', lineHeight: "1.6px" }}>说明:</span>
                        </div>
                        &nbsp;&nbsp;
                            <div style={{ padding: ' 12px 0' }}>
                            <span className="red-mark">
                                <span>商品税费</span>
                            </span>
                            <span className="red-mark">
                                <span>该商品免运费</span>
                            </span><br></br>
                            <span className="red-mark">
                                <span>100%正品保证</span>
                            </span>
                            <span className="red-mark">
                                <span>假一赔十</span>
                            </span>
                        </div>



                    </div>
                </div>

                <div className="brand">
                    <h2>
                        <span>品牌详情</span>
                    </h2>
                    <div className="brand-der">
                        全球商品一站式采购代发，主营美妆/个护/食品/保健品/日用品等品类,国内领先主流跨境电商平台的日系产品供应者。设有东京、电商平台的日系产品供应者。设有东京、香港、浙江三个中心。东京：采购与仓储 ; 香港：仓储与BD ; 浙江：运营与购与仓储 ; 香港：仓储与BD ;
                    </div>
                    <div className="brand-img ">
                        <img style={{ width: "100%", height: "100%" }} src={detailsData.goods && detailsData.goods.goodsBrand.brandLogo} />
                    </div>
                    <div className="see-brand">
                        <span>查看该品牌所有单品></span>
                    </div>
                    <div className="goods-details">
                        <h3 className="goods-details-h2">商品图文说明:</h3>
                        {
                            detailsData.imgList && detailsData.imgList.map((item, index) => {
                                return <img key={index} src={item.imgUrl} style={{ width: "100%" }} />
                            })
                        }
                    </div>
                </div>

                <div className={!this.state.showtip ? "addok animation" : " "} >加入成功</div>

                <div className="show" style={{ display: this.state.show ? "block" : "none" }}>
                    <div className="box-bg" onClick={this.bgshow.bind(this, 1, 0)}></div>
                    <div className="sku-main shows">
                        <div className="sku-header">
                            <div className="sku-img">
                                <img style={{ width: "100%", height: "100%" }} src={detailsData.goods && detailsData.goods.skuList[this.state.index].skuImg}></img>
                            </div>
                            <div className="details">
                                <div className="price-section">
                                    {
                                        detailsData.goods && detailsData.goods.skuList[this.state.index].skuPriceList.map((item, index) => {
                                            return (
                                                <div key={index} className="price-item">
                                                    <span className="num-price">{
                                                        item.intervalFirst == item.intervalLast ? item.intervalFirst : `${item.intervalFirst}${
                                                            item.intervalLast < 10 ? "-" + item.intervalLast : "以上"
                                                            }`
                                                    }{item.intervalLast > 10 ? "件以上单价" : "件单价"}</span>
                                                    <br></br>
                                                    <ins className="current-price">${item.price}</ins>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <p>
                                    <span> 库存:</span>
                                    <span> {detailsData.goods && detailsData.goods.skuList[this.state.index].realStock}</span>
                                    <span> 件</span>
                                </p>
                                <p>
                                    <span>已选</span>
                                    <span>{detailsData.goods && detailsData.goods.skuList[this.state.index].skuName}</span>
                                </p>
                            </div>


                        </div>
                        <div className="sku-con">
                            <div className="sku-con-main">
                                <p className="sku-con-header">规格分类:</p>
                                <div className="sku-con-items">
                                    {
                                        detailsData.goods && detailsData.goods.skuList.map((item, index) => {
                                            return (
                                                <span className={[index === this.state.index ? 'active' : ""]} onClick={this.itemTab.bind(this, index)} key={index}>{item.skuName}</span>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                            <div className="num-box">
                                <span className="sku-con-header">购买数量</span>
                                <div className="quantity-selector ">
                                    <span style={{ color: !this.state.value ? "#d2d2d2" : "#000" }} className="reduce disable" onClick={this.car.bind(this, 0)}>-</span>
                                    <input type="number" readOnly onChange={this.changes} value={this.state.value} />
                                    <span className="add" onClick={this.car.bind(this, 1)}>+</span>
                                </div>
                            </div>
                        </div>

                        <div className="car" onClick={() => { this.a(detailsData.goods); this.bgshow(1, 1) }}>确认</div>
                    </div>
                </div>

                <div className="goods-footer">
                    <span className="custom">客服</span>
                    <span className="cillect">收藏</span>
                    <span className="add-shop" onClick={this.bgshow.bind(this, 0, 1)}>加入购物车</span>
                    <span className="buy">立即购买</span>
                </div>
            </div>
        )
    }
}

export default connect((state) => state, actioncreator)(details)
