//国家馆
import React, { Component } from 'react'
import { ArrowLeftOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import actioncreator from "./actioncreator"
import "./index.scss"
import Theme from "../../components/theme"

class hotSale extends Component {
    componentDidMount() {
        this.props.getData()
    }
    go=()=>{
        // console.log(this.props.history)
        this.props.history.push("/")
    }
    render() {
        let { hotSaleData } = this.props.hotSaleData
        var newSubject = []
        for (let i in hotSaleData) {
            newSubject.push(hotSaleData[i]); 
        }
        // console.log(newSubject)//realStock
        return (
            <div className="hotSale">
                <div className="header">
                    <h1>国家馆</h1>
                    <span className="span" onClick={this.go}>
                        <ArrowLeftOutlined style={{ fontSize: "22px" }} />
                    </span>
                </div>
                <Theme newSubject={newSubject}></Theme>
            </div>
        )
    }
}
export default connect((state) => state, actioncreator)(hotSale)