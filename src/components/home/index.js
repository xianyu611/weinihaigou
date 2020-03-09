import React, { Component } from 'react'
import { MessageOutlined, SearchOutlined } from '@ant-design/icons';
// import { Route, Link, Redirect, Switch } from "react-router-dom"
// import {homeChild} from "../../router"
import Swiper from 'swiper'
import "./index.scss"
import { connect } from 'react-redux';
import actioncreator from './actioncreator'
import Recommend from "./components/recommend"
import Theme from "./components/theme"
import Choiceness from "./components/choiceness"

class home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            falg: false
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
        this.props.gatData()
    }
    componentDidUpdate() {
        this.init()
    }

    init = () => {
        new Swiper('.swiper-container-home', {
            pagination: {
                el: '.swiper-pagination',
                bulletActiveClass: 'my-active',
            },
        });
    }

    handleScrollTop = () => {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'smooth',
        });
    }
    handleScroll() {
        if (window.scrollY > 900) {
            this.setState({
                falg: true
            })
        } else {
            this.setState({
                falg: false
            })
        }
    }
    go=(path)=>{
        // console.log(this.props.history.location.pathname)
        this.props.history.push(path)
    }
    render() {
            //   console.log(this.props.todos.list)
        let { banner, subject, newSubject } = this.props.todos.list
        let { falg } = this.state
     
        return (
            <div>
                <div className="banner">
                    <div className="bannerInput">
                        <div>囤货
                        <a><SearchOutlined style={{ fontSize: 20 }} /></a>
                        </div>
                        <span><MessageOutlined style={{ fontSize: 21 }} /></span>
                    </div>
                    <div className="swiper-container-home">
                        <div className="swiper-wrapper wrapper-home">
                            {
                                banner && banner.map((item, index) => {
                                    return <div key={item.id} className="swiper-slide">
                                        <img src={item.url2}></img>
                                    </div>
                                })
                            }
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>

                <div className="nav">
                    <span onClick={this.go.bind(this,"/hotSale")}>
                        <img src="http://www.weinihaigou.com/m-images/nav2.png" />
                        国家馆
                    </span>
                    <span onClick={this.go.bind(this,"/trademark")}>
                        <img src="http://www.weinihaigou.com/m-images/nav3.png" />
                        品牌街
                    </span>
                    <span onClick={this.go.bind(this,"/newProduct")}>
                        <img src="http://www.weinihaigou.com/m-images/new.png" />
                        新品
                    </span>
                    <span onClick={this.go.bind(this,"/nationalPavilion")}>
                        <img src="http://www.weinihaigou.com/m-images/hot.png" />
                        热卖
                    </span>
                </div>

                <Recommend subject={subject}></Recommend>

                <Theme newSubject={newSubject}></Theme>

                <Choiceness></Choiceness>
                <div className="ScrollTop" style={{ display: falg ? "block" : "none" }} onClick={this.handleScrollTop}>top</div>

                <p className="com-end">就到这里吧！我可是有底线的呢！</p>


                
            </div>
        )

    }
    componentWillUnmount() {
        this.setState = () => {
          return
        }
      }
}
export default connect((state) => state, actioncreator)(home)
