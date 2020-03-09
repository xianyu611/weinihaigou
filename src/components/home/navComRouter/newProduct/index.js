//新品
import React, { Component } from 'react'
import { connect } from 'react-redux';
import actioncreator from './actioncreator'
import "./index.scss"
import { ArrowLeftOutlined, CaretUpOutlined, CaretDownOutlined, DownOutlined } from '@ant-design/icons';
import { ListView } from 'antd-mobile';
import { Drawer, List, NavBar, Icon } from 'antd-mobile';



class newProduct extends Component {
    constructor(props) {
        super(props)
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });
        this.state = {
            list: [],
            info: true,
            pageNum: 1,
            sort: "",
            order: 2,
            current: 0,
            spana: true,
            spans: false,
            spand: true,

            open: false,
            obj: { 0: true, 1: true, 2: true },
            currents: [0, 0, 0, 0, 0, 0]
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this,1));
        // this.props.getData(1,"","","",26)
        if(this.props.location.state){
            this.props.getData(1,"","","",this.props.location.state.id)
        }else{
            this.props.getData()
        }
        this.props.getSolrGroup()
        // console.log(this.props.location.state.id)

    }
    a=()=>{
        console.log(222)
    }
    handleScroll=(e)=> {
        if (!this.state.current) {
            if (document.body.scrollHeight - window.scrollY < 1700) {
                if (this.state.info) {
                    this.setState({
                        info: false,
                        pageNum: ++this.state.pageNum
                    }, () => {
                        if(this.props.location.state){
                            this.props.getDataScroll(this.state.pageNum, this.state.sort, this.state.order,this.props.location.state.id)
                        }else{
                            this.props.getDataScroll(this.state.pageNum, this.state.sort, this.state.order)
                        }
                    })
                }
            } else {
                if (!this.state.info) {
                    this.setState({
                        info: true
                    })
                }
            }
        }
    }

    goods = (sort, e) => {
        if (e.target.getAttribute("index") == 2) {
            this.setState({
                spana: !this.state.spana,
                order: Number(this.state.spana) + 1
            })
        }
        if (e.target.getAttribute("index") == 3) {
            this.setState({
                spans: !this.state.spans,
                order: Number(this.state.spans) + 1
            })
        }

        if (e.target.getAttribute("index") == 4) {
            this.setState({
                spand: !this.state.spand,
                order: Number(this.state.spand) + 1
            })
        }

        if (e.target.getAttribute("index") == 5) {
            this.setState({
                open: true
            })
            return 
        }
        this.setState({
            sort,
            current: e.target.getAttribute("index"),

        }, () => {
            this.props.getData(1, this.state.sort, this.state.order)
            // this.props.getDataScroll(1, this.state.sort, this.state.order)
        })

    }

    onOpenChange = (...args) => {
        // console.log(args);
        this.setState({ open: !this.state.open });
    }

    fn = () => {
        this.setState({
            open: !this.state.open
        })
    }

    open = (key) => {
        var obj = { ...this.state.obj }
        obj[key] = !obj[key]
        this.setState({
            obj
        })
    }

    itenclick = (id, index) => {
        let currents = [...this.state.currents]
        currents[index] = id
        this.setState({
            currents,
        }, () => {
            console.log(this.state.currents)
        })
    }

    go=(path)=>{
        console.log(222)
        this.props.history.push(path)
    }

    render() {
        let { newProductData, location } = this.props
        const sidebar = (
            <List>
                <div className="filter-main">
                    <div className={["filter-item"]} style={{ height: this.state.obj[0] ? "80px" : "auto" }}>
                        <h2    >分类
                        <DownOutlined onClick={this.open.bind(this, 0)} className="" style={{ transform: this.state.obj[0] ? "rotate(180deg)" : "", fontSize: "14px", position: "absolute", right: "0px", top: "5px" }} />
                        </h2>
                        {newProductData.newSolrGroup.groupList3 && newProductData.newSolrGroup.groupList3.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    <li style={{ border: this.state.currents[0] == item.id ? '1px solid #ff6a00' : '' }} onClick={this.itenclick.bind(this, item.id, 0)}>{item.name}</li>
                                </div>
                            )
                        })}
                    </div>

                    <div className={["filter-item"]} style={{ height: this.state.obj[1] ? "80px" : "auto" }}>
                        <h2>国家
                        <DownOutlined onClick={this.open.bind(this, 1)} style={{ transform: this.state.obj[1] ? "rotate(180deg)" : "", fontSize: "14px", position: "absolute", right: "0px", top: "5px" }} />
                        </h2>
                        {newProductData.newSolrGroup.groupList2 && newProductData.newSolrGroup.groupList2.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    <li style={{ border: this.state.currents[1] == item.id ? '1px solid #ff6a00' : '' }} onClick={this.itenclick.bind(this, item.id, 1)}>{item.name}</li>
                                </div>
                            )
                        })}
                    </div>

                    <div className={["filter-item"]} style={{ height: this.state.obj[2] ? "80px" : "auto" }}>
                        <h2>品牌
                        <DownOutlined onClick={this.open.bind(this, 2)} style={{ fontSize: "14px", position: "absolute", right: "0px", top: "5px", transform: this.state.obj[2] ? "rotate(180deg)" : "" }} />
                        </h2>
                        {newProductData.newSolrGroup.groupList1 && newProductData.newSolrGroup.groupList1.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    <li style={{ border: this.state.currents[2] == item.id ? '1px solid #ff6a00' : '' }} onClick={this.itenclick.bind(this, item.id, 2)}>{item.name}</li>
                                </div>
                            )
                        })}
                    </div>

                    <div className="filter-item">
                        <h2>价格
                        <div>
                                {
                                    [{ id: 11, name: "0-99" }, { id: 12, name: "100-199" }, { id: 13, name: "200-299" }].map((item) => {
                                        return <li style={{ border: this.state.currents[3] == item.id ? '1px solid #ff6a00' : '' }} onClick={this.itenclick.bind(this, item.id, 3)} key={item.id}>{item.name}</li>
                                    })
                                }
                                <div className='num-box'>
                                    <input type="number" min="10" max="50" placeholder="最低量" onKeyUp={this.repLace} />
                                    --
                            <input type="number" min="10" max="50" placeholder="最高量" />
                                </div>
                            </div>
                        </h2>

                    </div>

                    <div className="filter-item">
                        <h2>库存

                        <div>
                                {
                                    [{ id: 21, name: "0-99" }, { id: 22, name: "100-499" }, { id: 23, name: "500以上" }].map((item) => {
                                        return <li style={{ border: this.state.currents[4] == item.id ? '1px solid #ff6a00' : '' }} onClick={this.itenclick.bind(this, item.id, 4)} key={item.id}>{item.name}</li>
                                    })
                                }
                                <div className='num-box'>
                                    <input type="number" min="10" max="50" placeholder="最低量" onKeyUp={this.repLace} />
                                    --
                            <input type="number" min="10" max="50" placeholder="最高量" />
                                </div>
                            </div>
                        </h2>

                    </div>

                    <div className="filter-item">
                        <h2>发货

                        <div>
                        {
                                    [{ id: 31, name: "保税区邮" }, { id: 32, name: "香港直邮" }, { id: 33, name: "海外直邮" },{ id: 34, name: "国内发货" }].map((item) => {
                                        return <li style={{ border: this.state.currents[5] == item.id ? '1px solid #ff6a00' : '' }} onClick={this.itenclick.bind(this, item.id, 5)} key={item.id}>{item.name}</li>
                                    })
                                }
                               
                            </div>
                        </h2>

                    </div>
                    <div className="make-box">
                        <span className="make">重置</span>
                        <span className=" make make-right">确认</span>
                    </div>

                </div>

            </List>
        );


        return (
            <div ref={(node) => this.txtSpan = node} style={{ position: "relative", zIndex: "999", width: "100%" }}>
                <div>
                    <Drawer
                        className="my-drawer"
                        style={{ minHeight: document.documentElement.clientHeight }}
                        enableDragHandle
                        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
                        sidebar={sidebar}
                        position="right"
                        open={this.state.open}
                        onOpenChange={this.onOpenChange}
                        // docked={true}
                    >
                        <div className="title">
                            <div>
                                <h2>新品</h2>
                                <ArrowLeftOutlined onClick={this.go.bind(this,"/")} style={{ position: 'absolute', top: "15px", left: "15px", fontSize: "20px" }}></ArrowLeftOutlined>
                            </div>
                        </div>

                        <div className="goods-sort">
                            <div className="com-goods">
                                <span index="1" style={{ color: this.state.current == 1 ? "red" : "#666" }} onClick={this.goods.bind(this, "xl")}>销量</span>
                                <span index="2" style={{ color: this.state.current == 2 ? "red" : "#666" }} onClick={this.goods.bind(this, "sj")}>价格
                                    <CaretUpOutlined
                                        style={{ color: !this.state.spana ? "red" : "#666", position: 'absolute', top: '-3px', left: '32px' }} />
                                    <CaretDownOutlined
                                        style={{ color: this.state.spana ? "red" : "#666", position: 'absolute', top: '6px', left: '32px' }} />
                                </span>

                                <span index="3" style={{ color: this.state.current == 3 ? "red" : "#666" }} onClick={this.goods.bind(this, "kcl")}>库存量
                                    <CaretUpOutlined style={{ color: this.state.spans ? "red" : "#666", position: 'absolute', top: '-3px', left: '45px' }} />
                                    <CaretDownOutlined style={{ color: !this.state.spans ? "red" : "#666", position: 'absolute', top: '6px', left: '45px' }} />
                                </span>

                                <span index="4" style={{ color: this.state.current == 4 ? "red" : "#666" }} onClick={this.goods.bind(this, "sjsj")}>上架时间
                                    <CaretUpOutlined style={{ color: !this.state.spand ? "red" : "#666", position: 'absolute', top: '-3px', left: '58px' }} />
                                    <CaretDownOutlined style={{ color: this.state.spand ? "red" : "#666", position: 'absolute', top: '6px', left: '58px' }} />
                                </span>
                                <span index="5" onClick={this.goods.bind(this, "22")}>筛选</span>
                            </div>
                        </div>
                         </Drawer>
                            {/* onClick={this.go.bind(this,"/datails?goodsNo="+item.goodsNo+"")} */}
                            {/* "/datails?goodsNo="+item.goodsNo+" */}
                        <ul className="com-goods-list">
                            {newProductData.newProducer.list && newProductData.newProducer.list.map((item, index) => {
                                return (
                                    <li key={index} onClick={this.go.bind(this,"/datails?goodsNo="+item.goodsNo+"")} style={{zIndex:!this.state.open?"62":"0"}}>
                                        <div className="goods-list-box">
                                            <div className="no-goods" style={{ display: item.realStock == 0 ? "block" : "none" }}>已抢光</div>
                                            <div className="goods-list-img">
                                                <img src={item.imgUrl} />
                                            </div>
                                            <p className="p">
                                                <span>{item.countryName}直邮</span>
                                            </p>
                                            <p className="goods-der">
                                                <span>{item.goodsName}</span>
                                            </p>
                                            <p className="goods-price">
                                                <ins>¥{item.mallPrice}</ins>
                                                &nbsp;
                                                &nbsp;
                                        <del>¥{item.marketPrice}</del>
                                            </p>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>

                    {/* </Drawer> */}
                </div>
            </div>
        )
    }
    componentWillUnmount() {
        this.setState = () => {
          return
        }
      }
}

export default connect((state) => state, actioncreator)(newProduct)
