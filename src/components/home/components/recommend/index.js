import React, { Component } from 'react'
import "./index.scss"

export default class recommend extends Component {
    render() {
        let {subject}=this.props
        // console.log(subject,5555)
        return (
            <div className="remmond-box clearfix">
                {
                    subject&&subject.map((item)=>{
                        return (
                            <div key={item.id} className="remmond-item">
                            <img src={item.url2}/>
                            
                        </div>
                        )
                    })
                }

            </div>
        )
    }
}
