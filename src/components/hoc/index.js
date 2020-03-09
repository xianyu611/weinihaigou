import React from 'react'

var  Hoc=(Com)=> {  //属性代理
    return class  extends React.Component {
         render(){  
             return <div><Com {...this.props} /> qf &copy;2020</div>
         }
    }
 }
    
 export default Hoc;