import React, { Component } from 'react';
import './orderForm.css';
import withAxios from '../../hoc/withAxios';

class orderForm extends Component{
    constructor(){
        super();
        this.state = {
        }
    }
    render(){
        return <div className="orderForm">
           <div className="info_content">
                <div className="seat-info">
                    <h4>反贪风暴4</h4>
                    <div className="cinema-name">广州增城万达广场店</div>
                    <div className="show-time"><span>2019.04.09(周二)</span><span>21:05 - 22:43</span><span>粤语2D</span></div>
                    <div className="seat">2号厅-巨幕高亮厅 - 7排19座 7排20座</div>
                </div>
                <div className="inner-item">
                <span className="act-name">优惠和抵用券</span>
                <span className="act-des">无可用优惠</span>
                </div>
                <div className="inner-item">
                <span className="act-name">商家优惠</span>
                <span className="act-des">无可用优惠</span>
                </div>
                <div className="inner-item">
                    <em>小计</em>
                    <span className="subtotal-final">¥<b className="ticket-subtotal subtotal">88</b></span>
                    <p className="subtotal-detail">￥44 x 2张 (已含服务费)</p>
                </div>
                <div className="tips">
                    <div className="alter">该场次不可改签</div>
                    <div className="refund">该场次不可退票</div>
                </div>
           </div>
           <ul className="info-item">
            <li className="phone">
                188 **** 416
            </li>
            <li className="no-sms">取票码短信不再自动发送，请到订单中心查看</li>
            </ul>
            <div className="fixed-wrapper">
                <div className="count">
                    <em id="need-pay-text">实付</em><span className="rmb">¥</span><span id="need-pay-price" className="pay-price">88</span>
                </div>
                <div className="price-detail-btn">
                    明细
                </div>

                <div id="pay-btn">立即支付</div>
            </div>
        </div>
    }
}
orderForm = withAxios(orderForm);
export default orderForm;