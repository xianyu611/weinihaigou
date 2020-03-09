//品牌街
import React, { Component } from 'react'
import { province } from 'antd-mobile-demo-data';
import { StickyContainer, Sticky } from 'react-sticky';
import { ListView, List, SearchBar } from 'antd-mobile';
import { connect } from 'react-redux';
import actioncreator from "./actioncreator"
import axios from "axios"
import {ArrowLeftOutlined } from '@ant-design/icons';

class trademark extends Component {
    constructor(props) {
        super(props);
        const getSectionData = (dataBlob, sectionID) => { //表示字母
            // console.log(dataBlob[sectionID])
            // console.log(dataBlob)
            return dataBlob[sectionID]
        };
        const getRowData = (dataBlob, sectionID, rowID) => {  //数据
            // console.log(dataBlob[rowID])
            return dataBlob[rowID]
        };

        const dataSource = new ListView.DataSource({  ///这里
            getRowData,
            getSectionHeaderData: getSectionData,
            rowHasChanged: (row1, row2) => row1 !== row2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        });
        // console.log(props.tardemakData)

        this.state = {
            inputValue: '',
            dataSource,
            isLoading: true,
            data:[]
        };
        // console.log(dataSource,22,getRowData,3333,getSectionData)
    }

    genData = (ds, provinceData) => {
        const dataBlob = {};
        const sectionIDs = [];
        const rowIDs = [];
        Object.keys(provinceData).forEach((item, index) => {
            sectionIDs.push(item);
            dataBlob[item] = item;
            rowIDs[index] = [];

            provinceData[item].forEach((jj) => {
                rowIDs[index].push(jj.value);
                dataBlob[jj.value] = jj.label;
            });
        });
        return ds.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs);
    }

    componentDidMount() {
        let data={}
        this.props.getData()
        // simulate initial Ajax
        axios("/api/brand/queryBrandList.shtml").then((res) => {
            if (res.status == 200) {
                let { brandMap } = res.data.result
                for(let i in brandMap){
                    data[i]=[]
                    brandMap[i].forEach((item,index)=>{
                        data[i].push({label:item.brandName,value:item.brandId,spell:item.brandLogo})
                    })
                }
                this.setState({
                    dataSource: this.genData(this.state.dataSource,data),
                    isLoading: false,
                    data
                  });
               
            }
        })
    }

    onSearch = (val) => {
        console.log(11)
        // const pd = { ...this.props.tardemakData };
        // Object.keys(pd).forEach((item) => {
        //     const arr = pd[item].filter(jj => jj.spell.toLocaleLowerCase().indexOf(val) > -1);
        //     if (!arr.length) {
        //         delete pd[item];
        //     } else {
        //         pd[item] = arr;
        //     }
        // });
        // this.setState({
        //     inputValue: val,
        //     dataSource: this.genData(this.state.dataSource, pd),
        // });
    }
    go=(path)=>{
        this.props.history.push(path)
    }
    render() {
        const { Item } = List;
        let { data } = this.state
        // console.log(this.props.tardemakData)
        console.log(data)
        return (<div style={{ paddingTop: '44px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
                <SearchBar
                style={{paddingLeft:"50px"}}
                    // value={this.state.inputValue}
                    placeholder="Search"
                    // onChange={this.onSearch}
                    // onClear={() => { console.log('onClear'); }}
                    // onCancel={() => { console.log('onCancel'); }}
                />
                <div onClick={this.go.bind(this,"/")} style={{position:"absolute",left:"8px",top:"8px"}}>
                    <ArrowLeftOutlined style={{fontSize:'30px'}}/>
                    </div>
            </div>
            {/* <div>222</div> */}
            <ListView.IndexedList
                dataSource={this.state.dataSource}
                className="am-list sticky-list"
                useBodyScroll
                renderSectionWrapper={sectionID => (
                    <StickyContainer
                        key={`s_${sectionID}_c`}
                        className="sticky-container"
                        style={{ zIndex: 4 }}
                    />
                )}
                renderSectionHeader={sectionData => (
                    <Sticky>
                        {({
                            style,
                        }) => (
                                <div
                                    className="sticky"
                                    style={{
                                        ...style,
                                        zIndex: 3,
                                        backgroundColor: "#f40",
                                        color: 'white',
                                    }}
                                >{sectionData}</div>
                            )}
                    </Sticky>
                )}
                renderHeader={() => <span>custom header</span>}
                renderFooter={() => <span>custom footer</span>}
                renderRow={(rowData, sectionID, rowID, highlightRow) => {
                    return (<Item>
                        {/* <img src={
                        data&&data[sectionID].filter((item)=>{
                            return item.label==rowData
                        })[0].spell
                    }></img> */}
                    {rowData}</Item>)
                }}
                quickSearchBarStyle={{
                    top: 85,
                }}
                delayTime={10}
                delayActivityIndicator={<div style={{ padding: 25, textAlign: 'center' }}>rendering...</div>}
            />
        </div>)
    }
}

export default connect((state) => state, actioncreator)(trademark)