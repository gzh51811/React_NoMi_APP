import React,{Component} from 'react';
import { Menu} from 'antd';
class Fq extends Component{
        constructor(){
                super();
                this.state = {
                        dianlist:[
                                {
                                        name:'糯米电影',
                                        poll:'468.1万',
                                        tie:'0',
                                        imgurl:'fq1.jpg'
                                },
                                {
                                        name:'糯米新闻',
                                        poll:'473.4万',
                                        tie:'2',
                                        imgurl:'fq2.jpg'
                                },
                                {
                                        name:'战狼2',
                                        poll:'12.0万',
                                        tie:'11',
                                        imgurl:'fq3.jpg'
                                }
                                
                        ],
                        navlist : [
                                {
                                        name: '热门',
                                        path:'/re'
                                }
                                ,{
                                        name: '明星',
                                        path:'/ming'
                                }
                                ,{
                                        name: '电影',
                                        path:'/dian'
                                }
                                ,{
                                        name: '电视剧',
                                        path:'/shi'
                                }
                                ,{
                                        name: '综艺',
                                        path:'/zong'
                                }
                                ,{
                                        name: '演出',
                                        path:'/yan'
                                }
                                ,{
                                        name: '女儿国',
                                        path:'/nv'
                                }
                        ],
                        curr:'/re',
                        active:0
                }
                
        }
        handleChildClick = (e)=>{
                // console.log(e);
                this.setState({
                    curr: e.key
                },()=>{
                //     this.props.history.push(this.props.match.url +'/'+ e.key.toLowerCase());
                });
            }
        render(){
                
                return <div className = "Fq" >
                                <div className = "Fq_head" >
                                <Menu
                                onClick={this.handleChildClick}
                                selectedKeys={[this.state.curr]}
                                mode="horizontal"
                                >
                                {
                                        this.state.navlist.map((item,index) => <Menu.Item key={index}>
                                        {item.name}
                                        </Menu.Item>)
                                }
                                </Menu>
                                        
                                </div>
                                <div className="Fq_main">
                                        <ul className="Fq_main_ul">
                                        {
                                                this.state.dianlist.map((item,index) => <li className="Fq_main_item" key={item.name}>
                                                <div className="Fq_main_cont">
                                                        <div className="main_cont_img">
                                                        <img src={require('../../assets/'+item.imgurl)} alt=""/>
                                                        </div>
                                                        <h3 className="title">{item.name}</h3>
                                                        <p className="fan-info">{item.poll}糯米饭</p>
                                                        <p className="fan-info">{item.tie}个新增贴</p>
                                                </div>
                                                <div className="Fq_main_btn">关注
                                                </div>
                                                </li>)
                                        }
                                        </ul>
                                </div>
                        </div>
        }
}

export default Fq;