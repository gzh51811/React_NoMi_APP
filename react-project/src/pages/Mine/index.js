import React,{Component} from 'react';

import './Mine.css';
import { Icon } from 'antd';

class Mine extends Component{
    render(){
        return <div className="Mine">
                <div className="Mine_head">
                    <div className="Mine_head_top">
                        <Icon type="mail" />
                    </div>
                    <div className="Mine_head_bottom">
                        <div className="head_bottom_left"></div>
                        <div className="head_bottom_right">
                            <span>立即登录</span>
                            <Icon type="right" />
                        </div>
                    </div>
                </div>
                <div className="Mine_indent">
                    <div className="Mine_indent_top">
                        我的订单
                        <div className="geng">
                            <span>查看全部</span>
                            <Icon type="caret-right" />
                        </div>
                    </div>
                    <div className="Mine_indent_bot">
                        <div className="diandan">
                            <Icon type="wallet" />
                            <span>待付款</span>
                        </div>
                        <div className="diandan">
                        <Icon type="money-collect" />
                            <span>已付款</span>
                        </div>
                        <div className="diandan">
                        <Icon type="file-sync" />
                            <span>待评价</span>
                        </div>
                        <div className="diandan">
                        <Icon type="import" />
                            <span>退款</span>
                        </div>
                    </div>
                    
                </div>
                <div className="Mine_indent_vip">
                    <Icon type="credit-card" />
                        <div className="slogen">
                            <p className="vip">超值会员卡</p>
                            <p className="title">开卡即送超级大礼包，再享首单折上折</p>
                        </div>
                        <div className="btn">立即开通</div>
                </div>
                <div className="Mine_indent">
                    <div className="Mine_indent_top">
                        我的资产
                    </div>
                    <div className="Mine_indent_bot">
                        <div className="diandan">
                        <Icon type="profile" />
                            <span>优惠券</span>
                        </div>
                        <div className="diandan">
                        <Icon type="credit-card" />
                            <span>电影卡</span>
                        </div>
                        <div className="diandan">
                        <Icon type="switcher" />
                            <span>观影卷</span>
                        </div>
                        <div className="diandan">
                        <Icon type="barcode" /> 
                            <span>兑换码</span>
                        </div>
                    </div>
                </div>
                <div className="Mine_indent">
                    <div className="Mine_indent_top">
                        我的活动
                    </div>
                    <div className="Mine_indent_bot">
                        <div className="diandan">
                        <Icon type="heart" />
                            <span>想看</span>
                        </div>
                        <div className="diandan">
                        <Icon type="form" />
                            <span>我的评论</span>
                        </div>
                        <div className="diandan">
                        <Icon type="user-add" />
                            <span>我的关注</span>
                        </div>
                        <div className="diandan">
                        <Icon type="import" />
                            <span>我的预约</span>
                        </div>
                    </div>
                </div>
                <div className="Mine_indent">
                    <div className="Mine_indent_top">
                        更多服务
                    </div>
                    <div className="Mine_indent_bot">
                        <div className="diandan">
                        <Icon type="environment" />
                            <span>地址管理</span>
                        </div>
                        <div className="diandan">
                        <Icon type="flag" />
                            <span>约票活动</span>
                        </div>
                        <div className="diandan">
                        <Icon type="phone" />
                            <span>客服电话</span>
                        </div>
                    </div>
                </div>
            </div>
    }
}


export default Mine;