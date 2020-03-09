import React, { Component } from 'react'
import Swiper from 'swiper'
import "./index.scss"
import { withRouter } from 'react-router-dom'
@withRouter

class theme extends Component {
    componentDidUpdate() {
        this.init()
    }

    init = () => {
        new Swiper('.swiper-container-theme', {
            slidesPerView: 4,
            spaceBetween: 20,
        });
    }

    render() {

        let { newSubject, location } = this.props
        return (
            <div>
                {
                    newSubject && newSubject.map((item) => {
                        return (
                            <div key={item.id} className="flash-sale-box">
                                <span className="span">
                                    <img src={["/hotSale"].includes(location.pathname) ? item.url : item.url2} />
                                </span>

                                <div className="swiper-container-theme">
                                    <div className="swiper-wrapper">
                                        {
                                            item.goodsList.map((item, index) => {
                                                return (
                                                    <div key={index} className="swiper-slide goods-item">
                                                        <div>
                                                            <img src={item.imgUrl} />
                                                            <span className="no_goods" style={{ display: item.realStock == 0 ? "block" : "none" }}>已抢光</span>
                                                        </div>

                                                        <p className="p">{item.goodsName}
                                                           
                                                        </p>

                                                        <p>
                                                            <span>${item.mallPrice}</span>
                                                        </p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>


        )
    }
}
export default theme

