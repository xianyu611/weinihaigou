import React, { Component } from 'react'
import { connect } from 'react-redux';
import actioncreator from "./actioncreator"
import axios from "../../../../api"
import {withRouter}  from 'react-router-dom'
import { ArrowLeftOutlined} from '@ant-design/icons';
import "./index.scss"
@withRouter

class choicenes extends Component {
    constructor(props){
        super(props)
        this.state={
            banner:""
        }
    }
    componentDidMount() {
        axios.post("/find/themeBanner.shtml?themeId=317").then((res)=>{
            if(res.length){
                this.setState({
                    banner:res[0]
                })
            }
        })
       
        if(["/nationalPavilion"].includes(this.props.location.pathname)){
            this.props.nationalData()
            // console.log("nationalPavilion222")
            return 
        }
        if(["/home"].includes(this.props.location.pathname)){
            this.props.getData()
            // console.log("home222")
            return 
        }
        // console.log(this.props.location.pathname)
    }
    go=(path)=>{
        // console.log(path)
        this.props.history.push(path)
    }
    render() {

        let { HotList } = this.props.choiceness
        // console.log(this.props.choiceness)
        // console.log(HotList)
        // console.log(this.state.banner)
        // console.log(["/nationalPavilion"].includes(this.props.location.pathname))
        return (
            <div className="global-selection">
                {["/nationalPavilion"].includes(this.props.location.pathname)?(
                <div>
                    <div style={{borderBottom: '1px solid #ebebeb',position:"fixed",top:0,zIndex:10,height:'50px',backgroundColor:"#fff",lineHeight:'50px',
                width:'100%',color:'#000',textAlign:"center"}}>
                    <span style={{position:"absolute",left:"10px"}} onClick={this.go.bind(this,"/")}>
                        <ArrowLeftOutlined/>
                    </span>
                    {this.state.banner.title}</div>
                <div style={{height:'170px'}}>
                    <img style={{height:"100%",width:"100%"}} src={this.state.banner.adImgUrl}/>
                </div>
                </div>):<h2></h2>}
                <ul>
                    {["/nationalPavilion"].includes(this.props.location.pathname)?(
                        HotList.list&&HotList.list.map((item,index)=>{
                            return (
                                <li onClick={this.go.bind(this,"/datails?goodsNo="+item.goodsNo+"")} key={index} style={{ borderRight: index % 2 == 0 ? "1px solid #red" : "none" }}>
                                <div className="div ">
                                    <div className="no_goods" style={{ display: item.realStock == 0 ? "block" : "none" }}>已抢光</div>
                                     <div className="img">
                                       <img src={item.imgUrl} />
                                    </div>
                                    <p className="p">{item.deliveryType == 1 ? "香港直邮" : "保税区邮"}</p>
                                    <p className="goods-der">{item.goodsName}</p>
                                    <div className="goods-price">
                                        <span>${item.showPrice}</span>
                                        &nbsp;&nbsp;
                                        <del>${item.marketPrice}</del>
                                    </div>
                                </div> 
                            </li>
                            )
                        })
                        ):(Object.keys(HotList) && Object.keys(HotList).map((item, index) => {
                            // console.log(HotList[item])
                            return (
                                <li onClick={this.go.bind(this,"/datails?goodsNo="+HotList[item].goodsNo+"")} key={index} style={{ borderRight: index % 2 == 0 ? "1px solid #red" : "none" }}>
                                    <div className="div ">
                                        <div className="no_goods" style={{ display: HotList[item].realStock == 0 ? "block" : "none" }}>已抢光</div>
                                        <div className="img">
                                            <img src={HotList[item].imgUrl} />
                                        </div>
                                        <p className="p">{HotList[item].deliveryType == 1 ? "香港直邮" : "保税区邮"}</p>
                                        <p className="goods-der">{HotList[item].goodsName}</p>
                                        <div className="goods-price">
                                            <span>${HotList[item].showPrice}</span>
                                            &nbsp;&nbsp;
                                            <del>${HotList[item].marketPrice}</del>
                                        </div>
                                    </div>
                                </li>
                            )
                        }))
                    }
                </ul>
            </div>
        )
    }
}
export default connect((state) => state, actioncreator)(choicenes)


