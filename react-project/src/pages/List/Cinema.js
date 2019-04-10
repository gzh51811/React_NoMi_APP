import React,{Component} from 'react';
import { Row,Col,Icon } from 'antd';

import CinemaItem from './CinemaItem';

class Cinema extends Component{
    constructor(){
        super();
        this.state = {
            
        }
    }

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