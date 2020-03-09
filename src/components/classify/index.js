import React, { Component } from 'react'
import "./index.scss"
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import actioncreator from './actioncreator'


// 分类
class classify extends Component {
    constructor(props){
        super(props)
        this.state={
            current: 0
        }
    }
    componentDidMount() {

        this.props.gatData()
        this.props.gatDataChild(1)
    }

    tab=(data,index,e)=>{
        // console.log(e.target)
        console.log(index)
        this.props.gatDataChild(data)
        this.setState({
            current: index,
          })
    }

    go=(data)=>{
        console.log(data)
        this.props.history.push("/newProduct",{id:data.id})
    }

    render() {
        let { list, childList } = this.props.classifyData
       
        return (
            <div>
                <div className="header">
                    <h1>
                        <img src="http://www.weinihaigou.com/m-images/logo.png" />
                    </h1>
                    <SearchOutlined style={{ position: "absolute", fontSize: "25px", right: "50px", top: "15px" }}></SearchOutlined>
                    <ShoppingCartOutlined style={{ position: "absolute", fontSize: "25px", right: "10px", top: "15px" }}></ShoppingCartOutlined>
                </div>

                <div className="main">
                    <div className="main-tab">
                        <ul>
                            {
                                Object.keys(list).map((item,index) => {
                                    return (
                                        // className="tab-item"
                                    <li className={ index === this.state.current ? 'active tab-item' : 'tab-item'} onClick={this.tab.bind(this,list[item].classid,index)} key={index} >{list[item].classdesc}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="main-con">
                        <div className="con-slide">

                            {
                                childList.classTwoList && childList.classTwoList.map((item) => {
                                    return (
                                        <div key={item.id} className="con-items">
                                            <h2>{item.name}</h2>
                                            <ul>
                                                {
                                                    item.threeCategoryList && item.threeCategoryList.map((key) => {
                                                        return (
                                                            <li key={key.id} onClick={this.go.bind(this,key)}>
                                                                <span>
                                                                    <img src={key.imgUrl} />
                                                                    <p>{key.threeName}</p>
                                                                </span>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect((state) => state, actioncreator)(classify)