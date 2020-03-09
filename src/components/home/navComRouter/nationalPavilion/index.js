//热卖
import React, { Component } from 'react'
import Choiceness from "../../components/choiceness"
import { connect } from 'react-redux';
import actioncreator from "../../components/choiceness/actioncreator"

 class nationalPavilion  extends Component {
     componentDidMount(){
        
         this.props.nationalData()
     }
    render() {
        // console.log(this.props)
        return (
            <div>
                <Choiceness></Choiceness>
            </div>
        )
    }
}

export default connect((state) => state, actioncreator)(nationalPavilion)
