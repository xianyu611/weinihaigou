import React, { Component } from 'react'
import ReactDOM from 'react-dom';
// import { ActionSheet, WingBlank, WhiteSpace, Button, Toast } from 'antd-mobile';
// import { PullToRefresh, ListView, Button } from 'antd-mobile';
// import { PullToRefresh, Button } from 'antd-mobile';
import { ListView } from 'antd-mobile';
import axios from "axios"
import { Drawer, List, NavBar, Icon } from 'antd-mobile';



export default class index extends Component {
//   constructor(props){
//     super(props)
//     this.state={
//       docked: true
//     }
    
//   }
  
//   onDock = (d) => {
//     console.log(22)
//     this.setState({
//       [d]: !this.state[d],
//     });
//   }
//   fn=()=>{
//     console.log(22)
//     this.setState({
//       docked: !this.state.docked
//     });
//   }
  render() {
    // const sidebar = (<List>
    //   {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i, index) => {
    //     if (index === 0) {
    //       return (<List.Item key={index}
    //         thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
    //         multipleLine
    //       >Category</List.Item>);
    //     }
    //     return (<List.Item key={index}
    //       thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
    //     >Category{index}</List.Item>);
    //   })}
    // </List>);

    return (
        <></>
    // <div style={{ height: '100%' }}>
    //   <div onClick={this.fn}>22222</div>
    //   <NavBar icon={<Icon type="ellipsis" />}  onLeftClick={() => this.onDock('docked')}>
    //     Docked in document
    //   </NavBar>
    //   <Drawer
    //     className="my-drawer"
    //     style={{ minHeight: document.documentElement.clientHeight }}
    //     contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
    //     sidebarStyle={{ border: '1px solid #ddd' }}
    //     sidebar={sidebar}
    //     docked={this.state.docked}
    //   >
    //     Click upper-left corner
    //   </Drawer>
    // </div>
    );
  }
}
