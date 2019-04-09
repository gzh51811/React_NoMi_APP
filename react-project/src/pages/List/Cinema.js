import React,{Component} from 'react';
import { Row,Col,Icon } from 'antd';

import axios from 'axios';

import CinemaItem from './CinemaItem';

class Cinema extends Component{
    constructor(){
        super();
        this.state = {
            
        }
    }

    // async componentWillMount(){
        //     let data = await axios.get('https://mdianying.baidu.com/movie/cinema',{
        //         params:{
        //             sfrom:'wise_shoubai',
        //             sub_channel:'',
        //             c:257,
        //             cc:'',
        //             lat:'',
        //             lng:'',
        //             MOVIETOKEN:'0b74a2e834d7998aef74802b2003fc77',
        //             device:'2_320_',
        //             subTabIdx:0,
        //             'query%5BmovieCinemaTabIdx%5D':1,
        //             'query%5BsubTabIdx%5D':0,
        //             'query%5BpageId%5D':'portal%2FmovieCinema',
        //             'query%5Btitle%5D':'%E7%94%B5%E5%BD%B1',
        //             'query%5Bvoucher%5D':false,
        //             movieCinemaTabIdx:1,
        //             pageId:'portal%2FmovieCinema',
        //             title:'%E7%94%B5%E5%BD%B1',
        //             voucher:false
        //         }
        //     })
        //     console.log(data)
    // }

    render(){
        return <div className="cinema">
            <Row className="option">
                <Col span={8} className=""><span>全城&nbsp;<Icon type="down" /></span></Col>
                <Col span={8} className=""><span>品牌&nbsp;<Icon type="down" /></span></Col>
                <Col span={8} className=""><span>筛选&nbsp;<Icon type="down" /></span></Col>
            </Row>
            <CinemaItem/>
            <CinemaItem/>
            <CinemaItem/>
            <CinemaItem/>
            <CinemaItem/>
            <CinemaItem/>
            <CinemaItem/>
        </div>
    }
}

export default Cinema;