import React, { Component } from 'react';
import { connect } from 'react-redux';
import './List.css';
import { Tabs } from 'antd';
import { Icon } from 'antd';

const TabPane = Tabs.TabPane;
function callback(key) {
    // console.log(key);
}
class List1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Lshow: false,
            Lnum: '0',
            List: ['https://gsp0.baidu.com/6bNXsjip0QIZ8Aqbn9fN2DC/timg?size=b182_2000000&quality=80&name=cmoive&di=c7bc6019941a244a6703250d80db9eea&sec=0&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fmovie%2Fpic%2Fitem%2Fcdbf6c81800a19d8f0d7e3003dfa828ba71e46da.jpg',
                'https://gsp0.baidu.com/6bNXsjip0QIZ8Aqbn9fN2DC/timg?size=b182_2000000&quality=80&name=cmoive&di=2dc98551656881c37a6220c3438900e1&sec=0&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fmovie%2Fpic%2Fitem%2Fe7cd7b899e510fb3c88d53e4d733c895d1430c28.jpg',
                'https://gsp0.baidu.com/6bNXsjip0QIZ8Aqbn9fN2DC/timg?size=b182_2000000&quality=80&name=cmoive&di=c18de79899d3388cd4b66f0a48c0a4ac&sec=0&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fmovie%2Fpic%2Fitem%2F43a7d933c895d143455b242c7df082025aaf0794.jpg',
                'https://gsp0.baidu.com/6bNXsjip0QIZ8Aqbn9fN2DC/timg?size=b182_2000000&quality=80&name=cmoive&di=81601c785c9f5f4527249b9ac8edc21f&sec=0&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fmovie%2Fpic%2Fitem%2F267f9e2f0708283834b4092ab699a9014c08f157.jpg',
                'https://gsp0.baidu.com/6bNXsjip0QIZ8Aqbn9fN2DC/timg?size=b182_2000000&quality=80&name=cmoive&di=6da27cd4d5a8fbe3db81b16c3eae5633&sec=0&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fmovie%2Fpic%2Fitem%2Fc9fcc3cec3fdfc03236edbc8da3f8794a4c226af.jpg',
                'https://gsp0.baidu.com/6bNXsjip0QIZ8Aqbn9fN2DC/timg?size=b182_2000000&quality=80&name=cmoive&di=0011c0e72c6bcc1c73324e19cd84e69d&sec=0&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fmovie%2Fpic%2Fitem%2F6609c93d70cf3bc760c44bdadf00baa1cc112ac4.jpg',
                'https://gsp0.baidu.com/6bNXsjip0QIZ8Aqbn9fN2DC/timg?size=b182_2000000&quality=80&name=cmoive&di=e2e237dabce9a83bc0a085e35c0469ce&sec=0&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fmovie%2Fpic%2Fitem%2Fd788d43f8794a4c298110c0f00f41bd5ad6e39e0.jpg',
                'https://gsp0.baidu.com/6bNXsjip0QIZ8Aqbn9fN2DC/timg?size=b182_2000000&quality=80&name=cmoive&di=2c02c92729e85b04720d4915ece80020&sec=0&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fmovie%2Fpic%2Fitem%2F8d5494eef01f3a298aa3021e9425bc315d607cf3.jpg',
                'https://gsp0.baidu.com/6bNXsjip0QIZ8Aqbn9fN2DC/timg?size=b182_2000000&quality=80&name=cmoive&di=49aa80f69b570ff436480965c0b2a3ef&sec=0&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fmovie%2Fpic%2Fitem%2Ff2deb48f8c5494eef5aebb3923f5e0fe99257e05.jpg',
                'https://gsp0.baidu.com/6bNXsjip0QIZ8Aqbn9fN2DC/timg?size=b182_2000000&quality=80&name=cmoive&di=a58e0037dda7ee46f0b8759d9a6e2602&sec=0&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fmovie%2Fpic%2Fitem%2F96dda144ad345982b6e68c9902f431adcbef8448.jpg',
                'https://gsp0.baidu.com/6bNXsjip0QIZ8Aqbn9fN2DC/timg?size=b182_2000000&quality=80&name=cmoive&di=4ce1dd0e2a7dbb8f6d2f2b9f5406c6eb&sec=0&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fmovie%2Fpic%2Fitem%2Fd1a20cf431adcbef818e252ca2af2edda3cc9f66.jpg'
            ],
            seats: [
                { num: '1', holding: false, select: false },
                { num: '2', holding: false, select: false },
                { num: '3', holding: false, select: false },
                { num: '4', holding: false, select: false },
                { num: '5', holding: true, select: false },
                { num: '6', holding: false, select: false },
                { num: '7', holding: false, select: false },
                { num: '8', holding: true, select: false },
                { num: '9', holding: false, select: false },
                { num: '10', holding: false, select: false },
                { num: '11', holding: false, select: false },
                { num: '12', holding: false, select: false },
                { num: '13', holding: false, select: false },
                { num: '14', holding: false, select: false },
                { num: '15', holding: true, select: false },
                { num: '16', holding: true, select: false },
                { num: '17', holding: false, select: false },
                { num: '18', holding: false, select: false },
                { num: '19', holding: false, select: false },
                { num: '20', holding: false, select: false },
                { num: '21', holding: false, select: false },
                { num: '22', holding: false, select: false },
                { num: '23', holding: true, select: false },
                { num: '24', holding: true, select: false },
                { num: '25', holding: false, select: false },
                { num: '26', holding: true, select: false },
                { num: '27', holding: false, select: false },
                { num: '28', holding: true, select: false },
                { num: '29', holding: false, select: false },
                { num: '30', holding: true, select: false },
                { num: '41', holding: true, select: false },
                { num: '42', holding: true, select: false },
                { num: '43', holding: true, select: false },
                { num: '44', holding: false, select: false },
                { num: '45', holding: false, select: false },
                { num: '46', holding: true, select: false },
                { num: '47', holding: false, select: false },
                { num: '48', holding: true, select: false },
                { num: '49', holding: false, select: false },
                { num: '50', holding: true, select: false },
                { num: '51', holding: false, select: false },
                { num: '52', holding: false, select: false },
                { num: '53', holding: true, select: false },
                { num: '54', holding: false, select: false },
                { num: '55', holding: false, select: false },
                { num: '56', holding: false, select: false },
                { num: '57', holding: false, select: false },
                { num: '58', holding: true, select: false },
                { num: '59', holding: false, select: false },
                { num: '60', holding: true, select: false },
                { num: '61', holding: false, select: false },
                { num: '62', holding: false, select: false },
                { num: '63', holding: true, select: false },
                { num: '64', holding: true, select: false },
                { num: '65', holding: false, select: false },
                { num: '66', holding: false, select: false },
                { num: '67', holding: false, select: false },
                { num: '68', holding: true, select: false },
                { num: '69', holding: false, select: false },
                { num: '70', holding: true, select: false },

            ]
            ,
            List2: [{}, {}],
            today: [{
                time: '0:00',
                language: '粤语',
                price: '42'
            }, {
                time: '0:00',
                language: '粤语',
                price: '42'
            }, {
                time: '0:00',
                language: '粤语',
                price: '42'
            }, {
                time: '0:00',
                language: '粤语',
                price: '42'
            }],
            tomorrow: [{
                time: '0:00',
                language: '粤语',
                price: '42'
            }, {
                time: '0:00',
                language: '粤语',
                price: '42'
            }, {
                time: '0:00',
                language: '粤语',
                price: '42'
            }, {
                time: '0:00',
                language: '粤语',
                price: '42'
            }],
            aftertomorrow: [{
                time: '0:00',
                language: '粤语',
                price: '42'
            }, {
                time: '0:00',
                language: '粤语',
                price: '42'
            }, {
                time: '0:00',
                language: '粤语',
                price: '42'
            }, {
                time: '0:00',
                language: '粤语',
                price: '42'
            }]
        }
    }
    shouldComponentUpdate() {
        return true;
    }
    changeshow() {
        // let temp=!this.state.Lshow
        this.setState({
            Lshow: !this.state.Lshow
        });
        // console.log(this.state.Lshow)
    }
    changenum(key) {
        this.setState({
            Lnum: key
        });
        for (let i = 0; i < this.state.List.length; i++) {
            document.getElementsByClassName('imglist')[i].style.border = "none"
        }
        document.getElementsByClassName('imglist')[key].style.border = "yellow 2px solid"
    }
    changehold(key) {
        // console.log(key)
        var temps = this.state.seats;
        temps[key].select = !temps[key].select;
        this.setState({
            items: temps
        });
    }
    goDingdan() {
        let { history } = this.props;
        history.push({
            pathname: '/dingdan',
            state: {
                
            }
        })
    };
    render() {
        return (
            <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
                <div style={{ position: 'fixed', width: '100%', height: '100%', zIndex: '99', bottom: '0', background: '#686868', opacity: '0.5', display: this.state.Lshow === true ? 'block' : 'none' }}></div>
                <div style={{ position: 'fixed', width: '100%', height: '70%', zIndex: '100', overflow:'scroll',paddingBottom:'60px',bottom: '0', background: '#ffffff', display: this.state.Lshow === true ? 'block' : 'none' }}>
                    <div style={{ width: '100%', height: '40px', textAlign: 'right', lineHeight: '40px', fontSize: '30px' }}><Icon type="close" onClick={this.changeshow.bind(this)} /> </div>
                    <div style={{ width: '100%', height: '30px', textAlign: 'center', lineHeight: '30px', fontSize: '20px' }}>选择座位</div>
                    <div style={{ width: '90%', height: '40px', padding: '5%' }}>
                        <div>
                            <span >广州增城万达广场店</span>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span >95%</span>
                        </div>
                        <div >
                            <span >2019-04-05 10:20 英语IMAX 3D</span>
                            <span>1号厅-IMAX巨幕影厅</span>
                        </div>
                        <div style={{ margin: '5%', width: '100%', height: '200px', overflow: 'scroll', border: '1px solid #686868' }}>
                            <div style={{ width: '700px', height: '350px' }}>
                                <ul style={{ padding: '10%', width: '100%', height: '100%', border: '1px #686868 solid' }}>
                                    {
                                        this.state.seats.map((item, index) => (
                                            <li onClick={this.changehold.bind(this, index)}
                                                style={{ width: '30px', height: '30px', margin: '7px', listStyle: 'none', float: 'left', border: '1px #686868 solid', textAlign: 'center', background: item.holding === true ? '#58bc58' : (item.select === true ? '#3385ff' : '#ffffff') }} key={index} >
                                                {item.num}
                                            </li>))
                                    }

                                </ul>
                            </div>
                        </div>

                        <div style={{ width: '120%', height: '50px', padding: '5%' }}>
                            <div style={{ width: '70%', height: '50px', float: 'left', textAlign: 'left', lineHeight: '50px' }}><span >提交后查看优惠价格</span></div>
                            <div onClick={this.goDingdan.bind(this)} style={{ width: '30%', height: '50px', float: 'left', textAlign: 'center', background: '#bf974d', color: '#ffffff', lineHeight: '50px' }}>提交订单</div>
                        </div>
                    </div>

                </div>

                <div style={{ width: '100%', height: '30%', background: '#4e3f38', boxSizing: 'border-box', paddingTop: '10%', overflowX: 'scroll' }}>
                    <ul id='Lul' style={{ width: '1400px', height: '150px', padding: '2%' }}>

                        {
                            this.state.List.map((item, index) => (<li className='imglist' onClick={this.changenum.bind(this, index)} style={{ width: '110px', height: '100%', background: 'green', margin: '0px 7px', listStyle: 'none', float: 'left' }} key={index} >
                                <img style={{ width: '100%', height: '100%' }} src={item} alt="" />
                            </li>))
                        }

                    </ul>
                </div>
                <div style={{ width: '95%', height: '80px', padding: '10px', border: '1px solid #686868', margin: '2%' }}>
                    <div>广州市</div>
                    <h3 style={{ height: '16px', padding: '0' }} >广州增城万达广场店</h3>
                    <h5 style={{ height: '13px', padding: '0', color: '#686868' }} >广州市增城区荔城街增城大道69号万达广场1幢娱乐楼4A-5A</h5>
                </div>

                <Tabs defaultActiveKey="1" onChange={callback} style={{ paddingLeft: '20px' }}>
                    <TabPane tab="今天" key="1">
                        {
                            this.state.today.map((item, index) => (<li key={index} onClick={this.changeshow.bind(this)} style={{ padding: '5px', margin: '5px', border: '1px solid #686868', width: '40%', float: 'left' }}>
                                <div className="daily-schedule touching border border-all" data-log="{'da_src': 'buyTicketLink'}" data-movie_id="96123" data-cinema_id="8077" data-seq_no="C876201904030020010" data-starttime="1554286500000" data-date="2019-04-03 18:15" data-remain_seats="99" data-theater_name="2号厅-巨幕高亮厅" data-version="粤语2D" data-unit_price="42" data-remained_seat_number="278" data-choosetagmap="null" data-choosetagv2map="{}" data-cinema_name="广州增城万达广场店">
                                    <div className="time-info">
                                        <div className="time">{item.time}</div>
                                        <div className="type">{item.language}</div>
                                    </div>
                                    <div className="price-info border border-left">
                                        <div className="price">
                                            <i className="yen">¥</i>{item.price}
                                        </div>
                                    </div>
                                </div>
                            </li>

                            ))
                        }
                    </TabPane>
                    <TabPane tab="明天" key="2">
                        {
                            this.state.tomorrow.map((item, index) => (<li key={index} onClick={this.changeshow.bind(this)} style={{ padding: '5px', margin: '5px', border: '1px solid #686868', width: '40%', float: 'left' }}>
                                <div className="daily-schedule touching border border-all" data-log="{'da_src': 'buyTicketLink'}" data-movie_id="96123" data-cinema_id="8077" data-seq_no="C876201904030020010" data-starttime="1554286500000" data-date="2019-04-03 18:15" data-remain_seats="99" data-theater_name="2号厅-巨幕高亮厅" data-version="粤语2D" data-unit_price="42" data-remained_seat_number="278" data-choosetagmap="null" data-choosetagv2map="{}" data-cinema_name="广州增城万达广场店">
                                    <div className="time-info">
                                        <div className="time">{item.time}</div>
                                        <div className="type">{item.language}</div>
                                    </div>
                                    <div className="price-info border border-left">
                                        <div className="price">
                                            <i className="yen">¥</i>{item.price}
                                        </div>
                                    </div>
                                </div>
                            </li>

                            ))
                        }
                    </TabPane>
                    <TabPane tab="后天" key="3">
                        {
                            this.state.aftertomorrow.map((item, index) => (<li key={index} onClick={this.changeshow.bind(this)} style={{ padding: '5px', margin: '5px', border: '1px solid #686868', width: '40%', float: 'left' }}>
                                <div className="daily-schedule touching border border-all" data-log="{'da_src': 'buyTicketLink'}" data-movie_id="96123" data-cinema_id="8077" data-seq_no="C876201904030020010" data-starttime="1554286500000" data-date="2019-04-03 18:15" data-remain_seats="99" data-theater_name="2号厅-巨幕高亮厅" data-version="粤语2D" data-unit_price="42" data-remained_seat_number="278" data-choosetagmap="null" data-choosetagv2map="{}" data-cinema_name="广州增城万达广场店">
                                    <div className="time-info">
                                        <div className="time">{item.time}</div>
                                        <div className="type">{item.language}</div>
                                    </div>
                                    <div className="price-info border border-left">
                                        <div className="price">
                                            <i className="yen">¥</i>{item.price}
                                        </div>
                                    </div>
                                </div>
                            </li>

                            ))
                        }
                    </TabPane>
                </Tabs>,


            </div>
        );
    }
}


export default connect(
    (state) => {
        // console.log(state)
        return state
    },
    (dispatch) => {
        return {
            // setAuthor(){
            //     console.log(this)
            //     dispatch({
            //         type: "setAuthor",
            //         author: this.state.author
            //     })
            // }
        }
    }
)(List1)


